import React from 'react';
import weddingroom from '../../static/sanh-cuoi-1.jpg';
import menu from '../../static/menu-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import '../CSS/Body.css'
class Home extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1300
        });
     };
    render() {
        return (
          
            <>
                <div class="welcome">
                <div class="containerHome">
                    <div class="row" data-aos="fade-up" >
                            <div class="col-md-6">
                                <div class="titBox"><Link to="/sanhcuoi" class = "tit"><h2>SẢNH <b>TIỆC CƯỚI</b></h2></Link></div>
                                <p class="padding">Nhà hàng Hạnh Phúc với không gian hơn 12,000 m2 và nhiều sảnh tiệc cưới, kèm theo phong cách thiết kế cao cấp, sang trọng sẽ là một trong những địa điểm mà bạn nên cân nhắc khi lựa chọn nhà hàng tiệc cưới tại Hồ Chí Minh</p>
                                <Link to="/sanhcuoi" class="btn-main center padding">Chi Tiết</Link>
                            </div>
                        <div class="col-md-6" data-aos="fade-up">
                                <img class="img-fluid" src={ weddingroom } />
                        </div>
                    </div>
                    <div class="row padding">
                        <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
                                <img class="img-fluid " src={ menu } />
                        </div>
                            <div class="col-md-6 order-md-12 order-1" data-aos="fade-up">
                                <div class="titBox"><Link to="/menu" class="tit"><h2>MENU <b>TIỆC CƯỚI</b></h2></Link></div>
                                <p class="padding">Một buổi tiệc chiêu đãi hoàn hảo trong ngày cưới sẽ thể hiện lòng mến khách của gia đình cũng như tương lai thịnh vượng cho đôi bạn trẻ. Thấu hiểu điều này, nhà hàng Hạnh Phúc luôn chuẩn bị sẵn sàng đơn tiệc cưới phong phú, hấp dẫn, đầy đủ các món ăn từ truyền thống tới hiện đại, với chất lượng cam kết và đảm bảo</p>
                                <Link to="/menu" class="btn-main center padding">Chi Tiết</Link>
                            </div>
                    </div>
                        <div class="row padding" data-aos="fade-up" >
                            <div class="col-md-6">
                                <div class="titBox"><Link to="/sanhcuoi" class="tit"><h2>DỊCH VỤ <b>TIỆC CƯỚI</b></h2></Link></div>
                                <p class="padding">Nhà hàng tiệc cưới Hạnh Phúc luôn đáp ứng đầy đủ các tiêu chí trên, ngoài ra còn có dịch vụ xe Limousine đưa đón cô dâu chú rể, một dịch vụ chỉ xuất hiện ở những nhà hàng đẳng cấp cao. Hãy cùng đến Hạnh Phúc và tận hưởng nhé</p>
                                <Link to="/sanhcuoi" class="btn-main center padding">Chi Tiết</Link>
                            </div>
                            <div class="col-md-6" data-aos="fade-up">
                                <img class="img-fluid" src={weddingroom} />
                            </div>
                        </div>

                    </div>

                </div>
            </>

        )
    }
}
export default Home;