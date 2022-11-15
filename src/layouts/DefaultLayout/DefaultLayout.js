import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className="container">
            <Header />
            <section>{children}</section>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
