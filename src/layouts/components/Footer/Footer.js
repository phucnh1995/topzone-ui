import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('foot')}>
                <div className={cx('logo-foot')}>
                    <a href="/">
                        <i className={cx('topzone-logo')}></i>
                    </a>
                    <a href="/">
                        <i className={cx('topzone-apr')}></i>
                    </a>
                </div>
                <ul className={cx('list-foot')}>
                    <li>
                        <span>Tổng đài</span>

                        <a href="tel:1900969642">
                            <span>Mua hàng:</span>
                            <b>1900.9696.42 </b>
                            (7:30 - 22:00)
                        </a>
                        <a href="tel:1900986843">
                            <span>CSKH:</span>
                            <b>1900.9868.43 </b>
                            (8:00 - 21:30)
                        </a>

                        <div className={cx('social-foot')}>
                            <p>Kết nối với chúng tôi</p>
                            <a href="https://www.facebook.com/topzone.vn" className={cx('social-link')}>
                                <i className={cx('iconsocial-facebook')}></i>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCoWdPNr8jSr7JM0OFlKvQHw"
                                className={cx('social-link')}
                            >
                                <i className={cx('iconsocial-youtube')}></i>
                            </a>
                            <a href="https://zalo.me/2040551312124557463" className={cx('social-link')}>
                                <i className={cx('iconsocial-zalo')}></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <span>Hệ thống cửa hàng</span>
                        <a href="/he-thong-cua-hang">Xem 100 cửa hàng</a>
                        <a href="/noi-quy-cua-hang">Nội quy cửa hàng</a>
                        <a href="/chat-luong-phuc-vu">Chất lượng phục vụ</a>
                        <a href="/bao-hanh-doi-tra">Chính sách bảo hành &amp; đổi trả</a>
                    </li>
                    <li>
                        <span>Hỗ trợ khách hàng</span>
                        <a href="/dieu-kien-giao-dich">Điều kiện giao dịch chung</a>
                        <a href="/huong-dan-mua-hang">Hướng dẫn mua hàng online</a>
                        <a href="/giao-hang">Chính sách giao hàng</a>
                        <a href="/thanh-toan">Hướng dẫn thanh toán</a>
                    </li>
                    <li>
                        <span>Về thương hiệu TopZone</span>

                        <a
                            href="/tekzone/tat-tan-tat-thong-tin-ve-app-tich-diem-hoan-toan-moi-1480642#gioithieu"
                            className={cx('color-link')}
                        >
                            Tích điểm Quà tặng VIP
                        </a>
                        <a href="/gioi-thieu">Giới thiệu TopZone</a>
                        <a href="https://www.thegioididong.com/b2b">Bán hàng doanh nghiệp</a>
                        <a href="/bao-mat-thong-tin">Chính sách bảo mật thông tin</a>
                        <a rel="nofollow" href="https://www.topzone.vn/?sclient=mobile">
                            Xem bản mobile
                        </a>
                    </li>
                    <li>
                        <span>Trung tâm bảo hành TopCare</span>
                        <a href="/topcare">Giới thiệu TopCare</a>
                    </li>
                </ul>
                <div className={cx('copyright-foot')}>
                    <p>
                        © 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày
                        02/01/2007. <br /> Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP. Hồ Chí Minh. Điện thoại:
                        028 38125960.
                    </p>
                </div>
                <div className={cx('certify-foot')}>
                    <a href="http://online.gov.vn/Home/WebDetails/88735">
                        <Image src={images.certifyBct} width={127} height={47} alt="" />
                    </a>
                    <a href="https://tinnhiemmang.vn/danh-ba-tin-nhiem/topzonevn-1635823490">
                        <Image src={images.handleCert} width={150} height={40} alt="" />
                    </a>
                    <a href="https://www.dmca.com/Protection/Status.aspx?ID=4f44c8e7-b645-4ddb-8aec-c130d0598c85&refurl=https://www.topzone.vn/">
                        <Image src={images.dmcaProtected} width={135} height={32} alt="" />
                    </a>
                </div>
            </div>
            <div className={cx('footer__logo')}>
                <p className={cx('footer__logo-heading')}>Ghé thăm các website khác cùng tập đoàn MWG</p>
                <ul className={cx('footer__logo-list')}>
                    <li>
                        <a href="https://www.thegioididong.com/">
                            <i className={cx('iconlogo-thegioididong')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.dienmayxanh.com/">
                            <i className={cx('iconlogo-dienmayxanh')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.bachhoaxanh.com/">
                            <i className={cx('iconlogo-bachhoaxanh')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.dienmayxanh.com/">
                            <i className={cx('iconlogo-ankhang')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.avakids.com/">
                            <i className={cx('iconlogo-kids')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.avakids.com/">
                            <i className={cx('iconlogo-sport')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.dichvutantam.com/">
                            <i className={cx('iconlogo-tantam')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.dichvutantam.com/">
                            <i className={cx('iconlogo-4kfarm')}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://vieclam.thegioididong.com/">
                            <i className={cx('iconlogo-vieclam')}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
