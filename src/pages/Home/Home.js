import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <div className={cx('slider-home')}>
                <div className={cx('slider-item')}>
                    <a href="#">
                        <Image className={cx('slider-item-img')} src={images.slider1} alt="" />
                    </a>
                </div>

                <div className={cx('slider-nav')}>
                    <Button slider className={cx('slider-nav-prev')}></Button>
                    <Button slider className={cx('slider-nav-next')}></Button>
                </div>
                <div className={cx('slider-dots')}>
                    <Button dot className={cx('dots-item')}></Button>
                    <Button dot className={cx('dots-item')}></Button>
                    <Button dot className={cx('dots-item')}></Button>
                    <Button dot className={cx('dots-item')}></Button>
                </div>
            </div>
            <div className={cx('wrapper-box-product')}>
                <div className={cx('box-cate-product')}>Sản phẩm theo thể loại</div>
                <div className={cx('box-slide')}>Tek zone</div>
            </div>
        </>
    );
}

export default Home;
