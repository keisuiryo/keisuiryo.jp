export const config= {
  unstable_runtimeJS: true
}
export default function Fab(props) {
    function scroll() {
        document.getElementById('nav-container').scrollIntoView({behavior:'smooth'})
    }
    return (
        <span href="#nav-container"
            onClick={scroll}
            className="dot-box">
            <svg xmlns="http://www.w3.org/2000/svg" className="dot-image" viewBox="0 0 24 24"
                fill="#ffffff" opacity="0.95">
                <title>メニューを開く</title>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />

            </svg>
        </span>
    )
}