import { Link } from 'react-router-dom'
export default function WeddingRoomCard(props) {
    return (
        <div class="welcome">
            <div class="containerHome">
                <div class="row padding">
                    <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
                        <img class="img-fluid " src={props.room.hinh_chinh_dien} />
                    </div>
                    <div class="col-md-6 order-md-12 order-1" data-aos="fade-up">
                        <div class="titBox"><Link to={`/category/room/${props.room.id}`} class="tit"><h2>Sảnh <b>{props.room.name}</b></h2></Link></div>
                        <p class="padding">{props.room.description}</p>
                        <Link to={`/category/room/${props.room.id}`} class="btn-main center padding">Chi Tiết</Link>
                    </div>
                </div>
             </div>
        </div>
        )
}
