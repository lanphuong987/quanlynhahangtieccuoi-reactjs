import React from 'react';
import weddingroom from './static/sanh-cuoi-1.jpg';
import menu from './static/menu-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
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
                    <div class="row bg-light" data-aos="fade-up-right" >
                        <div class="col-md-6">
                            <h3>Location</h3>
                            <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                            <h5>A Unique Experience</h5>
                            <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                        </div>
                        <div class="col-md-6" data-aos="fade-up-left">
                                <img class="img-fluid" src={ weddingroom } />
                        </div>
                    </div>
                    <div class="row bg-light">
                        <div class="col-md-6 order-md-1 order-2" data-aos="fade-up-right">
                                <img class="img-fluid " src={ menu } />
                        </div>
                            <div class="col-md-6 order-md-12 order-1" data-aos="fade-up-left">
                            <h3>Cuisine</h3>
                            <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                            <h5>A Unique Experience</h5>
                            <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                        </div>
                    </div>
                        <div class="row bg-light" data-aos="fade-up-right" >
                            <div class="col-md-6">
                                <h3>Location</h3>
                                <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                                <h5>A Unique Experience</h5>
                                <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
                            </div>
                            <div class="col-md-6" data-aos="fade-up-left">
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