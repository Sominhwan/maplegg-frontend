const getWordIcon = (worldName) => {
    switch(worldName) {
        case '오로라':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_4.png';
        case '레드':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_5.png';
        case '이노시스':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_6.png';
        case '유니온':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_7.png';    
        case '스카니아':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_8.png';
        case '루나':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_9.png';
        case '제니스':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_10.png';
        case '크로아':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_11.png';
        case '베라':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_12.png';
        case '엘리시움':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_13.png';
        case '아케인':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_14.png';
        case '노바':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_15.png';
        case '버닝':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_16.png';
        case '버닝2':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_17.png';
        case '버닝3':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_18.png';
        case '리부트2':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_2.png';
        case '리부트':
            return 'https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_3.png';
        default:
            return null;
    }
}

export default getWordIcon