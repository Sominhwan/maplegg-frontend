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

export default getPotentialOptionGradeColor