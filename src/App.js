import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Admin from "./Components/Admin/Admin";
import Contact from "./Components/Client/Contact";
import Footer from "./Components/Client/Footer";
import Header from "./Components/Client/Header";
import Home from "./Components/Client/Home";
import Menu from "./Components/Client/Menu";
import Service from "./Components/Client/Service";
import WeddingRoom from "./Components/Client/WeddingRoom";
import Login from "./Components/Login";
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
                </Switch>
                <Footer />
                </>
            )
        }

}
export default App;