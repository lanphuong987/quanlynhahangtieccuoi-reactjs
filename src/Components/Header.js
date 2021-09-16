import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Header.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Contact from './Contact';
import PictureNav from './PictureNav';
import Login from './Login';
import Home from './Home';
class Header extends React.Component {
    render() {
        return (
            <BrowserRouter >
            <Navbar expand="lg" className="navMenu" fixed="top" >
                <Container>
                   <a><Navbar.Brand>Nhà Hàng Hạnh Phúc</Navbar.Brand></a>
                        <nav><Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                    <a> <Nav.Link href="#menu">Menu</Nav.Link></a>
                                    <a> <Nav.Link href="#room">Dịch vụ</Nav.Link></a>
                                    <a> <Nav.Link href="#service">Sảnh Cưới</Nav.Link></a>
                                    <a><Nav.Link as={Link} to="/lienhe">Liên hệ</Nav.Link></a>
                                    <Nav.Link href="#home"><a>Đặt tiệc</a></Nav.Link>
                                     <a> <Nav.Link as={Link} to="/dangnhap">Đăng nhập</Nav.Link></a>
                                <div class="dot"></div>
                        </Nav>
                    </Navbar.Collapse></nav>
                </Container>
                </Navbar>
                <PictureNav />
                <>
                    <Switch>
                        <Route exact path="/lienhe" component={Contact} />
                        <Route exact path="/dangnhap" component={Login} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}
export default Header;