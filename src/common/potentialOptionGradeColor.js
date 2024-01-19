const getPotentialOptionGradeColor = (grade) => {
    switch(grade) {
        case '레어':
            return '#7698AE';
        case '에픽':
            return '#6800C3';
        case '유니크':
            return '#EBC139';
        case '레전드리':
            return '#00FF00';
        case '익솁셔널':
            return '#BC301F';
        default:
            return null;
    }
}

export default getPotentialOptionGradeColor