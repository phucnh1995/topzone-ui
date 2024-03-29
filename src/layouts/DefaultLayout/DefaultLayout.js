import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <section className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </section>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
