import { Link } from 'react-router-dom'
export default function ServiceCard(props) {
    return (
        <div class="welcome">
            <div class="containerHome">
                <div class="row" data-aos="fade-up" >
                    <div class="col-md-6">
                        <div class="titBox"><Link to={`/category/service/${props.object.id}`} class="tit"><h2><b>{ props.object.name }</b></h2></Link></div>
                        <p class="padding line">{props.object.description}</p>
                        <Link to={`/category/service/${props.object.id}`} class="btn-main center padding">Chi Tiết</Link>
                    </div>
                    <div class="col-md-6" data-aos="fade-up">
                        <img class="img-fluid img-object" src={props.object.hinh} />
                    </div>
                </div>
            </div>
        </div>
    )
}
