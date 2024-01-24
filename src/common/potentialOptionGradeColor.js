const getPotentialOptionGradeColor = (grade) => {
    switch(grade) {
        case '레어':
            return '#66FFFF';
        case '에픽':
            return '#9966FE';
        case '유니크':
            return '#FFCC00';
        case '레전드리':
            return '#CCFF00';
        case '익솁셔널':
            return '#BC301F';
        default:
            return null;
    }
}

const getPotentialImageOptionGradeColor = (grade) => {
    switch(grade) {
        case '레어':
            return '#0099FF';
        case '에픽':
            return '#7700EE';
        case '유니크':
            return '#FFBB00';
        case '레전드리':
            return '#77EE00';
        case '익솁셔널':
            return '#BC301F';
        default:
            return null;
    }
}

const getPotentialImageOptionGradeText = (grade) => {
    switch(grade) {
        case '레어':
            return 'R';
        case '에픽':
            return 'E';
        case '유니크':
            return 'U';
        case '레전드리':
            return 'L';
        case '익솁셔널':
            return 'Ex';
        default:
            return null;
    }
}
export { getPotentialImageOptionGradeColor, getPotentialImageOptionGradeText, getPotentialOptionGradeColor };

