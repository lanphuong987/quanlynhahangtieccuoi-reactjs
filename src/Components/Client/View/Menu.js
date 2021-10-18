import { useState } from 'react';
import API, { endpoints } from '../../../API';
import ClientCard from '../Component/Card';
import { Link, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useHistory, useLocation } from "react-router"
import { Button, ButtonGroup} from "react-bootstrap"
import { Form } from 'reactstrap';
import { useAlert } from 'react-alert'
export default function Menu(props) {
    const [menuCate, setMenuCate] = useState([])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [q, setQ] = useState([])
    const history = useHistory()
    const alert = useAlert()
    useEffect(() => {
        const loadMenuCate = async () => {
            try {
                let res = await API.get(endpoints['FoodCategory'])
                setMenuCate(res.data.results)
            } catch (err) {
                console.error(err);
            }
        }
        loadMenuCate()
    }, [])
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const loadMenu = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['Menu']}${query}`)
                setMenu(res.data.results)

                setNext(res.data.next !== null)
                setPrev(res.data.previous !== null)
            } catch (err) {
                console.error(err);
            }
        }
        loadMenu()
    }, [location.search, page])
    const paging = (inc) => {
        setPage(page + inc)
    }
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const search = async (event) => {
        event.preventDefault()
        history.push(`/menu?q=${q}`)
        if (menu.length === 0) {
            alert.show('Hiện tại không có món bạn tìm kiếm', { type: 'error' })
        }
        else {
            alert.show('Tìm kiếm thành công', { type: 'success' })
        }
    }


    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {menuCate.map(Menu => Menu.isActive = true && <Link to={`/category/${Menu.id}/menu/`}>{Menu.name}</Link>)}
            </div>
            <Form className="d-flex" onSubmit={search}>
                <input className="control search"
                    type="search"
                    placeholder="Nhập từ tìm kiếm..."
                    aria-label="Search"
                    value={q}
                    onChange={(event) => setQ(event.target.value)}
                />
                <Button type="submit" class="btn btn-primary">Tìm kiếm</Button>
            </Form>
                {menu.map(Menu => <ClientCard menu={Menu} />)}
                <ButtonGroup id="button-group">
                    <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                    <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
                </ButtonGroup>
            </div>
    )
}