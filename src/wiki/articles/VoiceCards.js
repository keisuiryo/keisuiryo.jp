import Link from 'next/link'

export default function VoiceCards({ voices }) {
  return (
    <div className="messages-archive-grid">
      {voices.map((voice) => (
        <Link href={voice.route} className="messages-archive-card" key={voice.id}>
          <h3>{voice.title}</h3>
          {(voice.author || voice.affiliation) && <p>{[voice.author, voice.affiliation].filter(Boolean).join('・')}</p>}
          {voice.listDescription && <p className="messages-archive-excerpt">{voice.listDescription}</p>}
          <span>記事を読む →</span>
        </Link>
      ))}
    </div>
  )
}
