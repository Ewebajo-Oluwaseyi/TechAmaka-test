const Loader = () => {
    return (
        <div className="fixed inset-0 w-full h-full flex justify-cente items-center">
            <svg className="m-auto" style={{background: 'none', display: 'block', shapeRendering: 'auto'}} width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#000000" stroke="none">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
            </svg>
        </div>
    )
}

export default Loader;