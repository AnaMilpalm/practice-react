const Header = () => {
    return (
        <header style={{display: 'flex', background: 'teal', color: 'white', alignItems: 'center'}}>
            <div>Logo</div>
            <nav>
                <ul style={{display:"flex", listStyle: 'none', gap: '10px' }}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Profile</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;