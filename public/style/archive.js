/*TECH.MEITUAN.COM*/
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Zepto"));else if("function"==typeof define&&define.amd)define(["Zepto"],t);else{var o=t("object"==typeof exports?require("Zepto"):e.Zepto);for(var i in o)("object"==typeof exports?exports:e)[i]=o[i]}}("undefined"!=typeof self?self:this,function(e){return webpackJsonp([7],{0:function(t,o){t.exports=e},83:function(e,t,o){"use strict";o(1),o(84),$("#archive-switch").on("click",function(e){if(e.target&&"a"===e.target.tagName.toLowerCase()){var t=e.target.hash,o=t.replace("#",""),i=$(e.target);$(".archive-box").addClass("hide"),$("#archive-box-"+o).removeClass("hide"),i.siblings().removeClass("active"),i.addClass("active")}e.preventDefault()})},84:function(e,t){}},[83])});