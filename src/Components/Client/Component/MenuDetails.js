import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import API, { endpoints } from "../../../API"
import ObjectDetails from "./ObjectDetails"

export default function MenuDetails() {
    const { id } = useParams()
    const [menu, setMenu] = useState([])
    useEffect(() => {
        const loadMenu = async () => {
            try {
                let res = await API.get(endpoints['MenuAsId'](id))
                setMenu(res.data)
            } catch (err) {
                console.error(err);
            }
        }
        loadMenu()
    }, [])
    return (
        <>
            <ObjectDetails object={menu} />
    </>
        )
}