import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ data }) {
    return (
        <Link to="/" className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://bizweb.dktcdn.net/100/031/560/products/iphone-14-pro-max-deep-purple-broshop-1-bdadc716-2c66-4905-ab91-9f30daad4ced-6a4fe79f-4039-4457-a0f3-a4cbb99c088b-b556d50b-cfff-4caa-a78d-f87edcd8568b-0b506fe2-e8a0-4d3a-9da0-e49db1445e45.jpg?v=1663326675903"
                alt=" "
            />
            <div className={cx('info')}>
                <span className={cx('name')}>iPhone 14 Pro 256GB</span>
                <p>
                    <span className={cx('price')}>28.590.000₫</span>
                    <span className={cx('cost')}>34.990.000₫</span>
                </p>
            </div>
        </Link>
    );
}

export default ProductItem;
