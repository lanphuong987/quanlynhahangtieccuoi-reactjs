import { useState } from 'react';
import API, { endpoints } from '../../../API';
import { useHistory, useParams } from "react-router"
import { useEffect } from 'react';
import { Button, ButtonGroup } from "react-bootstrap"
import { useLocation } from "react-router"
import ServiceCard from './ServiceCard';
import { Form } from 'reactstrap';
export default function ServiceAsCate(props) {
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()
    const [service, setService] = useState([])
    const { cate } = useParams()
    const [q, setQ] = useState([])
    const history = useHistory()
    let cateName = '';
    useEffect(() => {
        const loadService = async () => {
            let query = location.search
            if (query === "")
                query = `?page=${page}`
            else
                query += `&page=${page}`
            try {
                let res = await API.get(`${endpoints['ServiceAsCate'](cate)}${query}`)
                setService(res.data)

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
    if (cate == 4)
        cateName = 'váy cưới'
    else {
        if (cate == 3)
            cateName = 'trang trí'
        else
            cateName = 'thuê ca sĩ'
    }
    const search = (event) => {
        event.preventDefault()
        history.push(`/category/${cate}/dichvu?q=${q}`)
    }

    return (
        <div className="pagewrap clientMenu">
            <div className="proTit" data-aos="fade-up">
                <a>Các sảnh phẩm thuộc mục {cateName}</a>
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