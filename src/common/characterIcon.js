const getCharacterIcon = (characterClass) => {
    switch(characterClass) {
        case '히어로':
            return new URL(`@/assets/character/char1.jpg`, import.meta.url).href;
        case '팔라딘':
            return new URL(`@/assets/character/char2.jpg`, import.meta.url).href;
        case '다크나이트':
            return new URL(`@/assets/character/char3.jpg`, import.meta.url).href;      
        case '소울마스터':
            return new URL(`@/assets/character/char4.jpg`, import.meta.url).href;      
        case '미하일':
            return new URL(`@/assets/character/char5.jpg`, import.meta.url).href;
        case '블래스터':
            return new URL(`@/assets/character/char6.jpg`, import.meta.url).href;    
        case '데몬슬레이어':
            return new URL(`@/assets/character/char7.jpg`, import.meta.url).href;       
        case '데몬어벤져':
            return new URL(`@/assets/character/char8.jpg`, import.meta.url).href;          
        case '아란':
            return new URL(`@/assets/character/char9.jpg`, import.meta.url).href;     
        case '카이저':
            return new URL(`@/assets/character/char10.jpg`, import.meta.url).href;   
        case '아델':
            return new URL(`@/assets/character/char11.jpg`, import.meta.url).href;
        case '제로':
            return new URL(`@/assets/character/char12.jpg`, import.meta.url).href;   
        case '아크메이지(불,독)':
            return new URL(`@/assets/character/char13.jpg`, import.meta.url).href;
        case '아크메이지(썬,콜)':
            return new URL(`@/assets/character/char14.jpg`, import.meta.url).href;
        case '비숍':
            return new URL(`@/assets/character/char15.jpg`, import.meta.url).href;
        case '플레임위자드':
            return new URL(`@/assets/character/char16.jpg`, import.meta.url).href;
        case '배틀메이지':
            return new URL(`@/assets/character/char17.jpg`, import.meta.url).href;
        case '에반':
            return new URL(`@/assets/character/char18.jpg`, import.meta.url).href;
        case '루미너스':
            return new URL(`@/assets/character/char19.jpg`, import.meta.url).href;
        case '일리움':
            return new URL(`@/assets/character/char20.jpg`, import.meta.url).href;
        case '라라':
            return new URL(`@/assets/character/char21.jpg`, import.meta.url).href;
        case '키네시스':
            return new URL(`@/assets/character/char22.jpg`, import.meta.url).href;
        case '보우마스터':
            return new URL(`@/assets/character/char23.jpg`, import.meta.url).href;
        case '신궁':
            return new URL(`@/assets/character/char24.jpg`, import.meta.url).href;      
        case '패스파인더':
            return new URL(`@/assets/character/char25.jpg`, import.meta.url).href;
        case '윈드브레이커':
            return new URL(`@/assets/character/char26.jpg`, import.meta.url).href;
        case '와일드헌터':
            return new URL(`@/assets/character/char27.jpg`, import.meta.url).href;
        case '메르세데스':
            return new URL(`@/assets/character/char28.jpg`, import.meta.url).href;
        case '카인':
            return new URL(`@/assets/character/char29.jpg`, import.meta.url).href;
        case '나이트로드':
            return new URL(`@/assets/character/char30.jpg`, import.meta.url).href;
        case '섀도어':
            return new URL(`@/assets/character/char31.jpg`, import.meta.url).href;
        case '듀얼블레이더':
            return new URL(`@/assets/character/char32.jpg`, import.meta.url).href;
        case '나이트워커':
            return new URL(`@/assets/character/char33.jpg`, import.meta.url).href;
        case '제논':
            return new URL(`@/assets/character/char34.jpg`, import.meta.url).href;    
        case '팬텀':
            return new URL(`@/assets/character/char35.jpg`, import.meta.url).href;
        case '카데나':
            return new URL(`@/assets/character/char36.jpg`, import.meta.url).href;
        case '칼리':
            return new URL(`@/assets/character/char37.jpg`, import.meta.url).href;
        case '호영':
            return new URL(`@/assets/character/char38.jpg`, import.meta.url).href;
        case '바이퍼':
            return new URL(`@/assets/character/char39.jpg`, import.meta.url).href;
        case '캡틴':
            return new URL(`@/assets/character/char40.jpg`, import.meta.url).href;  
         case '캐논마스터':
            return new URL(`@/assets/character/char41.jpg`, import.meta.url).href;
        case '스트라이커':
            return new URL(`@/assets/character/char42.jpg`, import.meta.url).href;
        case '메카닉':
            return new URL(`@/assets/character/char43.jpg`, import.meta.url).href;
        case '은월':
            return new URL(`@/assets/character/char45.jpg`, import.meta.url).href;
        case '엔젤릭버스터':
            return new URL(`@/assets/character/char46.jpg`, import.meta.url).href;                                                                       
        case '아크':
            return new URL(`@/assets/character/char47.jpg`, import.meta.url).href;  
        case '모바일 캐릭터':
            return new URL(`@/assets/character/char48.jpg`, import.meta.url).href;                       
        default:
            return null;           
    }
}

export default getCharacterIcon