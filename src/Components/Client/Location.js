import { useLocation } from 'react-router-dom'
function View() {
    let location = useLocation();
    return location.pathname
}
export default View;