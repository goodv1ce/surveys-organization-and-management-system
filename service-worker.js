/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "eb5ed065fd303e22f65c1fb1d21654c8"
  },
  {
    "url": "assets/css/0.styles.945319ec.css",
    "revision": "640d538740246d140de04193306f7086"
  },
  {
    "url": "assets/img/delete-user.13f1c161.jpg",
    "revision": "13f1c161b459544cf9d123321ca40500"
  },
  {
    "url": "assets/img/get-user-by-id.0db9c776.jpg",
    "revision": "0db9c776885b842fc743d0054f5993f8"
  },
  {
    "url": "assets/img/get-users.53155dae.jpg",
    "revision": "53155dae5c0389d46406a2397bde1097"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update-user.f7d51d1f.jpg",
    "revision": "f7d51d1fada70b20da2ca3e2c3d0f55f"
  },
  {
    "url": "assets/img/user-add.258da1fa.jpg",
    "revision": "258da1fa31b5dbc1e59ab80559dca983"
  },
  {
    "url": "assets/img/users-all.307beb4c.jpg",
    "revision": "307beb4c627b174780369803b4a49c5a"
  },
  {
    "url": "assets/js/10.6f6bcc39.js",
    "revision": "9ac0d0749038926469fde52439f0acd7"
  },
  {
    "url": "assets/js/11.de26da93.js",
    "revision": "22593cf3dcd61d5253c308c33ac6384d"
  },
  {
    "url": "assets/js/12.bdd2b4d8.js",
    "revision": "c806832b755f41a32ddd5b6b1c2f53ba"
  },
  {
    "url": "assets/js/13.6bfb6623.js",
    "revision": "30b5b460c8e64b2efb77c458593aad54"
  },
  {
    "url": "assets/js/14.ec949c51.js",
    "revision": "a4b3ce3e67af50c2e2ec1ae0fee71d4d"
  },
  {
    "url": "assets/js/15.47cd70be.js",
    "revision": "302264ea6c51ed5f248ec136fd9eb684"
  },
  {
    "url": "assets/js/16.7b817429.js",
    "revision": "e2424a8eaac0f35d4fdb9c56e4a83f5e"
  },
  {
    "url": "assets/js/17.9558cc9d.js",
    "revision": "0c9887b0f6290d1e834463a0b1357af6"
  },
  {
    "url": "assets/js/18.a3b63c8a.js",
    "revision": "a154bed7ec9cb95ddd017340a2d54e70"
  },
  {
    "url": "assets/js/19.e0376c07.js",
    "revision": "e0f81a9f3018947350b5c7f22b50c17a"
  },
  {
    "url": "assets/js/2.aa726724.js",
    "revision": "95f9ef8a57640d9595292bd05d15dfc2"
  },
  {
    "url": "assets/js/20.c79e5054.js",
    "revision": "9130e6d8e26cf5617d5e538a0abd5147"
  },
  {
    "url": "assets/js/21.61943f5a.js",
    "revision": "91722ef8a19dc932a4ed6c3781c771d8"
  },
  {
    "url": "assets/js/22.35df38aa.js",
    "revision": "d9db971b03e86f020d09b41e0e5d53b0"
  },
  {
    "url": "assets/js/23.6fb6c2d2.js",
    "revision": "3eb5c15fea9c7acee583bf19a23ed1dd"
  },
  {
    "url": "assets/js/24.88188c98.js",
    "revision": "1fc10e8cf0c090048897b2a3f9942fa2"
  },
  {
    "url": "assets/js/26.07ca314a.js",
    "revision": "dbe9bfb22925bf8417c91f89a661d53f"
  },
  {
    "url": "assets/js/3.3cf1b1f2.js",
    "revision": "8e1bde61d5d98bb5f9d86a5d09b5071e"
  },
  {
    "url": "assets/js/4.9feaefff.js",
    "revision": "72814c1c6eb30d05bff3243d06bd9ea9"
  },
  {
    "url": "assets/js/5.2c22c5b4.js",
    "revision": "743d6b6eaf3618f676eda5cf0a255179"
  },
  {
    "url": "assets/js/6.3b96e361.js",
    "revision": "a34d1f86db8fa839190b9265f4f5845e"
  },
  {
    "url": "assets/js/7.b627d7a0.js",
    "revision": "ba23a9ea0974ca3c215907d0c4f86587"
  },
  {
    "url": "assets/js/8.13fe6818.js",
    "revision": "db2a0421b912fbc136490dcc41226d0f"
  },
  {
    "url": "assets/js/9.27a33d6f.js",
    "revision": "ce56cc1b3b14400e66b9750711a2af33"
  },
  {
    "url": "assets/js/app.e891ccc9.js",
    "revision": "75071f8eecbfe19f92add0bb93e911fb"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dfd0a196b7fe319e79aa38d035ec0957"
  },
  {
    "url": "design/index.html",
    "revision": "bcd59d49420bbc699f16323913041f1a"
  },
  {
    "url": "index.html",
    "revision": "0eec4fed4f0ccd388eb0ac8bd335244c"
  },
  {
    "url": "intro/index.html",
    "revision": "6e5552515db6862bdb31d8b87cdcec1e"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ec0341c68a2a4d278a7b9b1252b29816"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "db9df15ef6d467d709a473b9b684a92a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "644e8da37696ccc994463db03ae107a5"
  },
  {
    "url": "software/index.html",
    "revision": "57cd69c550c15132c97c158ed36073f2"
  },
  {
    "url": "test/index.html",
    "revision": "d49ce0124047717bae68e5fbc4593965"
  },
  {
    "url": "use cases/index.html",
    "revision": "15920369243c237ebb1b37fd8da61bd1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
