import { useRef, useEffect } from 'react'

export default function AnnounceModal() {
    const dialogRef = useRef(null)

    useEffect(() => {
        if (typeof window === 'undefined') return
        let seen = null
        try {
            seen = sessionStorage.getItem('keisui-christmas-modal-2026')
        } catch (e) { }
        if (!seen && dialogRef.current) {
            dialogRef.current.showModal()
        }
    }, [])

    const close = () => {
        try {
            sessionStorage.setItem('keisui-christmas-modal-2026', '1')
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
                    <span className="material-symbols-rounded announce-modal-icon">celebration</span>
                    クリスマスのご案内
                </h2>
                <div className='announce-modal-text'>
                    <p><strong>【日時】</strong>2026年12月12日（土）16時30分～</p>
                    <p><strong>【会場】</strong>渓水寮</p>
                    <p><strong>【内容】</strong>講師　齋藤 篤先生（日本キリスト教団仙台宮城野教会牧師）</p>
                    <p><strong>【会費】</strong>お一人 1000円程度（当日お支払い）</p>
                    <p className="announce-modal-deadline"><strong>【回答期限】</strong>11月12日</p>
                    <p className="announce-modal-note">※会員以外からの直接申込はできません。</p>
                    <p><strong>【連絡先】</strong><a href='mailto:keisuiryo@gmail.com'>keisuiryo@gmail.com</a></p>
                </div>
                <button type="button" className="announce-modal-apply" disabled aria-disabled="true">
                    申し込む
                </button>
            </div>
        </dialog>
    )
}
