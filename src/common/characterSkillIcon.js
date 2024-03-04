const getCharacterSkillIcon = (skillName, type) => {
    if(type === 'hexa') {
        switch(skillName) {
            case '플레임 스윕 VI':
                return new URL(`@/assets/skill/hexaSkill/adventurer/archMage-fire/adventurer-archMage-flameSwum.png`, import.meta.url).href;
            case '플레임 헤이즈 VI/미스트 이럽션 VI':
                return new URL(`@/assets/skill/hexaSkill/adventurer/archMage-fire/adventurer-archMage-flameHaiz.png`, import.meta.url).href;
            case '도트 퍼니셔 강화':
                return new URL(`@/assets/union/img-artifact03-purple.png`, import.meta.url).href;
            case '포이즌 노바 강화':
                return new URL(`@/assets/union/img-artifact04-purple.png`, import.meta.url).href;
            case '퓨리 오브 이프리트 강화':
                return new URL(`@/assets/union/img-artifact05-purple.png`, import.meta.url).href;
            case '포이즌 체인 강화':
                return new URL(`@/assets/union/img-artifact06-purple.png`, import.meta.url).href;
            case '인페르날 베놈':
                return new URL(`@/assets/union/img-artifact07-purple.png`, import.meta.url).href;
            case '크리스탈 : 핑크빈':
                return new URL(`@/assets/union/img-artifact01-purple.png`, import.meta.url).href;
            case '크리스탈 : 파풀라투스':
                return new URL(`@/assets/union/img-artifact01-purple.png`, import.meta.url).href;
            default:
                return null;
        }
    }

};

export default getCharacterSkillIcon