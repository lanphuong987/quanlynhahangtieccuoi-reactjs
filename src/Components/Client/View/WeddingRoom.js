import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { Link} from 'react-router-dom'
import { useEffect } from 'react';
import WeddingRoomCard from '../Component/WeddingRoomCard';
import { useHistory, useLocation } from "react-router"
import { Button, ButtonGroup, Row } from "react-bootstrap"
import { Form } from 'reactstrap';
export default function WeddingRoom(props) {
    const [roomCate, setRoomCate] = useState([])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [q, setQ] = useState([])
    const history = useHistory()
    useEffect(() => {
        const loadRoomCate = async () => {
            try {
                let res = await API.get(endpoints['WeddingRoomType'])
                setRoomCate(res.data.results)
            } catch (err) {
                console.error(err);
            }
        }
        loadRoomCate()
    }, [])
    const [room, setRoom] = useState([])
    useEffect(() => {
        const loadRoom = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['WeddingRoom']}${query}`)
                setRoom(res.data.results)

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
        history.push(`/sanhcuoi?q=${q}`)
    }
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {roomCate.map(cate => cate.isActive = true && <Link to={`/category/${cate.id}/sanhcuoi/`}>{cate.name}</Link>)}
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
            {room.map(room => room.isActive = true && <WeddingRoomCard room={ room }/>)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}