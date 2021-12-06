

function Header() {
    return (
        <header className="bg-lightElements dark:bg-darkElements h-16 w-full shadow-lg px-20 flex justify-center items-center">
            <div className="w-full max-w-7xl flex justify-between items-center">
                <h1 className="text-xl">Where in the world?</h1>
                <ThemeButton />
            </div>
        </header>
    )
}

function ThemeButton() {
    function handleClick(event) {
        let span = event.currentTarget.firstElementChild;
        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
            span.classList.toggle("before:-translate-x-7", true)
            span.classList.toggle("before:bg-darkElements", false)
            span.classList.toggle("before:bg-white", true)
        } else {
            localStorage.theme = "dark";
            span.classList.toggle("before:-translate-x-7", false)
            span.classList.toggle("before:bg-darkElements", true)
            span.classList.toggle("before:bg-white", false)
        }
        setTheme()
    }
    return (
        <button     
            className="bg-transparent flex items-center transform"
            onClick={handleClick}>
                <Toggle />
                Dark mode
        </button>
    );
}

function Toggle() {
    return (
        <span id="theme-switch" className="
            inline-block rounded-full w-14 h-7 mr-3 bg-green-400 relative
            before:block before:transform before:transition-all before:absolute before:rounded-full  before:w-6 before:h-6 before:top-0.5 before:right-0.5
        "></span>
    );
}

function setTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
}
setTheme()

export default Header;