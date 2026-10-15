import ArchiveMessage from '../../components/archive-message'
import voices from '../../content/legacy-voices.json'

export default function YamaguchiMessage() {
    return <ArchiveMessage voice={voices.find((voice) => voice.slug === 'yamaguchi')} />
}
