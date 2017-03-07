// JavaScript Document
$(function(){
	startMove();
	var $content=$("#news_content");
	var $box=$(".news_box");
	var $wid=$box.width()*2;
	var i=0;
	$content.hover(function(){
		clearInterval(timer);
		},function(){
			startMove();
			})
	
	function startMove(){
	timer=setInterval(function(){
		if(i<1){
			$content.animate({left:'-='+$wid},"normal");
			i++;
			}
		else{
			$content.animate({left:0},"normal");
			i--;
			}
		},4000);
	}
})