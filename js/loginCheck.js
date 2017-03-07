// JavaScript Document
//前端表单数据验证
$(function(){
	  var txt_user=$("#userName");
	  var txt_pwd=$("#passWord");
	  var btn_login=$("#btn_login");
	  var tip_user=$("#tip_user");
	  var tip_pwd=$("#tip_pwd");
	  var group_user=$("#group_user");
	  var group_pwd=$("#group_pwd");
	  txt_user.focus(function(){
			  tip_user.text('请输入映象账号').css('color','#09f');
			  group_user.removeClass('has-error');
		  });
	  txt_user.blur(function(){
			  tip_user.text('');
			  if($(this).val()==''){
					  group_user.addClass('has-error');
					  tip_user.text('此项为必填项').css('color','#900');
				  }
		  })
	  txt_pwd.focus(function(){
			  tip_pwd.text('请输入密码').css('color','#09f');
			  group_pwd.removeClass('has-error');
		  });
	  txt_pwd.blur(function(){
			  tip_pwd.text('');
			  if($(this).val()==''){
					  group_pwd.addClass('has-error');
					  tip_pwd.text('此项为必填项').css('color','#900');
				  }
		  })
	  btn_login.click(function(){
			  if(txt_user.val()==''){
					  group_user.addClass('has-error');
					  tip_user.text('此项为必填项').css('color','#900');
					  //btn_login.attr('disabled','true');
					  return false;
				  }else if(txt_pwd.val()==''){
					  group_pwd.addClass('has-error');
					  tip_pwd.text('此项为必填项').css('color','#900');
					  //btn_login.attr('disabled','true');
					  return false;
					  }
		  })
	})