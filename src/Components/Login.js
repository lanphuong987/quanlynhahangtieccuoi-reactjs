import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from "react";
import { useHistory } from "react-router"
import API, { endpoints } from '../API';
import {Form } from "react-bootstrap";
export default function Login() {
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [confirmPassword, setConfirmPassword] = useState()
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState()
	const [email, setEmail] = useState()
	const [phone, setPhone] = useState()
	const avatar = useRef()
	const history = useHistory()
	const register = (event) => {
		event.preventDefault()
		let registerUser = async () => {
			const formData = new FormData()
			formData.append("first_name", firstName)
			formData.append("last_name", lastName)
			formData.append("email", email)
			formData.append("password", password)
			formData.append("username", username)
			formData.append("phone", phone)
			formData.append("avatar", avatar.current.files[0])

			try {
				let res = await API.post(endpoints['register'], formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})
				console.info(res.data)
				history.push("/dangnhap")
			} catch (err) {
				console.error(err)
			}

		}
		if (password !== null && password === confirmPassword) {
			registerUser()
		}
	}

	window.onload = function () {
		var signUpButton = document.getElementById('signUp');
		var signInButton = document.getElementById('signIn');
		var containerLogin = document.getElementById('containerLogin');
		if (signUpButton) {
			signUpButton.addEventListener('click', () => {
				containerLogin.classList.add("right-panel-active");
			});
		}
		if (signInButton) {
			signInButton.addEventListener('click', () => {
				containerLogin.classList.remove("right-panel-active");
			});
	}
}
		return (
			<>
				<div className="containerLogin" id="containerLogin">
					<div className="form-containerLogin sign-up-containerLogin">
						<form onSubmit={register}>
							<h1>Tạo tào khoản mới</h1>
							<div className="social-containerLogin">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" required placeholder="Họ" className="control" id="firstName" value={firstName}
								onChange={(event) => setFirstName(event.target.value)}/>
							<input type="text" required placeholder="Tên" className="control" id="lastName" value={lastName}
								onChange={(event) => setLastName(event.target.value)}/>
							<input type="email" required placeholder="Email" className="control" id="email" value={email}
								onChange={(event) => setEmail(event.target.value)}   />
							<input type="text" required placeholder="Số điện thoại" className="control" id="phone" value={phone}
								onChange={(event) => setPhone(event.target.value)}  />
							<input type="text" required placeholder="Tên đăng nhập" className="control" id="username" value={username}
								onChange={(event) => setUsername(event.target.value)}  />
							<input type="password" required placeholder="Mật khẩu" className="control" id="password" value={password}
								onChange={(event) => setPassword(event.target.value)} />
							<input type="password" required placeholder="Nhập lại mật khẩu" className="control" id="confirm" value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)} />
							<input type="file" label="Avatar" className="control" id="avatar" ref={avatar}/>
							{/*<Form.Group className="mb-3" controlId="avatar">*/}
							{/*	<Form.Label>Avatar</Form.Label>*/}
							{/*	<Form.Control type="file" ref={avatar} className="form-control" />*/}
							{/*</Form.Group>*/}
							<button type="submit" className="btn-primary">Sign Up</button>
						</form>
					</div>
					<div className="form-containerLogin sign-in-containerLogin">
						<form action="#">
							<h1>Đăng nhập</h1>
							<div className="social-containerLogin">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" placeholder="Tên tài khoản" className="control" required />
							<input type="password" placeholder="Mật khẩu" className="control" required />
							<a href="#">Quên mật khẩu?</a>
							<button className="btn-primary">Đăng nhập</button>
						</form>
					</div>
					<div className="overlay-containerLogin">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Chào mừng đến với nhà hàng Hạnh Phúc</h1>
								<p>Đã có tài khoản? Đăng nhập ngay</p>
								<button className="btn-primary" id="signIn">Đăng nhập</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Chào mừng trở lại với chúng tôi</h1>
								<p>Chưa có tài khoản? Đăng nhập ngay</p>
								<button className="btn-primary" id="signUp">Đăng kí</button>
							</div>
						</div>
					</div>
				</div>


			</>
		)
}
function RegisterForm(props) {
    return (
    <Form.Group className="mb-3" controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} 
                      value={props.value}
                      onChange={props.change} />
    </Form.Group>
  )
} 