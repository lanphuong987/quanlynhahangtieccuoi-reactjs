import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
	componentDidMount() {
		var signUpButton = document.getElementById('signUp');
		var signInButton = document.getElementById('signIn');
		var containerLogin = document.getElementById('containerLogin');
		signUpButton.addEventListener('click', () => {
			containerLogin.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			containerLogin.classList.remove("right-panel-active");
		});
	}
	render() {
		return (
			<>
				<div className="containerLogin" id="containerLogin">
					<div className="form-containerLogin sign-up-containerLogin">
						<form action="#">
							<h1>Tạo tào khoản mới</h1>
							<div className="social-containerLogin">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" placeholder="Họ" className="form-control" />
							<input type="text" placeholder="Tên" className="form-control" />
							<input type="email" placeholder="Email" className="form-control" />
							<input type="text" placeholder="Số điện thoại" className="form-control" />
							<input type="password" placeholder="Mật khẩu" className="form-control" />
							<input type="password" placeholder="Nhập lại mật khẩu" className="form-control" />
							<button>Sign Up</button>
						</form>
					</div>
					<div className="form-containerLogin sign-in-containerLogin">
						<form action="#">
							<h1>Đăng nhập</h1>
							<div className="social-containerLogin">
								<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
								<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							</div>
							<input type="text" placeholder="Tên tài khoản" className="form-control" required />
							<input type="password" placeholder="Mật khẩu" className="form-control" required />
							<a href="#">Quên mật khẩu?</a>
							<button>Đăng nhập</button>
						</form>
					</div>
					<div className="overlay-containerLogin">
						<div className="overlay">
							<div className="overlay-panel overlay-left">
								<h1>Chào mừng đến với nhà hàng Hạnh Phúc</h1>
								<p>Đã có tài khoản? Đăng nhập ngay</p>
								<button className="ghost" id="signIn">Đăng nhập</button>
							</div>
							<div className="overlay-panel overlay-right">
								<h1>Chào mừng trở lại với chúng tôi</h1>
								<p>Chưa có tài khoản? Đăng nhập ngay</p>
								<button className="ghost" id="signUp">Đăng kí</button>
							</div>
						</div>
					</div>
				</div>


			</>
		)
	}
}
export default Login;