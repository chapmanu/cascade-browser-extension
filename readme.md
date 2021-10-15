## Unofficial Chapman University Cascade Extension


Opens the current "live" page in Cascade's edit view. 

The original idea was to use Cascade's REST API to allow other one-click actions, like "publish", as well as very basic BrowserSync-like refreshing features

https://chrome.google.com/webstore/detail/chapmanedu-cascade-extend/appbgpifmgemdjndjgpkakhjahiflefh?hl=en&authuser=0

 
 Alternatively, it can be used as a bookmarklet. 
 
 Steps: https://mreidsma.github.io/bookmarklets/installing.html
 
 1) Add any page as a bookmark
 2) Edit the bookmark address and replace the URL with following:
 
 `javascript:void%20function(e){var%20a=function(e){var%20a=e('meta[name=%22id%22]').attr(%22content%22);if(window.location.href.indexOf(%22dev%22)%3E-1)var%20n=%22https://dev-cascade.chapman.edu/%22;else%20var%20n=%22https://chapman.cascadecms.com/%22;console.log(t);var%20t=n+%22entity/open.act%3Fid=%22+a+%22%26type=page%22,o=window.open(t,%22_blank%22);o.focus()},n=e%26%26e.fn%26%26parseFloat(e.fn.jquery)%3E=1.7;if(n)a(e);else{var%20t=document.createElement(%22script%22);t.src=%22//ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,t.onload=t.onreadystatechange=function(){var%20e=this.readyState;e%26%26%22loaded%22!==e%26%26%22complete%22!==e||a(jQuery.noConflict())}}document.getElementsByTagName(%22head%22)[0].appendChild(t)}(window.jQuery);`
