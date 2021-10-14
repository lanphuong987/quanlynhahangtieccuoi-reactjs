export function loginUser(payload) {
    return {
        "type": "USER_LOGIN",
        "payload": payload
    }
}

export function logoutUser(payload=null) {
    return {
        "type": "USER_LOGOUT",
        "payload": payload
    }
}
export function loginAdmin(payload) {
    return {
        "type": "ADMIN_LOGIN",
        "payload": payload
    }
}

export function logoutAdmin(payload = null) {
    return {
        "type": "ADMIN_LOGOUT",
        "payload": payload
    }
}