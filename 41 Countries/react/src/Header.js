

function Header() {
    return (
        <header className="bg-lightElements dark:bg-darkElements h-20 w-full shadow-lg px-20 flex justify-between items-center">
            <h1 className="">Where in the world?</h1>
            <button 
                className="bg-transparent "
                onClick={changeTheme}
            >Dark mode</button>
        </header>
    )
}

function changeTheme() {
    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    } else {
        localStorage.theme = "dark";
    }
    setTheme()
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