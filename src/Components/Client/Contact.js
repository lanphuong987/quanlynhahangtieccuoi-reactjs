import React from 'react';
import style from '../CSS/Body.css';
class Contact extends React.Component {
    render() {
        return (
			<>
				<div className="contact">
				<div className="pagewrap">
					<div className="c_info">
						<div className="landing">
							<h5 className="sub-color">
								TRUNG TÂM HỘI NGHỊ TIỆC CƯỚI HẠNH PHÚC</h5>
							<table width="100%">
								<tbody>
									<tr>
										<td width="120px">Địa Chỉ</td>
											<td>: 720A Điện Biên Phủ, Phường 22</td>
									</tr>
									<tr>
										<td>Điện thoại</td>
										<td>: 0929423644</td>
									</tr>
									<tr>
										<td>Fax</td>
										<td>: (848) 8888 9999</td>
									</tr>
									<tr>
										<td>Email</td>
										<td>: <a href="mailto:thannham2212@gmail.com">thannham2212@gmail.com</a></td>
									</tr>
									<tr>
										<td>Facebook</td>
										<td>: <a href="https://facebook.com">Nhà Hàng Hạnh Phúc</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="c_form">
						<div className="titBox"><h2 className="tit">Liên Hệ Với Chúng Tôi</h2></div>
						<form className="formBox" method="post" name="FormNameContact" id="FormNameContact" accept-charset="utf-8"/>
							<div className="row">
								<div className="col-xs-6">
									<div className="form-group">
										<label for="hoten">HỌ VÀ TÊN </label>
										<input type="text" className=" control" id="hoten" placeholder="Nhập họ và tên..." name="s_fullname" required="" />
									 </div>
								</div>
									<div className="col-xs-6">
										<div className="form-group">
											<label for="sodienthoai">SỐ ĐIỆN THOẠI</label>
											<input type="text" className=" control" id="sodienthoai" placeholder="Nhập số điện thoại..." name="s_dienthoai" required=""/>
	            						</div>
									</div>
							</div>
							<div className="row">
								<div className="col-xs-6">
									<div className="form-group">
										<label for="email">EMAIL</label>
										<input type="email" className=" control" id="email" placeholder="Nhập email..." name="s_email" required=""/>
									</div>
								</div>
								<div className="col-xs-6">
									<div className="form-group">
										<label for="capcha">MÃ CHỐNG SPAM</label>
										<input type="text" className=" control" id="capcha" name="s_mabaove" placeholder="Mã chống spam:" required=""/>
										<span className="capcha">557506</span>
									</div>
								</div>
							</div>
							<div className="form-group">
								<label for="message">Nội dung</label>
								<textarea name="s_message" className=" control" placeholder="Nhập nội dung..." id="message" required=""></textarea>
							</div>
							<button type="submit" className=" btn-main center">Gửi đi</button>
								<input name="sm_link" type="hidden" value="riversidepalace.vn/lien-he.html"/>
								<input name="s_mabaovehidden" type="hidden" id="s_mabaovehidden" value="557506"/>
					</div>
					<div className="clr"></div>
					</div>
					</div>
            </>

        )
    }
}
export default Contact;