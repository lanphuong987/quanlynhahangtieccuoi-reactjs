import React from 'react';
import home1 from '../static/HPicture1.jpg';
import home2 from '../static/HPicture2.jpg';
import home3 from '../static/HPicture3.jpg';
import home4 from '../static/HPicture4.jpg';
import AOS from 'aos';
class PictureNav extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 1500
        });
    };
    render() {
        return (
            <div id="Welcome">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                            <img className="d-block w-100 img-fluid img-slider" src={ home1 } alt="First slide" />
                        <div className="carousel-caption">
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img className="d-block w-100 img-fluid img-slider" src={home2} alt="Second slide" />
                        <div className="carousel-caption">
                        </div>
                    </div>
                    <div className="carousel-item">
                            <img className="d-block w-100 img-fluid img-slider" src={ home3 } alt="Third slide" />
                        <div className="carousel-caption">
                        </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100 img-fluid img-slider" src={home4} alt="Third slide" />
                            <div className="carousel-caption">
                            </div>
                        </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
               </div>
            
        )
    }
}
export default PictureNav;