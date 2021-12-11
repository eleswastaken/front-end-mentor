import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="px-6 sm:px-8 md:px-10 lg:px-12 xl:px-20 bg-lightElements dark:bg-darkElements h-16 w-full shadow-lg flex justify-center items-center">
            <div className="w-full max-w-[95rem] flex justify-between items-center">
                <h1 className="text-xl font-bold"><Link to="/">Where in the world?</Link></h1>
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
            onClick={handleClick}
            aria-label="Switch theme">
                <Toggle />
                <span className="hidden md:inline-block ml-3">Dark mode</span>
        </button>
    );
}

function Toggle(props) {
    return (
        <span id="theme-switch" className={`
            inline-block rounded-full w-14 h-7 bg-green-400 relative
            before:block before:transform before:transition-all before:absolute before:rounded-full  before:w-6 before:h-6 before:top-0.5 before:right-0.5
            before:bg-grey-300 ${props.classN}`}></span>
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