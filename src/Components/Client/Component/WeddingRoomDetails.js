import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import API, { endpoints } from "../../../API"
export default function WeddingRoomDetails() {
    const { id } = useParams()
    const [room, setRoom] = useState([])
    useEffect(() => {
        const loadRoom = async () => {
            try {
                let res = await API.get(endpoints['RoomAsId'](id))
                setRoom(res.data)
            } catch (err) {
                console.error(err);
            }
        }
        loadRoom()
    }, [])
    return (
        <div class="container padding">
            <div class="card-details" data-aos="fade-up">
                <div class="container-fliud padding">
                    <div class="room-cantainer">
                        <div class="titMain center main-color">
                            <div class="titBox"><a class="tit"><h2>Sảnh cưới <b>{ room.name }</b></h2></a></div>
                        </div>
                        <div class="col-lg-10 col-md-12 offset-lg-1 offset-md-0">
                            <div class="landing description">
                                <p>{room.description}</p>
                            </div>
                                <div class="tab-pane active padding" id="pic-1"><img src={room.hinh_chinh_dien} /></div>

                        </div>
                    </div>
                 </div>
            </div>
        </div>
        )
}