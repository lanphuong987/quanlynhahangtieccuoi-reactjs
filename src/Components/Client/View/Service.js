import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { Link} from 'react-router-dom'
import { useEffect } from 'react';
export default function Service(props) {
    const [serviceCate, setServiceCate] = useState([])
    useEffect(() => {
        const loadServiceCate = async () => {
            try {
                let res = await API.get(endpoints['ServiceCategory'])
                setServiceCate(res.data.results)
            } catch (err) {
                console.error(err);
            }
        }
        loadServiceCate()
    }, [])
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {serviceCate.map(cate => cate.isActive = true && <Link to={`/category/${cate.id}/dichvu/`} class="btn-cate from-center">{cate.name}</Link>)}
            </div>
        </div>
    )
}