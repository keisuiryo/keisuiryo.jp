import React from 'react'

function renderInline(text, keyPrefix) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean)
  return tokens.map((token, index) => {
    const key = `${keyPrefix}-${index}`
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={key}>{token.slice(2, -2)}</strong>
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const external = /^https?:\/\//.test(link[2])
      return <a key={key} href={link[2]} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{link[1]}</a>
    }
    return token
  })
}

function tableCells(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim())
}

function isTableDivider(line) {
  const cells = tableCells(line)
  return cells.length > 0 && cells.every(cell => /^:?-{3,}:?$/.test(cell))
}

function isBlockStart(lines, index) {
  const line = lines[index]
  return /^#{1,4}\s/.test(line) || /^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line) || /^\|/.test(line) || /^---+$/.test(line)
}

export default function MarkdownArticle({ content }) {
  const markdown = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim()
  const lines = markdown.split(/\r?\n/)
  const elements = []
  const headings = []
  let index = 0
  let sectionNumber = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) { index += 1; continue }

    const heading = line.match(/^(#{1,4})\s+(.*)$/)
    if (heading) {
      const level = Math.min(heading[1].length + 1, 4)
      const id = `wiki-section-${++sectionNumber}`
      const children = renderInline(heading[2], id)
      const Tag = `h${level}`
      elements.push(<Tag id={id} key={id}>{children}</Tag>)
      if (level <= 3) headings.push({ id, label: heading[2].replace(/\*\*/g, ''), level })
      index += 1
      continue
    }

    if (/^---+$/.test(line)) {
      elements.push(<hr key={`rule-${index}`} />)
      index += 1
      continue
    }

    if (/^\|/.test(line)) {
      const tableLines = []
      while (index < lines.length && /^\s*\|/.test(lines[index])) tableLines.push(lines[index++])
      const rows = tableLines.filter((row, rowIndex) => rowIndex !== 1 || !isTableDivider(row)).map(tableCells)
      const [header, ...body] = rows
      elements.push(
        <div className="wiki-table-scroll" key={`table-${index}`}>
          <table>
            <thead><tr>{header.map((cell, cellIndex) => <th key={cellIndex}>{renderInline(cell, `table-head-${index}-${cellIndex}`)}</th>)}</tr></thead>
            <tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{renderInline(cell, `table-${index}-${rowIndex}-${cellIndex}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      )
      continue
    }

    if (/^\s*[-*]\s+/.test(lines[index]) || /^\s*\d+\.\s+/.test(lines[index])) {
      const ordered = /^\s*\d+\.\s+/.test(lines[index])
      const List = ordered ? 'ol' : 'ul'
      const items = []
      while (index < lines.length && (/^\s*[-*]\s+/.test(lines[index]) || /^\s*\d+\.\s+/.test(lines[index]))) {
        items.push(lines[index].replace(/^\s*(?:[-*]|\d+\.)\s+/, '').trim())
        index += 1
      }
      elements.push(<List key={`list-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>)}</List>)
      continue
    }

    const paragraph = [line]
    index += 1
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines, index)) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    const paragraphText = paragraph.join(' ')
    const featureLink = /^→\s*\[[^\]]+\]\([^)]+\)$/.test(paragraphText)
    elements.push(<p className={featureLink ? 'wiki-feature-link' : undefined} key={`paragraph-${index}`}>{renderInline(paragraphText, `paragraph-${index}`)}</p>)
  }

  return (
    <div className="wiki-markdown">
      {headings.length > 1 && (
        <nav className="wiki-toc" aria-label="記事目次">
          <h2>目次</h2>
          <ol>{headings.map(heading => <li className={`wiki-toc-level-${heading.level}`} key={heading.id}><a href={`#${heading.id}`}>{heading.label}</a></li>)}</ol>
        </nav>
      )}
      <div className="wiki-markdown-body">{elements}</div>
    </div>
  )
}
