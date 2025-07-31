let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// 返回字符串URL的友好版本
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls:强制版本
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls:函数版本
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// single:强制版本
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if(element.split(/\s+/).length === 1) singles.push(element);
    })
    return singles;
}
console.log(imperativeSingles(states));

// single:函数版本
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states))

let numbers = [1,2,3,4,5,6,7,8,9,10];

// sum:强制版本
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(element) {
        total += element;
    })
    return total;
}
console.log(imperativeSum(numbers));

// sum:函数版本
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n})
}
console.log(functionalSum(numbers));

// lengths:强制版本
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths:函数版本
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));