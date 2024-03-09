import request from "@/utils/request"

export function fileUpload(data) { // 단일 프로필 이미지 업로드
    return request({
        url: `/api/v1/upload/file`,
        method: 'POST',
        data: data,
        meta: { apiVersion: '1.0.0' },
        headers: { 'Content-Type': 'multipart/form-data;charset=utf8' }
    })
}