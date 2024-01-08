import request from "@/utils/request"

export function createChatRoom(data) {
    return request({
        url: `/api/v1/chat`,
        method: 'POST',
        data: data,
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}