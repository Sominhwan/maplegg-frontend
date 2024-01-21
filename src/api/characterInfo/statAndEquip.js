import request from "@/utils/request"

export function getCharacterEquipment(data) {
    return request({
        url: `/api/v1/character/equipment`,
        method: 'GET',
        params: data,
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}