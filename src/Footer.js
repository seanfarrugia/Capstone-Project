import logo from './assets/little-lemon-small.png';

function Footer() {
    const menuOne = [
        'Home',
        'About',
        'Menu',
        'Reservations',
        'Order Online',
        'Login'
    ]
    const menuTwo = [
        '19/20 Royal Hibernian Way Duke Lane Upper Dublin 2',
        '01-905 8777'
    ]
    const socials = [
        'https://www.facebook.com',
        'https://www.instagram.com',
    ]
    return (
        <footer className="App-footer">
            <div>
                <div className='imageContainer'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <section>
                    <h3>Doormat Navigation</h3>
                    {
                        menuOne && (
                            <ul>
                                {menuOne.map((item, index) => {
                                    return <li key={index}>
                                        <a href='/'>{item}</a>
                                    </li>
                                })}
                            </ul>
                        )
                    }
                </section>
                <section>
                    <h3>Contact</h3>
                    {
                        menuTwo && menuTwo.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </section>
                <section>
                    <h3>Socials</h3>
                    {
                        socials && (
                            <ul>
                                {socials.map((item, index) => {
                                    return <li key={index}>
                                        <a href='/'>{item}</a>
                                    </li>
                                })}
                            </ul>
                        )
                    }
                </section>
            </div>
        </footer>

    );
}

export default Footer;
