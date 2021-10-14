import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router"
import API, { endpoints } from '../API';
import { useDispatch, useSelector } from "react-redux";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import cookies from 'react-cookies'
import { loginAdmin, loginUser } from '../LoginUser';
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
	const [data, setData] = useState({});
	const responseFacebook = (response) => {
		console.log(response);
		setData(response);
		if (response.status !== 'unknown') {
			cookies.save("user", response.data)
			dispatch(loginUser(response.data))
			history.push("/")
		} else {
			console.log("error")
		}
	}

	const responseGoogle = (response) => {
		console.log(response);
	}
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
	const [loginUsername, setLoginUsername] = useState()
	const [loginPassword, setLoginPassword] = useState()
	const dispatch = useDispatch()
	const login = async (event) => {
		event.preventDefault()
		try {
			let info = await API.get(endpoints['oauth2-info'])
			let res = await API.post(endpoints['login'], {
				"client_id": info.data.client_id,
				"client_secret": info.data.client_serect,
				"username": loginUsername,
				"password": loginPassword,
				"grant_type": "password"
			})

			cookies.save("access_token", res.data.access_token)
			let user = await API.get(endpoints['current-user'], {
				headers: {
					'Authorization': `Bearer ${cookies.load("access_token")}`
				}
			})

			console.info(user.data.is_superuser)
			if (user.data.is_superuser) {
				cookies.save("admin", user.data)
				dispatch(loginAdmin(user.data))
				history.push("/admin")
			}
			else {
				cookies.save("user", user.data)
				dispatch(loginUser(user.data))
				history.push("/")
			}
			console.info(cookies)
		} catch (err) {
			console.log("hi")
		}
	}
	useEffect(() => {
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
	}) 
	const user = useSelector(state => state.user.user)
	const admin = useSelector(state => state.admin.admin)
	if ((user !== null && user !== undefined) || (admin !== null && admin !== undefined)) {
		history.push("/")
		return null;
	}
	else {
		return (
			<>
				<div className="containerLogin" id="containerLogin" data-aos="fade-up">
					<div className="form-containerLogin sign-up-containerLogin">
						<form onSubmit={register}>
							<h1>Tạo tào khoản mới</h1>
							<div className="social-containerLogin">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" required placeholder="Họ" className="control" id="firstName" value={firstName}
								onChange={(event) => setFirstName(event.target.value)} />
							<input type="text" required placeholder="Tên" className="control" id="lastName" value={lastName}
								onChange={(event) => setLastName(event.target.value)} />
							<input type="email" required placeholder="Email" className="control" id="email" value={email}
								onChange={(event) => setEmail(event.target.value)} />
							<input type="text" required placeholder="Số điện thoại" className="control" id="phone" value={phone}
								onChange={(event) => setPhone(event.target.value)} />
							<input type="text" required placeholder="Tên đăng nhập" className="control" id="username" value={username}
								onChange={(event) => setUsername(event.target.value)} />
							<input type="password" required placeholder="Mật khẩu" className="control" id="password" value={password}
								onChange={(event) => setPassword(event.target.value)} />
							<input type="password" required placeholder="Nhập lại mật khẩu" className="control" id="confirm" value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)} />
							<input type="file" label="Avatar" className="control" id="avatar" ref={avatar} />
							<button type="submit" className="btn-primary">Sign Up</button>
						</form>
					</div>
					<div className="form-containerLogin sign-in-containerLogin">
						<form onSubmit={login}>
							<h1>Đăng nhập</h1>
							<div className="social-containerLogin">
								<FacebookLogin
									appId="909990619938404"
									fields="name,email,picture"
									callback={responseFacebook}
								/>
								<GoogleLogin
									clientId="" //CLIENTID NOT CREATED YET
									buttonText="LOGIN WITH GOOGLE"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
								/>
								<a className="social"><i className="fab fa-facebook-f"></i></a>
								<a className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" placeholder="Tên tài khoản" className="control" id="loginUsername" value={loginUsername}
								onChange={(event) => setLoginUsername(event.target.value)} required />
							<input type="password" placeholder="Mật khẩu" className="control" id="loginPassword" required value={loginPassword}
								onChange={(event) => setLoginPassword(event.target.value)} />
							<a href="#">Quên mật khẩu?</a>
							<button className="btn-primary" type="submit">Đăng nhập</button>
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
}