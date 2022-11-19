import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('foot')}></div>
            <div className={cx('footer__logo')}></div>
        </footer>
    );
}

export default Footer;
