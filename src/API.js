import axios from 'axios';

export let endpoints = {
    'Menu': '/Menu/',
    'FoodCategory': '/FoodCategory/',
    'MenuAsCate': (CateId) => `/FoodCategory/${CateId}/menus/`,
    'WeddingRoom': '/WeddingRoom/',
    'WeddingRoomType': '/WeddingRoomType/',
    'RoomAsCate': (CateId) => `/WeddingRoomType/${CateId}/weddingrooms/`,
    'ServiceCategory': '/ServiceCategory/',
    'ServiceAsCate': (CateId) => `/ServiceCategory/${CateId}/services/`,
    "register": "/User/",
}
export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});