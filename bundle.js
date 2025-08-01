(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"mhartl-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  // Return content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return (this.content.match(/[a-z]/gi) || []).join("").toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}


},{}]},{},[1]);
