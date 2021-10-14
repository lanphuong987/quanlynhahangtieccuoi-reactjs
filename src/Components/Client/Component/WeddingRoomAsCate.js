import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { useParams } from "react-router"
import { useEffect } from 'react';
import { useHistory, useLocation } from "react-router"
import { Button, ButtonGroup } from "react-bootstrap"
import { Form } from 'reactstrap';
import WeddingRoomCard from './WeddingRoomCard';
export default function WeddingRoomAsCate(props) {
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [room, setRoom] = useState([])
    const { cate } = useParams()
    const [q, setQ] = useState([])
    const history = useHistory()
    let cateName = '';
    useEffect(() => {
        const loadRoom = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['RoomAsCate'](cate)}${query}`)
                setRoom(res.data)
                setNext(res.data.next !== null)
                setPrev(res.data.previous !== null)
            } catch (err) {
                console.error(err);
            }
        }
        loadRoom()
    }, [location.search, page])
    const paging = (inc) => {
        setPage(page + inc)
    }
    const search = (event) => {
        event.preventDefault()
        history.push(`/category/${cate}/sanhcuoi?q=${q}`)
    }
    if (cate == 1)
        cateName = 'cổ điển'
    else
        cateName = 'hiện đại'
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                <a>Các sảnh cưới thuộc mục {cateName}</a>
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
            {room.map(room => room.isActive = true && <WeddingRoomCard room={room} />)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}