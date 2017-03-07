// JavaScript Document
$(function(){
		var group_user=$("#group_user");
		var group_NC=$("#group_NC");
		var group_pwd=$("#group_pwd");
		var group_repwd=$("#group_repwd");
		var group_phone=$("#group_phone");
		var group_mail=$("#group_mail");
		var group_qq=$("#group_qq");
		var user=$("#userName");
		var NC=$("#userNC");
		var pwd=$("#pwd");
		var repwd=$("#repwd");
		var phone=$("#phone");
		var mail=$("#mail");
		var qq=$("#qq");
		var lab_user=$(".label_user");
		var lab_NC=$(".label_NC");
		var lab_pwd=$(".label_pwd");
		var lab_repwd=$(".label_repwd");
		var lab_phone=$(".label_phone");
		var lab_mail=$(".label_mail");
		var lab_qq=$(".label_qq");
		var userName_gly=$(".userName_gly");
		var NC_gly=$(".NC_gly");
		var pwd_gly=$(".pwd_gly");
		var repwd_gly=$(".repwd_gly");
		var phone_gly=$(".phone_gly");
		var mail_gly=$(".mail_gly");
		var qq_gly=$(".qq_gly");
		var btn_regist=$("#btn_regist");
		var isMobile=/^(?:13\d|15\d|18\d)\d{5}(\d{3}|\*{3})$/;
		var isMail =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
		var isQQ=/^\d{5,10}$/;
		user.focus(function(){
				lab_user.text('');
				group_user.removeClass("has-error");
				userName_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_user.addClass("has-success");
			}).blur(function(){
				if($(this).val()==''){
						group_user.addClass("has-error");
						lab_user.text('此项为必填项').css("color","#900");
						userName_gly.addClass("glyphicon-remove");
					}
				else{
					userName_gly.addClass("glyphicon-ok");
					}
			})
		NC.focus(function(){
				lab_NC.text('');
				group_NC.removeClass("has-error");
				NC_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_NC.addClass("has-success");
			}).blur(function(){
				if($(this).val()==''){
						group_NC.addClass("has-error");
						lab_NC.text('此项为必填项').css("color","#900");
						NC_gly.addClass("glyphicon-remove");
					}
				else{
					NC_gly.addClass("glyphicon-ok");
					}
			})
		pwd.focus(function(){
				lab_pwd.text('');
				group_pwd.removeClass("has-error");
				pwd_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_pwd.addClass("has-success");
			}).blur(function(){
				if($(this).val()==''){
						group_pwd.addClass("has-error");
						lab_pwd.text('此项为必填项').css("color","#900");
						pwd_gly.addClass("glyphicon-remove");
					}
				else{
					pwd_gly.addClass("glyphicon-ok");
					}
			})
		repwd.focus(function(){
				lab_repwd.text('');
				group_repwd.removeClass("has-error");
				repwd_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_repwd.addClass("has-success");
			}).blur(function(){
				if($(this).val()==''||$(this).val()!=pwd.val()){
						group_repwd.addClass("has-error");
						lab_repwd.text('请再次确认密码').css("color","#900");
						repwd_gly.addClass("glyphicon-remove");
					}
				else{
					repwd_gly.addClass("glyphicon-ok");
					}
			});
		phone.focus(function(){
				lab_phone.text('');
				group_phone.removeClass("has-error");
				phone_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_phone.addClass("has-success");
			}).blur(function(){
				if(!isMobile.test($(this).val())||$(this).val()==''){
						group_phone.addClass("has-error");
						lab_phone.text('请输入正确的手机号').css("color","#900");
						phone_gly.addClass("glyphicon-remove");
					}
				else{
					phone_gly.addClass("glyphicon-ok");
					}
			});
		mail.focus(function(){
				lab_mail.text('');
				group_mail.removeClass("has-error");
				mail_gly.removeClass("glyphicon-remove glyphicon-ok");
				group_mail.addClass("has-success");
			}).blur(function(){
				if(!isMail.test($(this).val())||$(this).val()==''){
						group_mail.addClass("has-error");
						lab_mail.text('请输入正确的邮箱地址').css('color','#900');
						mail_gly.addClass("glyphicon-remove");
					}
				else{
					mail_gly.addClass("glyphicon-ok");
					}
			});
        qq.focus(function(){
            lab_qq.text('');
            group_qq.removeClass("has-error");
            qq_gly.removeClass("glyphicon-remove glyphicon-ok");
            group_qq.addClass("has-success");
          }).blur(function(){
            if(!isQQ.test($(this).val())||$(this).val()==''){
                group_qq.addClass("has-error");
                lab_qq.text('请输入正确的QQ号码').css("color","#900");
                qq_gly.addClass("glyphicon-remove");
              }
            else{
              qq_gly.addClass("glyphicon-ok");
              }
          });
		btn_regist.click(function(){
            if (user.val()=='') {
                group_user.addClass("has-error");
                lab_user.text('此项为必填项').css("color","#900");
                userName_gly.addClass("glyphicon-remove");
                return false;
            }
			else if (NC.val()=='') {
                group_NC.addClass("has-error");
                lab_NC.text('此项为必填项').css("color","#900");
                NC_gly.addClass("glyphicon-remove");
                return false;
            }
            else if (pwd.val()=='') {
                group_pwd.addClass("has-error");
                lab_pwd.text('此项为必填项').css("color","#900");
                pwd_gly.addClass("glyphicon-remove");
                return false;
            }
            else if (repwd.val()==''||repwd.val()!=pwd.val()) {
                group_repwd.addClass("has-error");
                lab_repwd.text('请再次确认密码').css("color","#900");
                repwd_gly.addClass("glyphicon-remove");
                return false;
            }
            else if (!isMobile.test(phone.val())||phone.val()=='') {
                group_phone.addClass("has-error");
                lab_phone.text('请输入正确的手机号').css("color","#900");
                phone_gly.addClass("glyphicon-remove");
                return false;
            }
            else if (!isMail.test(mail.val())||mail.val()=='') {
                group_mail.addClass("has-error");
                lab_mail.text('请输入正确的邮箱地址').css('color','#900');
                mail_gly.addClass("glyphicon-remove");
                return false;
            }
            else if (!isQQ.test(qq.val())||qq.val()=='') {
                group_qq.addClass("has-error");
                lab_qq.text('请输入正确的QQ号码').css("color","#900");
                qq_gly.addClass("glyphicon-remove");
                return false;
            };
            
        })
	})