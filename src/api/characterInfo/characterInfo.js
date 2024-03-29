import request from "@/utils/request"

export function getCharacterStat(data) {
    return request({
        url: `/api/v1/character/stat`,
        method: 'GET',
        params: data,
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}