import React from 'react'
import '../CSS/Footer.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../static/logo.png';
import { useLocation } from 'react-router-dom'
export default function Footer() {
    let location = useLocation();
    console.log(location.pathname);
    if (location.pathname.match(/admin/))
    return null;
        else {
    return (
        <>
            <div className="container-fluid pb-0 mb-0 justify-content-center text-light footer">
                <footer>
                    <div className="row my-5 justify-content-center py-5">
                        <div className="col-11">
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <img className="logo1 mb-md-0 mb-5" src={logo} alt="Logo" />
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                    <ul className="list-unstyled">
                                        <li>Home</li>
                                        <li>Menu</li>
                                        <li>Sảnh cưới</li>
                                        <li>Dịch vụ</li>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ĐỊA CHỈ</b></h6>
                                    <p className="mb-1">Tầng 81 Landmark</p>
                                    <p className="mb-2">720A Điện Biên Phủ, Phường 22</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                    <p className="social text-muted mb-0 pb-0 bold-text"> <a href="https://www.facebook.com/than.nham.3090"><span className="mx-2"><i className="fab fa-facebook-f" aria-hidden="true"></i></span></a><a href="https://www.instagram.com/"> <span className="mx-2"><i className="fab fa-instagram" aria-hidden="true"></i></span></a><a href="https://twitter.com/?lang=vi"> <span className="mx-2"><i className="fab fa-twitter" aria-hidden="true"></i></span></a> <a href="https://www.youtube.com/?hl=vi"><span className="mx-2"><i className="fab fa-youtube" aria-hidden="true"></i></span></a> </p>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end">
                                    <h6 className="mt-55 mt-2 text-muted bold-text"><b>Tuyển dụng</b></h6><small> <span><i className="fa fa-envelope mb-2" aria-hidden="true"></i></span> hptuyendung@gmail.com</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3">
                                    <h6 className="text-muted bold-text"><b>Liên hệ</b></h6><small><span><i className="fa fa-envelope mb-2" aria-hidden="true"></i></span> nhhanhphuc@gmail.com</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

}