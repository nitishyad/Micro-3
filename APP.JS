const sample = require('./Food.json');
// console.log(sample);
function allfooditems(data) {
    return data.map(item => item.foodname);
}
console.log(allfooditems(sample));
function vegetablefooditems(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
}
console.log(vegetablefooditems(sample));
function fruitfooditems(data) {
    return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
}
console.log(fruitfooditems(sample));
function protiens(data) {
    return data.filter(item => item.protiens > 10).map(item => item.foodname);
}
console.log(protiens(sample));
function Nuts(data) {
    return data.filter(item => item.category === 'Nuts').map(abc => abc.foodname);
}
console.log(Nuts(sample));
function Grain(data) {
    return data.filter(item => item.category === 'Grain').map(item => item.foodname);
}
console.log(Grain(sample));
function Dairy(data) {
    return data.filter(item => item.category === 'Dairy').map(item => item.foodname);
}
console.log(Dairy(sample));
function Caloriemorethan100(data) {
    return data.filter(item => item.calorie > 100).map(item => item.foodname);
}
console.log(Caloriemorethan100(sample));
function Caloriemorethan100(data) {
    return data.filter(item => item.calorie > 100).map(item => item.foodname);
}
console.log(Caloriemorethan100(sample));
function Calorielessthan100(data) {
    return data.filter(item => item.calorie < 100).map(item => item.foodname);
}
console.log(Calorielessthan100(sample));
sample.sort((a, b) => b.protiens - a.protiens);
sample.forEach((item) => {
    console.log(item.foodname);
});
sample.sort((a, b) => a.cab - a.cab);
sample.forEach((item) => {
    console.log(item.foodname);
});