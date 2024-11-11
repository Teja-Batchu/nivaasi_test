'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "83d59d198e06d71d717e1566b6e10c37",
"version.json": "fc2b846752617a2bfbf55ca3db306a3b",
"index.html": "73903091717b8eaa21bb5653335f0f36",
"/": "73903091717b8eaa21bb5653335f0f36",
"main.dart.js": "f28f28d9b1bbe5dcfac05e8e72dbb154",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "9f2e07202304272c1e0bebb19b7f97ac",
"assets/images/app_store_icon.png": "b2a9e1f3f62b89af24e554da48edc681",
"assets/images/background4.jpg": "49b5e53b6ffedca8ffde76c60d7d7400",
"assets/images/image_three.png": "260680758689d392590ee531a726b8a5",
"assets/images/background2.jpg": "c973b732d8f05c76c6aa68ed1cdd8769",
"assets/images/contact_call.png": "7e01175c1b2c408ec235a9a0f7970743",
"assets/images/background3.png": "f6e0e608c4520dd112d007dcf9d7c561",
"assets/images/background_two.jpg": "c973b732d8f05c76c6aa68ed1cdd8769",
"assets/images/image_one.png": "014f251c362bd7af5a7d2842619a841d",
"assets/images/pintrest.png": "8869205697ca053fb2d7aaea00fb93ed",
"assets/images/background_blue.jpg": "ab4d5d4a43df7989c6b14707d3d04151",
"assets/images/play_store_icon.png": "e0a9171e078ca513073bbf6b7fe36b2a",
"assets/images/background_four.jpg": "49b5e53b6ffedca8ffde76c60d7d7400",
"assets/images/loader.gif": "a85a367c3f75448e5b45539b05477aff",
"assets/images/dash_board.png": "f66d1521088e808d2bbe3045af424aca",
"assets/images/image_1.png": "014f251c362bd7af5a7d2842619a841d",
"assets/images/pg.png": "6661beb2682f6c2081d0b9234c299bfc",
"assets/images/background_three.png": "f6e0e608c4520dd112d007dcf9d7c561",
"assets/images/nivaasi_logo.png": "09942b2c95a9326774cbde4c4626e19b",
"assets/images/twitter.png": "3b3901c8cc91a951887b85ed9c715fc2",
"assets/images/linkedin.png": "8229b62886e5eeb27a0bad3aa244573e",
"assets/images/building_icon.png": "c250476ee30b9d45a7128a489f9e64e5",
"assets/images/contact_mail.png": "2762b542e7142884d82383589ed7a7b5",
"assets/images/co_living.png": "69ae8332fff483afded33428685b57a5",
"assets/images/youtube.png": "0c2ee77de2dce597b4f97fac96dc6ea7",
"assets/images/hostel.png": "b088aa3ddc8dd4a68a62306fb6c61cb7",
"assets/images/image4.png": "79d05afe6d28a11e039c486c5e4bc14d",
"assets/images/contact_location.png": "7806f8f05b15e765236fa721469bec0f",
"assets/images/facebook.png": "9cdca0d0241577931070bda904090c99",
"assets/images/download_image.png": "6ec0e3e38e79a0e7e5496187d1fac45a",
"assets/images/image_four.png": "79d05afe6d28a11e039c486c5e4bc14d",
"assets/images/nivaasi_logo_blue.png": "b1a3ed62df0ec01b52ff54ae95293c18",
"assets/images/image3.png": "260680758689d392590ee531a726b8a5",
"assets/AssetManifest.json": "4834fde2cd2fc68622466b763687ab39",
"assets/NOTICES": "186be60dec8f2463658de3216a568ab0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "b629310a276c8799682a36af04754b2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d868d36c44ce7d90f0220be40d8b1d78",
"assets/fonts/MaterialIcons-Regular.otf": "a5b3d91e896a728eaac4d8216036c99e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
