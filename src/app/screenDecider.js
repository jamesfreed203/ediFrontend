"use client";

import { usePathname } from 'next/navigation';
import Header from './components/common/Header';
import MobileMenu from './components/common/MobileMenu';
import Footer from './components/common/Footer';

const ScreenDecider = ({ children }) => {
    const pathname = usePathname();
    const noHeaderRoutes = ['/login', '/as2', '/sftp', '/certificates', '/integrations', '/user', '/audits'];
    const noHeaderFooter = noHeaderRoutes.some((route) => pathname.startsWith(route));


    return ( 
        <>
            {!noHeaderFooter && <Header />}
            {!noHeaderFooter && <MobileMenu />}
            {children}
            {!noHeaderFooter && <Footer />}
        </>
    );
}

export default ScreenDecider;