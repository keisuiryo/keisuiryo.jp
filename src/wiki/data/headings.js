// Used by both the Markdown renderer and data consumers, so that every link
// points to the exact ID assigned to its heading.
function getMarkdownLines(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim().split(/\r?\n/)
}

function headingText(label) {
  return label.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').trim()
}

function slugifyHeading(text) {
  return text.normalize('NFKC').toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}_\-\s]/gu, '')
    .trim().replace(/\s+/g, '-') || 'section'
}

function getHeadings(content) {
  const candidates = []
  const explicitIds = new Set()

  getMarkdownLines(content).forEach((line, index) => {
    const match = line.trim().match(/^(#{1,4})\s+(.*)$/)
    if (!match) return
    const explicit = match[2].match(/\s+\{#([A-Za-z][A-Za-z0-9_-]*)\}$/)
    const label = explicit ? match[2].slice(0, explicit.index) : match[2]
    const id = explicit?.[1]
    if (id && explicitIds.has(id)) throw new Error(`Duplicate explicit heading ID: ${id}`)
    if (id) explicitIds.add(id)
    const depth = match[1].length
    candidates.push({ index, depth, level: Math.min(depth + 1, 4), label, text: headingText(label), explicitId: id })
  })

  const used = new Set(explicitIds)
  return candidates.map(({ explicitId, ...heading }) => {
    if (explicitId) return { ...heading, id: explicitId }
    const base = slugifyHeading(heading.text)
    let id = base
    let suffix = 1
    while (used.has(id)) id = `${base}-${suffix++}`
    used.add(id)
    return { ...heading, id }
  })
}

module.exports = { getHeadings, getMarkdownLines, slugifyHeading }
