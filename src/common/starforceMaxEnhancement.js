const getStarforceMaxEnhancement = (baseEquipmentLevel, kind) => {
    if(kind === 1) {
        return true;
    } else if(kind === 2) {
        if(baseEquipmentLevel >= 95) {
            return true;
        } 
    } else if(kind === 3) {
        if(baseEquipmentLevel >= 118) {
            return true;
        } 
    } else if(kind === 4) {
        if(baseEquipmentLevel >= 128) {
            return true;
        } 
    } else if(kind === 5) {
        if(baseEquipmentLevel >= 138) {
            return true;
        } 
    }
}

// const getStarforceMaxEnhancement = (baseEquipmentLevel, kind) => {
//     switch (kind) {
//         case 1:
//             return true;
//         case 2:
//             return baseEquipmentLevel >= 95;
//         case 3:
//             return baseEquipmentLevel >= 118;
//         case 4:
//             return baseEquipmentLevel >= 128;
//         case 5:
//             return baseEquipmentLevel >= 138;
//         default:
//             return false;
//     }
// };

export default getStarforceMaxEnhancement