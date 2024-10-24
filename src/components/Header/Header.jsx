import css from './Header.module.css'

const Header = () => {
    return (
        <header className="header">
            <div>Logo</div>
            <p className={css.title}>Hello</p>
            <nav>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;