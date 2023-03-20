import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import ProductItem from '~/components/ProductItem';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search-modal')}>
            <div className={cx('search-modal-overlay')}></div>
            <HeadlessTippy
                interactive
                visible
                placement="bottom"
                offset={[0, 0]}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <span className={cx('search-title')}>Sản phẩm gợi ý</span>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                )}
            >
                <div className={cx('search-modal-body')}>
                    <i className={cx('topzone-search')}></i>
                    <input type="text" placeholder="Tìm kiếm sản phẩm"></input>
                    <i className={cx('topzone-delSearch')}></i>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
