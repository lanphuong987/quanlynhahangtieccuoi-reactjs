////import axios from 'axios';
////import { UseAlert } from 'react-alert'
//////Hàm login fb
////export default function facebookLogin(accessToken) {
////    const Alert = UseAlert()
////    axios.post(`http://127.0.0.1:8000/o/token`, {
////        token: accessToken,
////        backend: "facebook",
////        grant_type: "convert_token",
////        client_id: "v3JGsvi0RrLejSDJ9qq3tqs3XOKpLbS3zXts6HGW",
////        client_secret: "JV68g3Q0hMFgc6kPs0v6bLulvoVHKft7d9TB4kkt2jnCtGvTlbintOLhqLF2HsrwQFH1g1Tx3kr4yLMIrIPuqmFs9qJJurtE9Wi0926bKo8yYDs2olS6aboN4GAVUYnC",
////            }).then((res) => {
////                    console.log(res.data)
////            });
////    axiosInstan.interceptors.response.use(
////        (response) => {
////            return response;
////        },
////        async function (error) {
////            const originalRequest = error;
////            console.log(originalRequest);
////            if (typeof error.response === "undefined") {
////                alert("Server có lỗi, thử lại sau");
////                return Promise.reject(error);
////            }
////            if (
////                error.response.status === 401 &&
////                !localStorage.getItem("refresh_token")
////            ) {
////                window.location.href = "/login/";
////                return Promise.reject(error);
////            }
////            if (
////                error.response.status === 401 &&
////                error.response.statusText === "Unauthorized" &&
////                localStorage.getItem("refresh_token") !== undefined
////            ) {
////                const refreshToken = localStorage.getItem("refresh_token");
////                return axios
////                    .post("http://127.0.0.1:8000/o/token", {
////                        client_id: "v3JGsvi0RrLejSDJ9qq3tqs3XOKpLbS3zXts6HGW",
////                        client_secret:
////                            "JV68g3Q0hMFgc6kPs0v6bLulvoVHKft7d9TB4kkt2jnCtGvTlbintOLhqLF2HsrwQFH1g1Tx3kr4yLMIrIPuqmFs9qJJurtE9Wi0926bKo8yYDs2olS6aboN4GAVUYnC",
////                        grant_type: "refresh_token",
////                        refresh_token: refreshToken,
////                    })
////                    .then((response) => {
////                        localStorage.setItem("access_token", response.data.access_token);
////                        localStorage.setItem("refresh_token", response.data.refresh_token);
////                        window.location.reload();
////                        axiosInstance.defaults.headers["Authorization"] =
////                            "Bearer " + response.data.access_token;
////                    })
////                    .catch((err) => console.log(err));
////            }
////        }
////    );
////}