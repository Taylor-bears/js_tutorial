let Phrase = require("mhartl-palindrome");

function palindromeTester(event){
    event.preventDefault(); // 阻止表单信息提交行为

    let phrase = new Phrase(event.target.phrase.value); // 根据输入创建的对象
    let palindromeResult = document.querySelector("#palindromeResult"); // 找到当前网页输出位置

    if(phrase.palindrome()){
        palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
    }
    else{
        palindromeResult.innerHTML =`"${phrase.content}" is not a palindrome.`;
    }
}

// 监听
document.addEventListener("DOMContentLoaded", function(){
    let tester = document.querySelector("#palindromeTester"); // 找到测试表单
    // 监听：测试表单submit触发事件
    tester.addEventListener("submit", function(event){
        palindromeTester(event);
    });
})