import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../CSS/Header.css';
import { Link } from 'react-router-dom'
import PictureNav from './PictureNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'
export default function Header() {
    let location = useLocation();
    console.log(location.pathname);
    if (location.pathname.match(/admin/))
        return null;
    else {
        return (

            < >
                <Navbar expand="lg" className="navMenu" >
                    <Container>
                        <a><Navbar.Brand>Nhà Hàng Hạnh Phúc</Navbar.Brand></a>
                        <nav><Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <a> <Nav.Link as={Link} to="/menu">Menu</Nav.Link></a>
                                <a> <Nav.Link as={Link} to="/dichvu">Dịch vụ</Nav.Link></a>
                                <a> <Nav.Link as={Link} to="/sanhcuoi">Sảnh Cưới</Nav.Link></a>
                                <a><Nav.Link as={Link} to="/lienhe">Liên hệ</Nav.Link></a>
                                <a><Nav.Link as={Link} to="/dattiec">Đặt tiệc</Nav.Link></a>
                                <a> <Nav.Link as={Link} to="/dangnhap">Đăng nhập</Nav.Link></a>
                                <div class="dot"></div>
                            </Nav>
                        </Navbar.Collapse></nav>
                    </Container>
                </Navbar>
                <PictureNav />
            </>
        )
    }
}