const withTax = (rate) => (amount) => amount * (1 + rate);
const priceInclVat = withTax(0.2);
console.log(priceInclVat(100)); // 120
