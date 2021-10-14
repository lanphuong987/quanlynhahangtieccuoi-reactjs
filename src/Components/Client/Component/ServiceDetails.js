import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import API, { endpoints } from "../../../API"
import ObjectDetails from "./ObjectDetails"

export default function ServiceDetails() {
    const { id } = useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        const loadService = async () => {
            try {
                let res = await API.get(endpoints['ServiceAsId'](id))
                setService(res.data)
            } catch (err) {
                console.error(err);
            }
        }
        loadService()
    }, [])
    return (
        <>
            <ObjectDetails object={service} />
        </>
    )
}