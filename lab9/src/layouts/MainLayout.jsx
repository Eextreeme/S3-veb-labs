import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container mx-auto py-4">
                <div className="mt-12">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;
