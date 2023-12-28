import request from "@/utils/request"

export function getText() {
    return request({
        url: `/api/v1/main/test`,
        method: 'GET',
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}