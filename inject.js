// this is the code which will be injected into a given page...

(function () {
  var myJavaScript = `var page_id = document.querySelector('meta[name="id"]').content;

  var window_location = window.location;
  var asset_path = location.pathname;

  console.log('page id: ' + page_id);
  if (window_location.href.indexOf("dev") > -1) {
    var domain = "https://dev-cascade.chapman.edu/";
  } else {
    var domain = "https://cascade.chapman.edu/";
  }
  
  // console.log('asset_path: ' + domain + asset_path)
  fetch(domain + 'api/v1/read/page/' + page_id + '?apiKey=e3bc4818-3149-44ee-a2ee-fe5030336584').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data['asset']['page']['lastPublishedDate']);	
  console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
  

  var url = domain + "entity/open.act?id=" + page_id + "&type=page";
  var win = window.open(url, "_blank");
  win.focus();
  `;

  // Get API Key from extension popup input field
  document.addEventListener("DOMContentLoaded", documentEvents, false);

  chrome.storage.sync.get("api_key_value", function (obj) {
    console.log("Passed successfully: api_key " + obj.api_key_value);
    api_key_value = obj.api_key_value;
    document.getElementById("api_key").value = api_key_value;
  });

  function documentEvents() {
    document
      .getElementById("api_key_save")
      .addEventListener("click", function () {
        var api_key_value = document.getElementById("api_key").value;
        chrome.storage.sync.set({ api_key_value: api_key_value }, function () {
          console.log("Value is set to " + api_key_value);
          document.getElementById("api_key").value = api_key_value;
        });

        // Check that there's some code there.
        if (!api_key_value) {
          console.log("Heads up: No api key specified");
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({ api_key_value: api_key_value }, function () {
          // Notify that we saved.
          console.log("API Key saved");
        });
      });
    // you can add listeners for other objects ( like other buttons ) here

    document.getElementById("edit-page").addEventListener("click", function () {
      console.log("clicked edit");
      var scriptTag = document.createElement("script");
      scriptTag.innerHTML = myJavaScript;
      document.head.appendChild(scriptTag);
    });
  }
})();
