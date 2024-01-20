const getNumberFormat = (number) => {
    if (number >= 100000000) {
        const 억 = Math.floor(number / 100000000);
        const 만 = number % 100000000;
        return `${억}억${formatMan(만)}`;
      } else if (number >= 10000) {
        return formatMan(number);
      } else {
        return number.toString();
      }
}

const formatMan = (number) => {
    const 만 = Math.floor(number / 10000);
    const 일만 = number % 10000;
    if (만 > 0) {
      return `${만}만${formatMan(일만)}`;
    } else {
      return 일만.toString();
    }
}

export default getNumberFormat