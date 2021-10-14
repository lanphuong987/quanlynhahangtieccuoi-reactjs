import { useState } from 'react';
import API, { endpoints } from '../../../API';
import ClientCard from './Card';
import { useParams } from "react-router"
import { useEffect } from 'react';
import { useHistory, useLocation } from "react-router"
import { Button, ButtonGroup } from "react-bootstrap"
import { Form } from 'reactstrap';
export default function MenuAsCate(props) {
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [menu, setMenu] = useState([])
    const { cate } = useParams()
    let cateName = '';
    const [q, setQ] = useState([])
    const history = useHistory()
    useEffect(() => {
        const loadMenu = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['MenuAsCate'](cate)}${query}`)
                setMenu(res.data)

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
    if (cate == 1)
        cateName = 'món chính'
    else {
        if (cate == 2)
            cateName = 'khai vị'
        else
            cateName = 'tráng miệng'    
    }
    const search = (event) => {
        event.preventDefault()
        history.push(`/category/${cate}/menu?q=${q}`)
    }

    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                <a>Các món ăn thuộc mục { cateName }</a>
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
            {menu.map(Menu => Menu.isActive = true && <ClientCard menu={Menu} />)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}