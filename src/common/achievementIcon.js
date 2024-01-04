const getAchievementIcon = (trophyGrade) => {
    switch(trophyGrade) {
        case '브론즈':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img06.png';
        case '실버':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img05.png';
        case '골드':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img04.png';
        case '플래티넘':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img03.png';
        case '다이아몬드':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img02.png';
        case '마스터':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/result_img01.png';
        default:
            return null;
    }
}

export default getAchievementIcon