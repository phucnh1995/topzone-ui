import { forwardRef, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import ProductItem from '~/components/ProductItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Search(props, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
    }));

    const classes = cx('search-modal', {
        show: props.show,
    });

    return (
        <div className={classes}>
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
                    <input ref={inputRef} type="text" placeholder="Tìm kiếm sản phẩm" autoFocus />
                    <Button className={cx('delSearch')}>
                        <i className={cx('topzone-delSearch')}></i>
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default forwardRef(Search);
