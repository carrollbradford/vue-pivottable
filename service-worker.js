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
    "revision": "3f960ffdd7d6d05890d808e32429b23b"
  },
  {
    "url": "assets/css/0.styles.3b9b1f9c.css",
    "revision": "4012271f3674efc953193012d91578b1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11bc125f.js",
    "revision": "a39db493f56d568abab2223cc6035172"
  },
  {
    "url": "assets/js/11.702ab0c6.js",
    "revision": "94ab3dcbbd7c532c0209d80e85375bd3"
  },
  {
    "url": "assets/js/12.fead81de.js",
    "revision": "24460122d729a3b2a56a4c2bec1d7408"
  },
  {
    "url": "assets/js/13.1f6e8c85.js",
    "revision": "e1653c65089e5f17d3f59aabcc5b6c85"
  },
  {
    "url": "assets/js/14.89e9bd7f.js",
    "revision": "c833c0ac3d00430153e28822620f06a1"
  },
  {
    "url": "assets/js/15.61a8fb8b.js",
    "revision": "1feb3dbaf2c1bf559d238e98de477b6f"
  },
  {
    "url": "assets/js/16.e64fd66d.js",
    "revision": "4f3355df72765e2513a70e54506a13d5"
  },
  {
    "url": "assets/js/17.a683643b.js",
    "revision": "8fb3d260577357df048177b1d62e1795"
  },
  {
    "url": "assets/js/18.9325839d.js",
    "revision": "ffe7e077f9060aa1687141ae52c29276"
  },
  {
    "url": "assets/js/19.f9582b72.js",
    "revision": "162ca52ab79ad534b1ca73d8097d16e2"
  },
  {
    "url": "assets/js/2.3401e4ec.js",
    "revision": "a9ac7875b56dbd23e51bd224cffc242f"
  },
  {
    "url": "assets/js/20.44b4cf7d.js",
    "revision": "bdab7098d48cc1764ad30764dae5ca0a"
  },
  {
    "url": "assets/js/21.2003da3b.js",
    "revision": "e0a640108fd5f13cb0ba08240b9d465d"
  },
  {
    "url": "assets/js/22.5fc9ab95.js",
    "revision": "744545d2a5e17519153f9e3b62146d73"
  },
  {
    "url": "assets/js/23.ef7d42a5.js",
    "revision": "d52ba350089bd6c80751311b5c975491"
  },
  {
    "url": "assets/js/3.7fbcfaa7.js",
    "revision": "193c411481a5479f5ea32057790fc5e0"
  },
  {
    "url": "assets/js/4.79d5e87d.js",
    "revision": "033e1b7111b1dd80d18a779345549328"
  },
  {
    "url": "assets/js/5.39a48e9c.js",
    "revision": "83d8fae5bf2b6f03bede41f1797d22c4"
  },
  {
    "url": "assets/js/6.34a486fd.js",
    "revision": "11bb471334ddb22a792389b529c8f222"
  },
  {
    "url": "assets/js/7.5574352f.js",
    "revision": "7538a550cba92e7ce20dc85e121d8fb3"
  },
  {
    "url": "assets/js/8.939b4cff.js",
    "revision": "5fc8b6fbcf4273022ec37164deecf41e"
  },
  {
    "url": "assets/js/9.b1d23eff.js",
    "revision": "e1b46cb0da57df411d2734bddba76818"
  },
  {
    "url": "assets/js/app.4a523298.js",
    "revision": "e2ef826870787891215838768a7057be"
  },
  {
    "url": "google603171b62dec4aac.html",
    "revision": "31d70d981f06209ee337ed729ce7075d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "023b09f0bc1c7d24a6a8215210503eb3"
  },
  {
    "url": "guide/index.html",
    "revision": "0f72a83f193c5945d9411eb1da5a8369"
  },
  {
    "url": "guide/locale.html",
    "revision": "1bf442d33d4f276965625b97c7087dbf"
  },
  {
    "url": "guide/scoped-slot.html",
    "revision": "0e98b8305634e27a82fe892188b1648b"
  },
  {
    "url": "guide/slot.html",
    "revision": "562d2e698e165e77a9792bf7d9991f57"
  },
  {
    "url": "guide/utilities.html",
    "revision": "102871388a2902a44b8615a5b4b141ba"
  },
  {
    "url": "images/vue-pivottable-demo.gif",
    "revision": "dbf19b1e437a35f12467d5f38986f10d"
  },
  {
    "url": "index.html",
    "revision": "5d87c15dc6601ea85a781c2f2a3ea2f8"
  },
  {
    "url": "ko/guide/data.html",
    "revision": "679d84bee416cb3a20d6e10085600182"
  },
  {
    "url": "ko/guide/getting-started.html",
    "revision": "810da367ebd1730bdbf260147b501f15"
  },
  {
    "url": "ko/guide/index.html",
    "revision": "609ac010ebeb71f4b313d03b4cee105e"
  },
  {
    "url": "ko/guide/props.html",
    "revision": "164a5e9e2665b253219395fd63e6eaf3"
  },
  {
    "url": "ko/guide/style.html",
    "revision": "df2651cca7d8c68555fcd3b794102fc1"
  },
  {
    "url": "ko/index.html",
    "revision": "44cbd727c4849274a0f311c8c58e0d24"
  },
  {
    "url": "props/index.html",
    "revision": "a85c63b19895b1e486f7ca233cc11f24"
  },
  {
    "url": "styling/index.html",
    "revision": "7a7bb67e6e06d743cb1eaa696131e570"
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
