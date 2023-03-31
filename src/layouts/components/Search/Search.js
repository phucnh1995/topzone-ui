import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import ProductItem from '~/components/ProductItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Search({ show, close }) {
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setShowSearchResult] = useState(true);

    const inputRef = useRef();
    const searchModalRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    useLayoutEffect(() => {
        if (show) {
            inputRef.current.focus();
        }
    });

    const handleInsideModal = (e) => {
        e.stopPropagation();
    };

    const handleClear = () => {
        close();
    };

    const classes = cx('search-modal', {
        show,
    });

    return show ? (
        <div ref={searchModalRef} className={classes} onClick={handleClear}>
            <div className={cx('search-modal-overlay')}></div>
            <HeadlessTippy
                interactive
                visible={showSearchResult && searchResult.length > 0}
                placement="bottom"
                offset={[0, 0]}
                render={(attrs) => (
                    <div className={cx('search-result')} onClick={handleInsideModal} tabIndex="-1" {...attrs}>
                        <span className={cx('search-title')}>Sản phẩm gợi ý</span>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                )}
            >
                <div className={cx('search-modal-body')} onClick={handleInsideModal}>
                    <i className={cx('topzone-search')}></i>
                    <input ref={inputRef} type="text" placeholder="Tìm kiếm sản phẩm" autoFocus />
                    <Button onClick={handleClear} className={cx('delSearch')}>
                        <i className={cx('topzone-delSearch')}></i>
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    ) : null;
}

export default Search;
