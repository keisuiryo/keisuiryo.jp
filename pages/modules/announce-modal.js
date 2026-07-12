import { useRef, useEffect } from 'react'
import Link from 'next/link'

export default function AnnounceModal() {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (typeof window === 'undefined') return
        let seen = null
        try {
            seen = sessionStorage.getItem('keisui-dissolution-modal')
        } catch (e) { }
        if (!seen && dialogRef.current) {
            dialogRef.current.showModal()
        }
    }, [])

    const close = () => {
        try {
            sessionStorage.setItem('keisui-dissolution-modal', '1')
        } catch (e) { }
        if (dialogRef.current) dialogRef.current.close()
    }

    // 背景（::backdrop）がクリックされたときのみ閉じる。
    // dialog 自身の padding は 0 にしているため、クリック対象が dialog 要素なら背景クリック。
    const onDialogClick = (e) => {
        if (e.target === dialogRef.current) close()
    }

    return (
        <dialog
            ref={dialogRef}
            className='announce-modal'
            onClick={onDialogClick}
            onCancel={close}>
            <div className='announce-modal-inner'>
                <button className='announce-modal-close' onClick={close} aria-label='閉じる'>
                    <span className="material-symbols-rounded announce-modal-close-icon">close</span>
                </button>
                <h2 className='announce-modal-title'>
                    <span className="material-symbols-rounded announce-modal-icon">book_2</span>
                    解散の集いのお知らせ
                </h2>
                <p className='announce-modal-text'>東北大学基督教青年会理事会による、渓水寮の管理運営は2027年3月末をもって終了します。これに際して、解散の集いが行われます。詳細や出欠は、以下のリンクをご参照ください。</p>
                <Link
                    href='https://docs.google.com/forms/d/e/1FAIpQLSdjjRT8IgpfHhZ5nfLMfqa92jaZT2Rr2WwSvVX-iWzgOnXe6A/viewform'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='index-inround-link announce-modal-link'
                    onClick={close}>
                    解散の集いのご説明、ご案内はこちらから
                    <span className="material-symbols-rounded index-link-icon">
                        arrow_forward_ios
                    </span>
                </Link>
            </div>
        </dialog>
    )
}
