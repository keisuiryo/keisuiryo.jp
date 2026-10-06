import ArchiveMessage from '../modules/archive-message'
import voices from '../../content/legacy-voices.json'

export default function WakayamaMessage() {
    return <ArchiveMessage voice={voices.find((voice) => voice.slug === 'wakayama')} />
}
