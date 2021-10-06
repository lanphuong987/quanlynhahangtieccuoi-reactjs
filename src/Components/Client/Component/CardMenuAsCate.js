import { useState } from 'react';
import API, { endpoints } from '../../../API';
import ClientCard from './Card';
import { useParams } from "react-router"
import { useEffect } from 'react';
import { Button, ButtonGroup } from "react-bootstrap"
import { useLocation } from "react-router"
export default function MenuAsCate(props) {
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [menu, setMenu] = useState([])
    const { cate } = useParams()
    let cateName = '';
    useEffect(() => {
        const loadMenu = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(endpoints['MenuAsCate'](cate))
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
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                <a>Các món ăn thuộc mục { cateName }</a>
            </div>
            {menu.map(Menu => Menu.isActive = true && <ClientCard menu={Menu} />)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}