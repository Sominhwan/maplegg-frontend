const getUnionGrade = (unionLevel) => {
    if (500 <= unionLevel && unionLevel < 1000) { // 노비스
        return '노비스 I';
    } else if (1000 <= unionLevel && unionLevel < 1500) {
        return '노비스 II';
    } else if (1500 <= unionLevel && unionLevel < 2000) {
        return '노비스 III';
    } else if (2000 <= unionLevel && unionLevel < 2500) {
        return '노비스 IV';
    } else if (2500 <= unionLevel && unionLevel < 3000) {
        return '노비스 V';
    } else if (3000 <= unionLevel && unionLevel < 3500) { // 베테랑
        return '베테랑 I';
    } else if (3500 <= unionLevel && unionLevel < 4000) {
        return '베테랑 II';
    } else if (4000 <= unionLevel && unionLevel < 4500) {
        return '베테랑 III';
    } else if (4500 <= unionLevel && unionLevel < 5000) {
        return '베테랑 IV';
    } else if (5000 <= unionLevel && unionLevel < 5500) {
        return '베테랑 V';
    } else if (5500 <= unionLevel && unionLevel < 6000) { // 마스터
        return '마스터 I';
    } else if (6000 <= unionLevel && unionLevel < 6500) {
        return '마스터 II';
    } else if (6500 <= unionLevel && unionLevel < 7000) {
        return '마스터 III';
    } else if (7000 <= unionLevel && unionLevel < 7500) {
        return '마스터 IV';
    } else if (7500 <= unionLevel && unionLevel < 8000) {
        return '마스터 V';
    } else if (8000 <= unionLevel && unionLevel < 8500) { // 그랜드 마스터
        return '그랜드 마스터 I';
    } else if (8500 <= unionLevel && unionLevel < 9000) {
        return '그랜드 마스터 II';
    } else if (9000 <= unionLevel && unionLevel < 9500) {
        return '그랜드 마스터 III';
    } else if (9500 <= unionLevel && unionLevel < 10000) {
        return '그랜드 마스터 IV';
    } else if (10000 <= unionLevel && unionLevel < 10500) {
        return '그랜드 마스터 V';
    } else if (10500 <= unionLevel && unionLevel < 11000) { // 슈프림
        return '슈프림 I';
    } else if (11000 <= unionLevel && unionLevel < 11500) {
        return '슈프림 II';
    } else if (11500 <= unionLevel && unionLevel < 12000) {
        return '슈프림 III';                                    
    } else if (12000 <= unionLevel && unionLevel < 12500) {
        return '슈프림 IV';    
    } else if (12500 <= unionLevel) {
        return '슈프림 V';    
    } else {
        return null;               
    }
}

export default getUnionGrade