import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as searchService from '~/services/searchService';
import { useDebounce } from '~/hooks';
import HeadlessTippy from '@tippyjs/react/headless';
import ProductItem from '~/components/ProductItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Search({ show, close }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounceValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchService.search(debounceValue);

            setSearchResult(result);
        };

        fetchApi();
        // eslint-disable-next-line
    }, [debounceValue]);

    useLayoutEffect(() => {
        if (show) {
            inputRef.current.focus();
        }
    });

    const handleInsideModal = (e) => {
        e.stopPropagation();
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        close(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const classes = cx('search-modal', {
        show,
    });

    return show ? (
        <div className={classes} onClick={handleClear}>
            <div className={cx('search-modal-overlay')}></div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                placement="bottom"
                offset={[0, 0]}
                render={(attrs) => (
                    <div className={cx('search-result')} onClick={handleInsideModal} tabIndex="-1" {...attrs}>
                        <span className={cx('search-title')}>Sản phẩm gợi ý</span>
                        {searchResult.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))}
                    </div>
                )}
            >
                <div className={cx('search-modal-body')} onClick={handleInsideModal}>
                    <i className={cx('topzone-search')}></i>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        autoFocus
                    />
                    <Button onClick={handleClear} className={cx('delSearch')}>
                        <i className={cx('topzone-delSearch')}></i>
                    </Button>
                </div>
            </HeadlessTippy>
        </div>
    ) : null;
}

export default Search;
