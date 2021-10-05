## Unofficial Cascade Extension


Currently, just opens the current "live" page in Cascade's edit view. 

The original idea was to use Cascade's REST API to allow other one-click actions, like "publish", as well as very basic BrowserSync-like refreshing features

https://chrome.google.com/webstore/detail/chapmanedu-cascade-extend/appbgpifmgemdjndjgpkakhjahiflefh?hl=en&authuser=0

 
 Alternatively, drag the following into your bookmarks to use as a bookmarklet:
 
 `javascript:void function(e){var a=function(e){var a=e('meta[name="id"]').attr("content");if(window.location.href.indexOf("dev")>-1)var n="https://dev-cascade.chapman.edu/";else var n="https://cascade.chapman.edu/";console.log(t);var t=n+"entity/open.act%3Fid="+a+"%26type=page",o=window.open(t,"_blank");o.focus()},n=e%26%26e.fn%26%26parseFloat(e.fn.jquery)>=1.7;if(n)a(e);else{var t=document.createElement("script");t.src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js",t.onload=t.onreadystatechange=function(){var e=this.readyState;e%26%26"loaded"!==e%26%26"complete"!==e||a(jQuery.noConflict())}}document.getElementsByTagName("head")[0].appendChild(t)}(window.jQuery);`
