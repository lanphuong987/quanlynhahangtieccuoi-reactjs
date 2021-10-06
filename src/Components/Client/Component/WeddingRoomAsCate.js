import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { useParams } from "react-router"
import { useEffect } from 'react';
import WeddingRoomCard from './WeddingRoomCard';
export default function WeddingRoomAsCate(props) {
    const [room, setRoom] = useState([])
    const { cate } = useParams()
    let cateName = '';
    useEffect(() => {
        const loadRoom = async () => {
            try {
                let res = await API.get(endpoints['RoomAsCate'](cate))
                setRoom(res.data)
            } catch (err) {
                console.error(err);
            }
        }
        loadRoom()
    }, [])
    if (cate == 1)
        cateName = 'cổ điển'
    else
        cateName = 'hiện đại'
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                <a>Các sảnh cưới thuộc mục {cateName}</a>
            </div>
            {room.map(room => room.isActive = true && <WeddingRoomCard room={ room } />)}
        </div>
    )
}