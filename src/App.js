import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import MenuAsCate from "./Components/Client/Component/CardMenuAsCate";
import Footer from "./Components/Client/Component/Footer";
import Header from "./Components/Client/Component/Header";
import Service from "./Components/Client/View/Service";
import Contact from "./Components/Client/View/Contact";
import Home from "./Components/Client/View/Home";
import Menu from "./Components/Client/View/Menu";
import WeddingRoom from "./Components/Client/View/WeddingRoom";
import Login from "./Components/Login";
import NotFound from "./Components/404";
import WeddingRoomAsCate from "./Components/Client/Component/WeddingRoomAsCate";
import MenuDetails from "./Components/Client/Component/MenuDetails";
import ServiceAsCate from "./Components/Client/Component/ServiceAsCate";
import ServiceDetails from "./Components/Client/Component/ServiceDetails";
import WeddingRoomDetails from "./Components/Client/Component/WeddingRoomDetails";
import UserProfile from "./Components/Client/View/Profile";
class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/lienhe" component={Contact} />
                    <Route exact path="/dangnhap" component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/sanhcuoi" component={WeddingRoom} />
                    <Route exact path="/dichvu" component={Service} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/category/:cate/menu/" component={MenuAsCate} />
                    <Route exact path="/category/:cate/dichvu/" component={ServiceAsCate} />
                    <Route exact path="/category/:cate/sanhcuoi/" component={WeddingRoomAsCate} />
                    <Route exact path="/category/menu/:id" component={MenuDetails} />
                    <Route exact path="/category/service/:id" component={ServiceDetails} />
                    <Route exact path="/category/room/:id" component={WeddingRoomDetails} />
                    <Route exact path="/profile" component={UserProfile} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
                
                </>
            )
        }

}
export default App;