import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Search from '~/layouts/components/Search';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [showSearchModal, setShowSearchModal] = useState(false);

    const headerRef = useRef();

    useEffect(() => {
        if (showSearchModal) {
            document.body.style.overflow = 'hidden';
            headerRef.current.style.display = 'none';
        } else {
            document.body.style.overflow = 'visible';
            headerRef.current.style.display = 'flex';
        }
    }, [showSearchModal]);

    const handleShowSearchModal = () => {
        setShowSearchModal(true);
    };

    const callbackClearSearch = (childData) => {
        setShowSearchModal(childData);
    };

    return (
        <header className={cx('wrapper')}>
            <div ref={headerRef} className={cx('inner')}>
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
                    <Button circle className={cx('search')} onClick={handleShowSearchModal}>
                        <i className={cx('topzone-search')}></i>
                    </Button>
                    <Button circle href="/cart" className={cx('cart')}>
                        <i className={cx('topzone-cart')}></i>
                    </Button>
                </div>
            </div>
            {/* Search Modal*/}
            <Search show={showSearchModal} close={callbackClearSearch} />
        </header>
    );
}

export default Header;
