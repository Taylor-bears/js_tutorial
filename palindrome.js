// 反转一个字符串
function reverse(string) {
    return Array.from(string).reverse().join("");
}

function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}