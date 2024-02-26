import request from "@/utils/request"

export function getCharacterSkillAndSymbol(data) {
    return request({
        url: `/api/v1/character/skill`,
        method: 'GET',
        params: data,
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'application/json;charset=utf8' }
    })
}