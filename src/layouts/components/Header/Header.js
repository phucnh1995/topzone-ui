import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <i className={cx('topzone-logo')}></i>
                    </a>
                    <a href="/">
                        <i className={cx('topzone-apr')}></i>
                    </a>
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('list-menu')}>
                        <li className={cx('menu-item')}>
                            <a href="/iphone">iPhone</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/mac">Mac</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/ipad">iPad</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/watch">Watch</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/am-thanh">Âm thanh</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/phu-kien">Phụ kiện</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/tekzone">TekZone</a>
                        </li>
                        <li className={cx('menu-item')}>
                            <a href="/topcare">TopCare</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('search-cart')}>
                    <div className={cx('search')}>
                        <i className={cx('topzone-search')}></i>
                    </div>
                    <a href="/cart" className={cx('cart')}>
                        <i className={cx('topzone-cart')}></i>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
