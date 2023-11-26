import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <nav className='index-nav'>
            <span className='nav-logo font-semibold'>TurBin</span>
            <div className='nav-menu'>
                <img
                    src='/images/coupon.svg'
                    className='nav-menu-item'
                    alt=''
                />

                <img src='/images/bell.svg' className='nav-menu-item' alt='' />
                <img src='/images/menu.svg' className='nav-menu-item' alt='' />
            </div>
        </nav>
    );
};

export default MainNavbar;
