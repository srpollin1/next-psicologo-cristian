import { Outlet } from "react-router-dom";
import Footer from './assets/Footer'
import Navbar from './assets/Navbar'

function Layout() {
    return (
        <>
            <div>
                <div className="all-content">
                    <div className="back-to-top" />
                    <Navbar />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;