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
                    寮クリスマス会のご案内
                </h2>
                <div className='announce-modal-text'>
                    <p>2026年12月12日（土）16時30分から、渓水寮でクリスマス会を開催します。齋藤 篤先生（日本キリスト教団仙台宮城野教会牧師）を講師にお迎えします。</p>
                    <p><strong>会費：</strong>お一人1,000円程度（当日払い）</p>
                    <p><strong>回答期限：</strong>検討中</p>
                    <p>参加を希望される方は <a href='mailto:keisuiryo@gmail.com'>keisuiryo@gmail.com</a> までお申し込みください。会員以外の方は直接お申し込みいただけません。</p>
                </div>
            </div>
        </dialog>
    )
}
