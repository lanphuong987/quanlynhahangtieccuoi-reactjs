import React from 'react';
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router"
import { Form } from 'reactstrap';
import API, { endpoints } from '../../../API';
export default function Contact() {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [phone, setPhone] = useState()
	const [content, setContent] = useState()
	const history = useHistory()
	const contact = (event) => {
		event.preventDefault()
		let contactPut = async () => {
			const formData = new FormData()
			formData.append("name", name)
			formData.append("email", email)
			formData.append("content", content)
			formData.append("phone", phone)

			try {
				let res = await API.post(endpoints['Contact'], formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})
				console.info(res.data)
				history.push("/trangchu")
			} catch (err) {
				console.error(err)
			}
			contactPut();
		}
	}
        return (
			<>
				<div className="contact">
				<div className="pagewrap">
						<div className="c_info" data-aos="fade-up">
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
						<div className="c_form" data-aos="fade-up">
							<div className="titBox"><h2 className="tit">Liên Hệ Với Chúng Tôi</h2></div>
							<Form className="formBox" onSubmit={contact}>
								<div className="row">
									<div className="col-xs-6">
										<div className="form-group">
											<label for="name">HỌ VÀ TÊN </label>
												<input type="text" className=" control" id="name" value={name}
													onChange={(event) => setName(event.target.value)} placeholder="Nhập họ và tên..." required />
										 </div>
									</div>
										<div className="col-xs-6">
											<div className="form-group">
												<label for="phone">SỐ ĐIỆN THOẠI</label>
												<input type="text" className=" control" id="phone" value={phone}
													onChange={(event) => setPhone(event.target.value)} placeholder="Nhập số điện thoại..." required/>
	            							</div>
										</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<div className="form-group">
											<label for="email">EMAIL</label>
												<input type="email" className=" control" id="email" value={email}
													onChange={(event) => setEmail(event.target.value)} placeholder="Nhập email..." required/>
										</div>
									</div>
									<div className="col-xs-6">
										<div className="form-group">
											<label for="capcha">MÃ CHỐNG SPAM</label>
											<input type="text" className=" control" id="capcha" placeholder="Mã chống spam:" required/>
											<span className="capcha">557506</span>
										</div>
									</div>
								</div>
								<div className="form-group">
									<label for="content">NỘI DUNG</label>
										<textarea className=" control" placeholder="Nhập nội dung..." id="content" required value={content}
											onChange={(event) => setContent(event.target.value)}></textarea>
								</div>
								<button className=" btn-main center" type="submit">Gửi đi</button>
						</Form>
					</div>
					</div>
					</div>
            </>

        )
}