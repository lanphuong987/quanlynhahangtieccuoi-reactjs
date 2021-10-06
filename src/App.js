import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import MenuAsCate from "./Components/Client/Component/CardMenuAsCate";
import Footer from "./Components/Client/Component/Footer";
import Header from "./Components/Client/Component/Header";
import PictureNav from "./Components/Client/Component/PictureNav";
import Service from "./Components/Client/View/Service";
import Contact from "./Components/Client/View/Contact";
import Home from "./Components/Client/View/Home";
import Menu from "./Components/Client/View/Menu";
import WeddingRoom from "./Components/Client/View/WeddingRoom";
import Login from "./Components/Login";
import NotFound from "./Components/404";
import WeddingRoomAsCate from "./Components/Client/Component/WeddingRoomAsCate";
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
                    <Route exact path="/category/:cate/dichvu/" component={Menu} />
                    <Route exact path="/category/:cate/sanhcuoi/" component={WeddingRoomAsCate} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer />
                
                </>
            )
        }

}
export default App;