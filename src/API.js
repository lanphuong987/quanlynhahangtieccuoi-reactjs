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
    'MenuAsId': (Id) => `/Menu/${Id}`,
    'Service': '/Service/',
    'ServiceAsId': (Id) => `/Service/${Id}`,
    'RoomAsId': (Id) => `/WeddingRoom/${Id}`,
    'Contact': '/Contact/',
    "oauth2-info": "/oauth2-info/",
    "login": "/o/token/",
    "current-user": "/User/current-user/",
    "convert": "/o/convert-token/"
}
export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});