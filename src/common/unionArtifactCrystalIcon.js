const getUnionArtifactCrystalIcon = (unionArtifactCrystalName, level) => {
    if(level === 5) {
        switch(unionArtifactCrystalName) {
            case '크리스탈 : 주황버섯':
                return new URL(`@/assets/union/img-artifact01-purple.png`, import.meta.url).href;
            case '크리스탈 : 슬라임':
                return new URL(`@/assets/union/img-artifact02-purple.png`, import.meta.url).href;
            case '크리스탈 : 뿔버섯':
                return new URL(`@/assets/union/img-artifact03-purple.png`, import.meta.url).href;
            case '크리스탈 : 스텀프':
                return new URL(`@/assets/union/img-artifact04-purple.png`, import.meta.url).href;
            case '크리스탈 : 스톤골렘':
                return new URL(`@/assets/union/img-artifact05-purple.png`, import.meta.url).href;
            case '크리스탈 : 발록':
                return new URL(`@/assets/union/img-artifact06-purple.png`, import.meta.url).href;
            case '크리스탈 : 자쿰':
                return new URL(`@/assets/union/img-artifact07-purple.png`, import.meta.url).href;
            case '크리스탈 : 핑크빈':
                return new URL(`@/assets/union/img-artifact01-purple.png`, import.meta.url).href;
            case '크리스탈 : 파풀라투스':
                return new URL(`@/assets/union/img-artifact01-purple.png`, import.meta.url).href;
            default:
                return null;
        }
    } else {
        switch(unionArtifactCrystalName) {
            case '크리스탈 : 주황버섯':
                return new URL(`@/assets/union/img-artifact01-blue.png`, import.meta.url).href;
            case '크리스탈 : 슬라임':
                return new URL(`@/assets/union/img-artifact02-blue.png`, import.meta.url).href;
            case '크리스탈 : 뿔버섯':
                return new URL(`@/assets/union/img-artifact03-blue.png`, import.meta.url).href;
            case '크리스탈 : 스텀프':
                return new URL(`@/assets/union/img-artifact04-blue.png`, import.meta.url).href;
            case '크리스탈 : 스톤골렘':
                return new URL(`@/assets/union/img-artifact05-blue.png`, import.meta.url).href;
            case '크리스탈 : 발록':
                return new URL(`@/assets/union/img-artifact06-blue.png`, import.meta.url).href;
            case '크리스탈 : 자쿰':
                return new URL(`@/assets/union/img-artifact07-blue.png`, import.meta.url).href;
            case '크리스탈 : 핑크빈':
                return new URL(`@/assets/union/img-artifact01-blue.png`, import.meta.url).href;
            case '크리스탈 : 파풀라투스':
                return new URL(`@/assets/union/img-artifact01-blue.png`, import.meta.url).href;
            default:
                return null;
        }
    }
};

export default getUnionArtifactCrystalIcon