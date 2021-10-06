import { useState } from 'react';
import API, { endpoints } from '../../../API';
import ClientCard from '../Component/Card';
import { Link, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from "react-router"
import { Button, ButtonGroup, Row } from "react-bootstrap"
export default function Menu(props) {
    const [menuCate, setMenuCate] = useState([])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
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

    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {menuCate.map(Menu => Menu.isActive = true && <Link to={`/category/${Menu.id}/menu/`}>{Menu.name}</Link>)}
            </div>
                {menu.map(Menu => <ClientCard menu={Menu} />)}
                <ButtonGroup id="button-group">
                    <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                    <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
                </ButtonGroup>
            </div>
    )
}