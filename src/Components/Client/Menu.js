import React from 'react';
import API, {endpoints} from '../../API';
import axios from 'axios';
class Menu extends React.Component {
    constructor() {
        super()
        this.state = {
            "Menu":[]
        }
    }

    componentDidMount() {
        //axios.get(`http://127.0.0.1:8000/`)
        //    .then(res => {
        //        const Menu = res.data;
        //        this.setState({ Menu });
        //        console.info(res.data)
        //    })
            //.catch(error => console.log(error));
        API.get(endpoints['Menu']).then(res => {
            this.setState({
                "Menu": res.data.results
            })
        })
    }
    render() {
        return (
            <>
                {this.state.Menu.map(Menu => <li>{Menu.name}</li>)}
            </>
            )
    }
}
export default Menu;