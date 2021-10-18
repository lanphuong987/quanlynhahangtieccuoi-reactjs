import cookies from "react-cookies"
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import '../CSS/Header.css';
import { Link } from 'react-router-dom'
import PictureNav from './PictureNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin, logoutUser } from "../../../LoginUser";
import { useAlert } from 'react-alert'
export default function Header() {
    let location = useLocation();
    const user = useSelector(state => state.user.user)
    const admin = useSelector(state => state.admin.admin)
    const dispatch = useDispatch()
    const alert = useAlert()
    const logout = (event) => {
        event.preventDefault()
        if (user !== null && user !== undefined) {
            cookies.remove("access_token")
            cookies.remove("user")
            dispatch(logoutUser())
            alert.show('Đăng xuất thành công', { type: 'success' })
        }
        else {
            cookies.remove("access_token")
            cookies.remove("admin")
            dispatch(logoutAdmin())
            alert.show('Đăng xuất thành công', { type: 'success' })
        }
      
    }
    let path = <>
        <a> <Nav.Link as={Link} to="/dangnhap">Đăng nhập</Nav.Link></a>
    </>
    if ((user !== null && user !== undefined) || (admin !== null && admin !== undefined)) {
        path = <>
            <a class="item"> <NavDropdown title="Tài khoản">
                <NavDropdown.Item href="#action/3.1">Thông tin</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Giỏ hàng</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
            </NavDropdown></a>
        </>
    }
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
                                <a> <Nav.Link as={Link}  to="/menu">Menu</Nav.Link></a>
                                <a> <Nav.Link as={Link} to="/dichvu">Dịch vụ</Nav.Link></a>
                                <a> <Nav.Link as={Link} to="/sanhcuoi">Sảnh Cưới</Nav.Link></a>
                                <a><Nav.Link as={Link} to="/lienhe">Liên hệ</Nav.Link></a>
                                <a><Nav.Link as={Link} to="/dattiec">Đặt tiệc</Nav.Link></a>
                                {path}
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