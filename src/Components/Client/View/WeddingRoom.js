import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { Link} from 'react-router-dom'
import { useEffect } from 'react';
import WeddingRoomCard from '../Component/WeddingRoomCard';
import { useLocation } from "react-router"
import { Button, ButtonGroup, Row } from "react-bootstrap"
export default function WeddingRoom(props) {
    const [roomCate, setRoomCate] = useState([])
    const [menuCate, setMenuCate] = useState([])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
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
                let res = await API.get(endpoints['WeddingRoom'])
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
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {roomCate.map(cate => cate.isActive = true && <Link to={`/category/${cate.id}/sanhcuoi/`}>{cate.name}</Link>)}
            </div>
            {room.map(room => room.isActive = true && <WeddingRoomCard room={ room }/>)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}