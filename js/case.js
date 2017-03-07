// JavaScript Document
$(function(){
	$(".case_box").hover(function(){
			$(this).find("span").stop().animate({top:-80},"normal");
		},function(){
			$(this).find("span").stop().animate({top:-40},"normal");
			})
	})