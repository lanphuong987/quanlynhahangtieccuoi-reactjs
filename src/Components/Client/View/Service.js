import { Link} from 'react-router-dom'
import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { useEffect } from 'react';
import { Button, ButtonGroup } from "react-bootstrap"
import { useHistory, useLocation } from "react-router"
import ServiceCard from '../Component/ServiceCard';
import { Form } from 'reactstrap';
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
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [service, setService] = useState([])
    const [q, setQ] = useState([])
    const history = useHistory()
    useEffect(() => {
        const loadService = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['Service']}${query}`)
                setService(res.data.results)

                setNext(res.data.next !== null)
                setPrev(res.data.previous !== null)
            } catch (err) {
                console.error(err);
            }
        }
        loadService()
    }, [location.search, page])
    const paging = (inc) => {
        setPage(page + inc)
    }
    const search = (event) => {
        event.preventDefault()
        history.push(`/dichvu?q=${q}`)
    }
    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                {serviceCate.map(cate => cate.isActive = true && <Link to={`/category/${cate.id}/dichvu/`} class="btn-cate from-center">{cate.name}</Link>)}
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
            {service.map(Service => Service.isActive = true && <ServiceCard object={Service} />)}
            <ButtonGroup id="button-group">
                <Button class="btn btn-primary" onClick={() => paging(-1)} disabled={!prev}>Trang trước</Button>
                <Button class="btn btn-primary" onClick={() => paging(1)} disabled={!next}>Trang sau</Button>
            </ButtonGroup>
        </div>
    )
}