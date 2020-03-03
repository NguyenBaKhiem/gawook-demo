// if ((~window.navigator.userAgent.indexOf("MSIE")) ||
//   (~window.navigator.userAgent.indexOf("Trident/")) ||
//   (~window.navigator.userAgent.indexOf("Edge/"))) {
//   window.Promise = require("es6-promise").Promise;
//   require("es6-object-assign").polyfill();
// }

window._ = require("lodash");

window.axios = require("axios");
import AuthenticationUtils from "./common/AuthenticationUtils";

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

let token = window.Laravel.csrfToken;

if (token) {
  window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token;
  window.axios.defaults.headers.common["Authorization"] = "Bearer " + AuthenticationUtils.getAccessToken();
} else {
  console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token");
}


window.isAuthenticated = AuthenticationUtils.isAuthenticated();


// import Echo from "laravel-echo";

// window.Pusher = require("pusher-js");

// window.Echo = new Echo({
//     broadcaster: "pusher",
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

window.io = require("socket.io-client")

// window.Echo = new Echo({
//   broadcaster: "socket.io",
//   host: `${window.location.protocol}//${window.location.hostname}:6001`,
//     auth: {
//     headers: {
//       "Authorization": "Bearer " + AuthenticationUtils.getAccessToken(),
//     }
//   }
// })
