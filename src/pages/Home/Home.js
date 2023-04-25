import Carousel from 'react-bootstrap/Carousel';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <div className={cx('slider-home')}>
                {/* <div className={cx('slider-stage-outer')}>
                    <div className={cx('slider-stage')}>
                        <div className={cx('slider-item')}>
                            <a>
                                <Image src={images.slider1} alt="" />
                            </a>
                        </div>
                    </div> */}

                {/* </div> */}
                {/*                 
                <div className={cx('slider-nav')}></div>
                <div className={cx('slider-dots')}></div> */}

                <Carousel
                    interval={7000}
                    prevIcon={<span aria-hidden="true" className={cx('carousel-control-prev-icon')} />}
                    nextIcon={<span aria-hidden="true" className={cx('carousel-control-next-icon')} />}
                    wrap={false}
                >
                    <Carousel.Item>
                        <Image className={cx('d-block', 'w-100')} src={images.slider1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className={cx('d-block', 'w-100')} src={images.slider2} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className={cx('d-block', 'w-100')} src={images.slider3} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className={cx('wrapper-box-product')}>
                <div className={cx('box-cate-product')}>Sản phẩm theo thể loại</div>
                <div className={cx('box-slide')}>Tek zone</div>
            </div>
        </>
    );
}

export default Home;
