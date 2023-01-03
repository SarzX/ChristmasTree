var OptinMonsterOptins={};function OptinMonster(){var e;this.public={},this.init=function(e){for(key in e)this.public[key]=e[key];if("sidebar"!==this.getProp("type")&&"post"!==this.getProp("type")&&!this.getProp("preview")&&!this.getProp("click")){if(!this.cookiesEnabled()&&!this.getProp("test"))return;var t=this.getCookie("om-global-cookie"),o=this.getCookie("om-"+this.getProp("id")),i=this.getProp("second"),n=this.getProp("test"),r=this.getProp("type");if(this.isMobile()&&!this.getProp("mobile"))return;if(!this.isMobile()&&this.getProp("mobile"))return;if(i&&!n&&!this.getCookie("om-second-"+this.getProp("id")))return this.createCookie("om-second-"+this.getProp("id"),!0,this.getProp("cookie"));if((t||o)&&!n&&"slide"!==r)return}this.run()},this.run=function(){var e=this.getProp("type");"slide"==e&&this.setProp("slide_open",!1),OptinMonsterOptins[this.getProp("optin_js")]={type:e,visible:!1},this.loadjQuery()},this.loadjQuery=function(){var e=this,t=!1;if(void 0===window.jQuery)(o=document.createElement("script")).src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",o.onload=o.onreadystatechange=function(){var o=this.readyState;if(!o||"complete"==o||"loaded"==o)try{t||(e.loadjQueryHandler(!1),t=!0)}catch(e){}},(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o);else if("1.11.1"!==window.jQuery.fn.jquery){var o;this.public.ejQuery=window.jQuery,(o=document.createElement("script")).src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",o.onload=o.onreadystatechange=function(){var o=this.readyState;if(!o||"complete"==o||"loaded"==o)try{t||(e.loadjQueryHandler(!0),t=!0)}catch(e){}},(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o)}else e.public.$=e.public.ejQuery=window.jQuery,e.loadApp()},this.loadjQueryHandler=function(e){e?(this.public.$=window.jQuery.noConflict(!0),this.loadApp()):(jQuery=window.jQuery.noConflict(!0),this.public.$=this.public.ejQuery=jQuery,this.loadApp())},this.loadApp=function(){var e=this;e.public.$(document).ready((function(t){e.runOptinMonster()}))},this.runOptinMonster=function(){var e=this,t=e.getProp("click");e.trigger("OptinMonsterInit"),t?e.manual():e.load()},this.manual=function(){var e=this,t={optin_monster_ajax_action:"get_optinmonster",slug:e.getProp("optin")},o=e.manualSuccess(e),i=e.manualError(e);e.request(t,o,i)},this.manualSuccess=function(e){var t=e.getProp("$"),o=!1;return function(i){for(key in i.success)e.public[key]=i.success[key];OptinMonsterOptins[e.getProp("optin_js")].type=e.getProp("type"),e.setProp("delay",0),e.setProp("exit",!1);var n=document.createElement("script");n.src="//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js",n.onload=n.onreadystatechange=function(){var i=this.readyState;if(!i||"complete"==i||"loaded"==i)try{o||(t("body").append(e.getProp("html")),e.trigger("OptinMonsterManualOptinSuccess"),e.load(),o=!0)}catch(e){}},(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(n)}},this.manualError=function(e){return function(t,o,i){e.trigger("OptinMonsterManualOptinError")}},this.load=function(){var e=this;e.sanitize(),e.iehotfix(),e.open()},this.sanitize=function(){var e=this,t=e.getProp("$"),o=t("#om-"+e.getProp("optin")),i=t("#om-"+e.getProp("optin")).find(":submit"),n=i.attr("name"),r=i.attr("id");"submit"==n&&o.find(":submit").attr("name","submit-om"),"submit"==r&&o.find(":submit").attr("id","submit-om")},this.iehotfix=function(){this.isIE()&&(this.loadPlaceholder(),this.doPlaceholder())},this.open=function(e){var t=this,o=t.getProp("exit"),i=t.getProp("click"),n=t.getProp("optin_js"),r="slide"==t.getProp("type")?0:t.getProp("delay");e=e||!1;OptinMonsterOptins.hasOwnProperty(n)&&!0===OptinMonsterOptins[n].visible||((e||o)&&(r=0),i&&!e||setTimeout((function(){"mobile"!==t.getProp("type")&&t.appendHolder(),t.getProp("custom")&&t.prepareCustomOptin(),t.trigger("OptinMonsterLoaded"),o&&!i?t.exitOpen():t.normalOpen()}),r||0))},this.exitOpen=function(){var e=this,t=e.getProp("$"),o=e.getProp("optin_js"),i=!1;t(document).on("mouseleave",(function(t){t.clientY>(e.getProp("exit_sensitivity")||20)||e.getCookie("om-"+e.getProp("id"))||e.getCookie("om-global-cookie")||OptinMonsterOptins.hasOwnProperty(o)&&!0===OptinMonsterOptins[o].visible||i||(i=!0,e.show(!0))}))},this.normalOpen=function(){var e=this,t=e.getProp("type"),o=e.getProp("$");"mobile"!=t||e.getProp("preview")?e.show():(e.setProp("dw",o(document).width()),o(window).scrollTop()?o(window).on("scroll.omMobile",(function(){clearTimeout(o.data(this,"omScrollTimer")),o.data(this,"omScrollTimer",setTimeout((function(){e.show()}),300))})):e.show())},this.show=function(e){var t=this,o=t.getProp("$"),i=t.getProp("id"),n=t.getProp("optin"),r=t.getProp("optin_js"),s=t.getProp("type"),p=t.getProp("theme"),a=t.getProp("preview");e=e||!1;if((!OptinMonsterOptins.hasOwnProperty(r)||!0!==OptinMonsterOptins[r].visible)&&(!t.getCookie("om-global-cookie")||t.getProp("click")||a||"sidebar"===s||"post"===s)){if(t.trigger("OptinMonsterBeforeShow"),e){if("lightbox"==s||"canvas"==s)t.hasVisiblePopup()||(o("#om-"+n).show().css("display","block"),o("#om-"+s+"-"+p+"-optin").show().css("display","block"),t.positionOptin(),OptinMonsterOptins[t.getProp("optin_js")].visible=!0,t.trigger("OptinMonsterOnShow"));else if(("footer"==s||"slide"==s)&&!t.getCookie("om-"+i+"-closed")){o("#om-"+s+"-"+p+"-optin").show().css("display","block");var l=a?78:0;o("#om-"+n).css("bottom","-"+o("#om-"+n).outerHeight()+"px").show().animate({bottom:parseInt(l)},300,(function(){OptinMonsterOptins[t.getProp("optin_js")].visible=!0,t.trigger("OptinMonsterOnShow"),"slide"==s&&setTimeout((function(){t.showSlide()}),0)}))}}else if("lightbox"==s||"canvas"==s||"mobile"==s)t.hasVisiblePopup()||("mobile"==s?(o("#om-"+n+", #om-"+n+"-overlay").appendTo("body"),o("#om-"+n+"-overlay").height(o(document).height()).show().css("display","block"),o("#om-"+n).show().css("display","block"),a||t.fixMobileScaling(),o("#om-"+s+"-"+p+"-optin").hide().fadeIn(300,(function(){o("#om-"+n).css("top",o(document).scrollTop()),OptinMonsterOptins[t.getProp("optin_js")].visible=!0,t.trigger("OptinMonsterOnShow")}))):o("#om-"+n).fadeIn(300,(function(){o(this).find("#om-"+s+"-"+p+"-optin").show().css("display","block"),t.positionOptin(),OptinMonsterOptins[t.getProp("optin_js")].visible=!0,t.trigger("OptinMonsterOnShow")})));else if("footer"==s||"slide"==s){if(!t.getCookie("om-"+i+"-closed")||a){o("#om-"+s+"-"+p+"-optin").show().css("display","block");l=a?78:0;o("#om-"+n).css("bottom","-"+o("#om-"+n).outerHeight()+"px").show().animate({bottom:parseInt(l)},300,(function(){OptinMonsterOptins[t.getProp("optin_js")].visible=!0,t.trigger("OptinMonsterOnShow"),"slide"==s&&(t.slideHandlers(),setTimeout((function(){t.showSlide()}),t.getProp("delay")||0))}))}}else t.trigger("OptinMonsterOnShow");t.submit(),t.close(),t.track()}},this.fixMobileScaling=function(){this.getProp("type"),this.getProp("optin");var e=this.getProp("$");e('meta[name="viewport"]').length>0||(e("head").append('<meta id="optin-monster-viewport" name="viewport" content="width=device-width, initial-scale=1.0">'),e("html, body").css("overflow","hidden"))},this.positionOptin=function(){var e=this,t=e.getProp("$"),o=(e.getProp("id"),e.getProp("optin")),i=e.getProp("type"),n=e.getProp("theme"),r=e.getProp("preview"),s=r?(t(window).height()-t("#om-"+o+" .om-theme-"+n).height())/2-39:(t(window).height()-t("#om-"+o+" .om-theme-"+n).height())/2;"lightbox"==i||"canvas"==i?(t("#om-"+o+" .om-theme-"+n+", #om-"+o+" .optin-monster-success-overlay").css({top:s,left:(t(window).width()-t("#om-"+o+" .om-theme-"+n).width())/2}),t(window).resize((function(){s=r?(t(window).height()-t("#om-"+o+" .om-theme-"+n).height())/2-39:(t(window).height()-t("#om-"+o+" .om-theme-"+n).height())/2,t("#om-"+o+" .om-theme-"+n+", #om-"+o+" .optin-monster-success-overlay").css({top:s,left:(t(window).width()-t("#om-"+o+" .om-theme-"+n).width())/2})})),e.trigger("OptinMonsterPositionOptin")):e.trigger("OptinMonsterPositionOptin")},this.slideHandlers=function(){var e=this,t=e.getProp("$"),o=(e.getProp("id"),e.getProp("optin")),i=e.getProp("type"),n=e.getProp("theme");t(document).on("click.closeOptin","#om-"+o+" .om-slide-close-content, #om-"+o+" .om-close",(function(o){o.target===this&&(o.preventDefault(),e.trigger("OptinMonsterBeforeClose"),t("#om-"+i+"-"+n+"-optin").removeClass("om-slide-open").addClass("om-slide-closed"),t(".optin-monster-success-overlay").remove(),e.cleanup())})),t(document).on("click.openOptin","#om-"+o+" .om-slide-open-content",(function(o){o.target===this&&(o.preventDefault(),e.trigger("OptinMonsterBeforeOpen"),t("#om-"+i+"-"+n+"-optin").removeClass("om-slide-closed").addClass("om-slide-open"),e.setProp("slide_open",!0))}))},this.showSlide=function(){var e=this,t=e.getProp("$"),o=e.getProp("id"),i=(e.getProp("optin"),e.getProp("type")),n=e.getProp("theme");(!e.getCookie("om-"+o)&&!e.getProp("slide_open")||e.getProp("preview"))&&(t("#om-"+i+"-"+n+"-optin").removeClass("om-slide-closed").addClass("om-slide-open"),e.setProp("slide_open",!0))},this.submit=function(){var e=this,t=e.getProp("$"),o=e.getProp("optin"),i=e.getProp("type"),n=e.getProp("theme"),r=e.getProp("custom");if(!e.getProp("preview"))if(r){var s=!1;t(document).on("submit.doCustomOptin",".om-custom-html-form form",(function(n){if(!s)return s=!0,e.trigger("OptinMonsterBeforeOptin"),e.optin(n.target,!0),n.preventDefault(),!1;"lightbox"==i||"canvas"==i?t("#om-"+o).fadeOut(300,e.onClose(e)):"footer"!=i&&"slide"!=i||t("#om-"+o).animate({bottom:"-"+t("#om-"+o).outerHeight()+"px"},300,e.onClose(e))}))}else t(document).on("click.doOptin","#om-"+o+" #om-"+i+"-"+n+"-optin-submit",(function(t){t.preventDefault(),e.trigger("OptinMonsterBeforeOptin"),e.optin(t.target)}))},this.close=function(e){var t=this,o=t.getProp("$"),i=t.getProp("optin"),n=t.getProp("type");e=e||!1;t.getProp("preview")||(e?"lightbox"==n||"canvas"==n||"mobile"==n?o("#om-"+i).fadeOut(300,t.onClose):"footer"!=n&&"slide"!=n||o("#om-"+i).animate({bottom:"-"+o("#om-"+i).outerHeight()+"px"},300,t.onClose):o(document).on("click.closeOptin","#om-"+i+" .om-close, #om-"+i+".optin-monster-overlay",(function(e){e.target!==this||"mobile"==n&&o(e.target).hasClass("optin-monster-overlay")||(e.preventDefault(),t.trigger("OptinMonsterBeforeClose"),"lightbox"==n||"canvas"==n||"mobile"==n?o("#om-"+i).fadeOut(300,t.onClose(t)):"footer"==n&&o("#om-"+i).animate({bottom:"-"+o("#om-"+i).outerHeight()+"px"},300,t.onClose(t)))})))},this.onClose=function(e){return function(){if(e.cleanup(),"mobile"==e.getProp("type")){var t=e.getProp("$"),o=Math.max(document.documentElement.clientWidth,window.innerWidth||0),i=e.getProp("dw"),n=Math.round(o/i*100)/100;t(window).off("scroll.omMobile"),t("#optin-monster-viewport").length>0&&(t("#optin-monster-viewport").attr("content","width=device-width, initial-scale="+n+", minimum-scale="+n+", maximum-scale="+n),t("html, body").css("overflow",""),setTimeout((function(){t("#optin-monster-viewport").attr("content","width=device-width, maximum-scale=10.0")}),1e3)),t("#om-"+e.getProp("optin")+"-overlay").hide()}e.trigger("OptinMonsterOnClose")}},this.cleanup=function(e){var t=this,o=t.getProp("$"),i=t.getProp("id"),n=e||!1;OptinMonsterOptins[t.getProp("optin_js")].visible=!1,"mobile"==t.getProp("type")&&o(window).off("scroll.omMobile"),0!==t.getProp("cookie")&&(t.createCookie("om-"+i,!0,t.getProp("cookie")),t.getProp("clones")&&o.each(t.getProp("clones"),(function(e,o){0!==o.length&&t.createCookie("om-"+o,!0,t.getProp("cookie"))})),t.getProp("global_cookie")&&n&&t.createCookie("om-global-cookie"),n&&"slide"==t.getProp("type")&&t.createCookie("om-"+i+"-closed",!0,t.getProp("cookie")))},this.track=function(e){if(!this.getProp("tracked")&&!this.getProp("preview")){var t=this,o=(t.getProp("$"),t.getProp("optin"),t.getProp("ga_uaid")),i=(e=e||!1,{optin_monster_ajax_action:"track_optinmonster",optin_id:t.getProp("id"),post_id:t.getProp("post_id"),referrer:window.location.href,user_agent:navigator.userAgent,previous:document.referer});o?t.trackGoogleAnalytics(o,e):t.request(i),t.trigger("OptinMonsterTracked")}},this.trackGoogleAnalytics=function(e,t){var o=this,i=t?"conversion":"impression",n=o.getProp("campaign")||o.getProp("optin");ga("create",e,"auto",{name:"omTracker"}),ga("omTracker.set",{appName:o.getProp("app_name"),appId:o.getProp("app_id"),appVersion:o.getProp("app_version")}),ga("omTracker.send","event",n,i,o.getProp("id").toString())},this.optin=function(e,t){var o=this,i=o.getProp("$");o.getProp("optin"),t=t||!1;if(!o.getProp("preview")){o.loading(e);var n={optin_monster_ajax_action:"do_optinmonster",optin_id:o.getProp("id"),post_id:o.getProp("post_id"),referrer:window.location.href,user_agent:navigator.userAgent,previous:document.referrer,email:i("#om-"+o.getProp("type")+"-"+o.getProp("theme")+"-optin-email").val(),name:i("#om-"+o.getProp("type")+"-"+o.getProp("theme")+"-optin-name").val()},r=!1,s=!1;if(t)r=o.optinCustomSuccess(o,e);else{if(s=o.verify())return o.error(e,s);r=o.optinSuccess(o,e),s=o.optinError(o,e)}o.request(n,r,s)}},this.error=function(e,t){var o=this,i=o.getProp("$")(e);o.getProp("optin");o.removeLoading(e),i.parent().append('<p class="optin-monster-error" style="font-family:Georgia;font-size:13px;font-style:italic;color:#ff0000;margin:10px 0;text-align:center;line-height:18px;">'+t+"</p>"),o.trigger("OptinMonsterOnError")},this.loading=function(e){var t=this,o=t.getProp("$"),i=o(e),n=i.position(),r=i.outerWidth(),s=i.outerHeight();o("#om-"+t.getProp("optin")).find(".optin-monster-error").remove(),i.after('<span class="optin-monster-loading"></span>').css("opacity",".25"),o("#om-"+t.getProp("optin")).find(".optin-monster-loading").css({width:r,height:s,top:n.top,left:n.left,background:"url("+t.getProp("preloader")+") no-repeat 50% 50%",position:"absolute",zIndex:84736365452,backgroundSize:"20px"})},this.verify=function(){var e=this,t=e.getProp("$"),o=e.getProp("optin"),i=e.getProp("type"),n=e.getProp("theme"),r=t("#om-"+o+" #om-"+i+"-"+n+"-optin-name"),s=t("#om-"+o+" #om-"+i+"-"+n+"-optin-email"),p=!1;return r&&r.length>0&&0==r.val().length&&(p=e.getProp("name_error")||e.getProp("error")),s&&s.length>0&&(0!=s.val().length&&e.isValidEmail(s.val())||(p=e.getProp("email_error")||e.getProp("error"))),p},this.removeLoading=function(e){var t=this.getProp("$");t(e).css("opacity","1"),t("#om-"+this.getProp("optin")).find(".optin-monster-loading").remove()},this.optinSuccess=function(e,t){var o=e.getProp("$");e.getProp("optin"),e.getProp("type"),e.getProp("theme");return function(i){return!i||o.isEmptyObject(i)?e.error(t,e.getProp("error")):i&&i.error?e.error(t,i.error):(e.cleanup(!0),e.trigger("OptinMonsterOptinSuccess"),e.getProp("ga_id")&&e.trackGoogleAnalytics(e.getProp("ga_uaid"),!0),void(e.getProp("redirect")?(e.trigger("OptinMonsterOnRedirect"),window.location.href=e.getProp("redirect")):(e.getProp("success")?e.successMessage(t):(e.close(!0),e.removeLoading(t)),e.trigger("OptinMonsterOptinSuccessClose"))))}},this.successMessage=function(e){var t=this,o=t.getProp("$"),i=t.getProp("optin"),n=t.getProp("type"),r=t.getProp("theme"),s=o("#om-"+n+"-"+r+"-optin"),p=s.position(),a=s.outerWidth(),l=s.outerHeight(),c="sidebar"==n||"post"==n?7271832:0xe8da821f56;o("#om-"+i).find(".om-close").remove();var u="sidebar"==n||"post"==n?'<div class="optin-monster-success-overlay" style="display:none;"></div>':'<div class="optin-monster-success-overlay" style="display:none;"><a href="#" class="om-close om-success-close">&times;</a></div>',d=t.getProp("success");s.after(u),o("#om-"+i).find(".optin-monster-success-overlay").css({width:a,height:l,top:p.top,left:p.left,background:"#fff",position:"absolute",zIndex:c,padding:"0px 20px",opacity:0,display:"block"}).append('<div class="optin-monster-success-message">'+d+"</div>"),o("#om-"+i).find(".optin-monster-success-message").css({"margin-top":(l-o("#om-"+i).find(".optin-monster-success-message").height())/2}),o("#om-"+i).find(".optin-monster-success-overlay").fadeTo(300,1,(function(){t.removeLoading(e),t.socialServices()})),o(window).resize((function(){o(".optin-monster-success-overlay").css({width:o("#om-"+n+"-"+r+"-optin").outerWidth(),height:o("#om-"+n+"-"+r+"-optin").outerHeight(),top:o("#om-"+n+"-"+r+"-optin").position().top,left:o("#om-"+n+"-"+r+"-optin").position().left}),o(".optin-monster-success-message").css({"margin-top":(o("#om-"+n+"-"+r+"-optin").outerHeight()-o(".optin-monster-success-message").height())/2})}))},this.optinCustomSuccess=function(e,t){var o=e.getProp("$");return function(i){e.trigger("OptinMonsterOptinSuccess"),e.getProp("ga_id")&&e.trackGoogleAnalytics(e.getProp("ga_uaid"),!0),o(t).submit()}},this.optinError=function(e,t){e.getProp("$"),e.getProp("optin"),e.getProp("type"),e.getProp("theme");return function(o,i,n){return e.trigger("OptinMonsterOptinError"),e.error(t,e.getProp("ajax_error")+n)}},this.request=function(e,t,o){var i=this.getProp("$"),n={url:this.getProp("ajax"),data:e,cache:!1,type:"POST",dataType:"json",timeout:3e4};o=o||!1;(t=t||!1)&&(n.success=t),o&&(n.error=o),i.ajax(n)},this.appendHolder=function(){var e=this.getProp("$");type=this.getProp("type"),styles=!1,"lightbox"==type||"canvas"==type?styles={position:"fixed","z-index":"7371832",top:"0",left:"0",zoom:"1",width:"100%",height:"100%",margin:"0",padding:"0"}:"footer"==type&&(styles={position:"fixed","z-index":"7371832",bottom:"0",left:"0",zoom:"1",width:"100%",margin:"0",padding:"0"}),styles&&e("#om-"+this.getProp("optin")).css(styles).appendTo("body"),"mobile"==type&&e(".om-theme-"+this.getProp("theme")).css("top",e(document).scrollTop()),this.trigger("OptinMonsterAppendHolder")},this.prepareCustomOptin=function(){var e=this,t=e.getProp("optin"),o=e.getProp("$"),i=o("#om-"+t+" input[data-om-render=label]");i.length>0&&(e.loadElementChange(),i.each((function(){o.fn.changeElementType&&o(this).changeElementType("label")})),o("#om-"+t+" label[data-om-render=label]").each((function(){o(this).text(o(this).attr("value")).removeAttr("value type")}))),e.trigger("OptinMonsterCustomDone")},this.poll=(e=0,function(t,o){clearInterval(e),e=setInterval(t,o)}),this.isValidEmail=function(e){return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(e)},this.createCookie=function(e,t,o){if(!this.getProp("test")){if(o){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);var n="; expires="+i.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}},this.getCookie=function(e){for(var t=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var n=o[i];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null},this.removeCookie=function(e){this.createCookie(e,"",-1)},this.log=function(e){"object"==typeof console&&console.log(e)},this.trigger=function(e){var t=this;t.public.ejQuery(document).trigger(e,t.public,t)},this.loadElementChange=function(){var e;(e=this.getProp("$")).fn.changeElementType=function(t){var o={};e.each(this[0].attributes,(function(e,t){o[t.nodeName]=t.nodeValue})),this.replaceWith((function(){return e("<"+t+"/>",o).append(e(this).contents())}))}},this.cookiesEnabled=function(){var e=!!navigator.cookieEnabled;return void 0!==navigator.cookieEnabled||e||(document.cookie="testcookie",e=-1!=document.cookie.indexOf("testcookie")),e},this.getProp=function(e){return!!this.public.hasOwnProperty(e)&&this.public[e]},this.setProp=function(e,t){this.public[e]=t},this.isMobile=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},this.hasVisiblePopup=function(){var e=[],t=this.getProp("$"),o=0;for(var i in OptinMonsterOptins)OptinMonsterOptins[i].hasOwnProperty("visible")&&!0===OptinMonsterOptins[i].visible&&(e[o]=OptinMonsterOptins[i].type,o++);return t.inArray("lightbox",e)>-1||t.inArray("canvas",e)>-1||!1},this.loadPlaceholder=function(){var e=this.getProp("$");!function(e,t,o){function i(e,t){var i=this,n=o(i);if(i.value==n.attr("placeholder")&&n.hasClass("placeholder"))if(n.data("placeholder-password")){if(n=n.hide().next().show().attr("id",n.removeAttr("id").data("placeholder-id")),!0===e)return n[0].value=t;n.focus()}else i.value="",n.removeClass("placeholder"),i==r()&&i.select()}function n(){var e,t=this,n=o(t),r=this.id;if(""==t.value){if("password"==t.type){if(!n.data("placeholder-textinput")){try{e=n.clone().attr({type:"text"})}catch(t){e=o("<input>").attr(o.extend(function(e){var t={},i=/^jQuery\d+$/;return o.each(e.attributes,(function(e,o){o.specified&&!i.test(o.name)&&(t[o.name]=o.value)})),t}(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":n,"placeholder-id":r}).bind("focus.placeholder",i),n.data({"placeholder-textinput":e,"placeholder-id":r}).before(e)}n=n.removeAttr("id").hide().prev().attr("id",r).show()}n.addClass("placeholder"),n[0].value=n.attr("placeholder")}else n.removeClass("placeholder")}function r(){try{return t.activeElement}catch(e){}}var s,p,a="[object OperaMini]"==Object.prototype.toString.call(e.operamini),l="placeholder"in t.createElement("input")&&!a,c="placeholder"in t.createElement("textarea")&&!a,u=o.fn,d=o.valHooks,m=o.propHooks;l&&c?(p=u.placeholder=function(){return this}).input=p.textarea=!0:((p=u.placeholder=function(){return this.filter((l?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":n}).data("placeholder-enabled",!0).trigger("blur.placeholder"),this}).input=l,p.textarea=c,s={get:function(e){var t=o(e),i=t.data("placeholder-password");return i?i[0].value:t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var s=o(e),p=s.data("placeholder-password");return p?p[0].value=t:s.data("placeholder-enabled")?(""==t?(e.value=t,e!=r()&&n.call(e)):s.hasClass("placeholder")&&i.call(e,!0,t)||(e.value=t),s):e.value=t}},l||(d.input=s,m.value=s),c||(d.textarea=s,m.value=s),o((function(){o(t).delegate("form","submit.placeholder",(function(){var e=o(".placeholder",this).each(i);setTimeout((function(){e.each(n)}),10)}))})),o(e).bind("beforeunload.placeholder",(function(){o(".placeholder").each((function(){this.value=""}))})))}(this,document,e)},this.doPlaceholder=function(){var e=this,t=e.getProp("$"),o=t("#om-"+e.getProp("optin")+" input");o.length>0&&t.fn.placeholder&&o.each((function(){t(this).placeholder()})),e.trigger("OptinMonsterPlaceholderDone")},this.isIE=function(){return"undefined"!=typeof om_ie_browser},this.socialServices=function(){this.getProp("$");"undefined"!=typeof FB&&null!=FB&&FB.XFBML.parse(),"undefined"!=typeof twttr&&null!=twttr&&twttr.widgets.load(),this.trigger("OptinMonsterSocial")}}jQuery(document).ready((function(e){var t={};e(document).find(".manual-optin-trigger, .om-monster-link").each((function(o,i){var n=e(this).data("optin-slug"),r=n.replace("-","_");if(optin=e("#om-"+n),n&&!t.hasOwnProperty(r))if(0!==optin.length||void 0!==OptinMonsterOptins&&OptinMonsterOptins.hasOwnProperty(r))t[r]=window[r];else{var s=new OptinMonster;s.init({optin:n,optin_js:r,click:!0}),t[r]=s}})),e(document).on("click",".manual-optin-trigger, .om-monster-link",(function(o){o.preventDefault();var i=e(this).data("optin-slug"),n=i.replace("-","_");optin=e("#om-"+i),i&&t.hasOwnProperty(n)&&t[n].open(!0)}))}));