import request from "@/utils/request"

export function getCharacterOverall() {
    return request({
        url: `/api/v1/main/character/ranking/overall`,
        method: 'GET',
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}