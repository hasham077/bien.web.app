'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "c6bda888fa94cbb5b68cab3daf2cfee0",
"assets/AssetManifest.bin.json": "d015df1183a13f96a62f74ad6641b479",
"assets/AssetManifest.json": "83a961d17773db26115f718728ba51f5",
"assets/assets/images/anxietyImg.png": "1dae85be9e186423f8fac62bbd8c40b6",
"assets/assets/images/appLogoImg.png": "bc69b1f603287f7310629923f6acead3",
"assets/assets/images/creativityImg.png": "aeabd0b13406d34b290320a8c41c13c7",
"assets/assets/images/focusImg.png": "ced236b236ead29181879d2b6715c7e5",
"assets/assets/images/handImg.png": "06c1e97443a55d12e4c9c756d19f5ee4",
"assets/assets/images/mashroomImg.png": "dc08ce9f8e5d24eaf817a03dca769ac7",
"assets/assets/images/mDImg.JPG": "e9a21ae9f372b199f399663607efd758",
"assets/assets/images/othersImg.jpeg": "46825b3217010249fb6e2c8db14c4729",
"assets/assets/images/productivityImg.png": "e5f622b6450769c5d2891bfa343a3e76",
"assets/assets/images/psyImg.png": "916de443ff7bd93a941ffd8b764ae426",
"assets/assets/images/retreatImg.png": "eca11e67d4f48c3aa959e874474a9749",
"assets/assets/images/spiritualityImg.png": "029a0eb2963a178faaea55b81264127a",
"assets/assets/images/splashImg.png": "a04d35ce99ed5fc07699c05126feee94",
"assets/assets/images/thoughtsIng.png": "950a86648a271ee33324bf390b455c3b",
"assets/assets/svgs/aboutUsSvg.svg": "235b71517df3744fddac23f3849a1198",
"assets/assets/svgs/activeHomeSvg.svg": "31ee256ec0ded28c033d10aa239867aa",
"assets/assets/svgs/activeJournalingSvg.svg": "100a64fced9b7b27b156fa80b5eaf042",
"assets/assets/svgs/activeLibrarySvg.svg": "c29dbf38cae684678bf515c206c19a4d",
"assets/assets/svgs/activeProfile.svg": "54e120bd117d766a4ccca6735053998c",
"assets/assets/svgs/addSvg.svg": "b500e76d480fd9a72af84ed569468855",
"assets/assets/svgs/appleSvg.svg": "ed1110e6557f9f3c43a528f06cde2862",
"assets/assets/svgs/arrowDownSvg.svg": "72fe4554d5ad92884ce4be718d426e9b",
"assets/assets/svgs/arrowUpSvg.svg": "cc819f78b77ee8b5753fa764617d6d27",
"assets/assets/svgs/darkNotificationSvg.svg": "9ec106170fcd5248406a0d75c8d9bae9",
"assets/assets/svgs/doseSvg.svg": "b1d524d018711c814f5a9551020ac101",
"assets/assets/svgs/filterSvg.svg": "1aafe3743f767e17239eb0fd4f041933",
"assets/assets/svgs/googleSvg.svg": "965d68750255ee106c131d5b07ab1f17",
"assets/assets/svgs/greenCheckSvg.svg": "8cb1e0b313862ca1f2c977a411425b4d",
"assets/assets/svgs/handSvg.svg": "f0774225500c690ba73c8dabb8e3b8c0",
"assets/assets/svgs/inactiveHomeSvg.svg": "0157be147e282f06a0196364285c1fea",
"assets/assets/svgs/inactiveJournalingSvg.svg": "3cd859aa83d679a0c126523e3b461b23",
"assets/assets/svgs/inactiveLibrarySvg.svg": "b3d9e3af087c8be280c6b8d047bb3677",
"assets/assets/svgs/inactiveLocationSvg.svg": "4154bae7a808cc45ce62c6e87d5e0286",
"assets/assets/svgs/inactiveProfileSvg.svg": "8fadc45478bc607b55904f5d3de008f8",
"assets/assets/svgs/JournalSvg.svg": "0eb759c826e64d9966924d40818113ba",
"assets/assets/svgs/loadingSvg.svg": "b7f4ee56d3472bc4c0927e10683e81ec",
"assets/assets/svgs/loginSvg.svg": "7d0a8f188e6253eb4553b20ac0d026a1",
"assets/assets/svgs/medalSvg.svg": "da71664e1aeeb608b87f78b5572f9af5",
"assets/assets/svgs/mushroomSvg.svg": "9e57f06ba1015947bd78e30f97ba0ee7",
"assets/assets/svgs/notificationSvg.svg": "5bb5442c438d49697f415395664ce7de",
"assets/assets/svgs/profileSvg.svg": "c0c9c6936cb8d45e78a20897ce2d2403",
"assets/assets/svgs/searchSvg.svg": "83bc845f66eb46fd1e0f613b6a24a374",
"assets/assets/svgs/securitySvg.svg": "e66be7b264a4bdd3e8b4ad3ff6e3f2a8",
"assets/assets/svgs/settingSvg.svg": "34fd18a58a32c9acc5db2d26cb41f8be",
"assets/assets/svgs/shareSvg.svg": "6dab109dbb9a3569e38d0da9c02a9cda",
"assets/assets/svgs/starSvg.svg": "fde3b0ee3f4cd06c8783301c1cc1bb0e",
"assets/assets/svgs/supportSvg.svg": "3d4e4db516e4d835f9be9b90d506a767",
"assets/assets/svgs/targetSvg.svg": "940a1eb8865460c682b67c2daebe0ddd",
"assets/assets/svgs/termAndConditionSvg.svg": "8d6267da8dc42e726f31beb1e385ee2a",
"assets/FontManifest.json": "1db542a4dd591a5094a11e8e05cf78d0",
"assets/fonts/MaterialIcons-Regular.otf": "2d90ddc9466ae52853b38adad691a688",
"assets/fonts/Moderat-Black-Italic.ttf": "4e42e320ae296ba4f5c798647607fe9f",
"assets/fonts/Moderat-Black.ttf": "c409f9a1bbe831c1246d11724529e691",
"assets/fonts/Moderat-Bold-Italic.ttf": "ac233e573cda02d1ceb667e2bf2f2fe3",
"assets/fonts/Moderat-Bold.ttf": "a93e70c24563e9f6da0d3577c5f58c0a",
"assets/fonts/Moderat-Light-Italic.ttf": "6c51a64d6d25b0cca28e5e7ef5829544",
"assets/fonts/Moderat-Light.ttf": "c0ca390ecc52a24fea79984a2bbd9b95",
"assets/fonts/Moderat-Medium-Italic.ttf": "d0764ec41da7a33eb84d7035542c294e",
"assets/fonts/Moderat-Medium.ttf": "f656000e6fae1bcac3039796eff38ad7",
"assets/fonts/Moderat-Regular-Italic.ttf": "7ede1fab21bb7ff5c0c420fdd81aa124",
"assets/fonts/Moderat-Regular.ttf": "4f1155c801e2c95983eaf493893ae320",
"assets/fonts/Moderat-Thin-Italic.ttf": "43f9e1c5987e5982fd4d5653f4610e9c",
"assets/fonts/Moderat-Thin.ttf": "2c4b629504db8889149ca04655d391ab",
"assets/NOTICES": "200fb3bae8dd89ba00c313e64fa08fb2",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "360493d111a04129a1649a5df6166da7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/apple-touch-icon.png": "95e6814e25f803b15a8a668770028b52",
"icons/favicon.ico": "360493d111a04129a1649a5df6166da7",
"icons/icon-192-maskable.png": "ba2299f3f9e6c02d6353c3e66a101764",
"icons/icon-192.png": "ff8365b0780d2ac118bfed1901dfd92a",
"icons/icon-512-maskable.png": "bef5037e1803afe53ce2a6540af01c1f",
"icons/icon-512.png": "c2cb35be73e69b8f07efe78374131994",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "af4b8fbd124af9ff1d08514f50062225",
"/": "af4b8fbd124af9ff1d08514f50062225",
"main.dart.js": "45497ecb9bd892d4a468fa9c9ad0a3d8",
"manifest.json": "72c74b545fc0b8e2ef5e2a2dea69db04",
"splash/img/dark-1x.png": "9a68c78a8f4c0eeaf7f2de44a2e743ca",
"splash/img/dark-2x.png": "48c82b18bf0e304b93114b29874a2fe0",
"splash/img/dark-3x.png": "1e6dbf1db46ccd2437c4c5b005af9190",
"splash/img/dark-4x.png": "e6364e42726e81fa58823a898c9e333b",
"splash/img/light-1x.png": "9a68c78a8f4c0eeaf7f2de44a2e743ca",
"splash/img/light-2x.png": "48c82b18bf0e304b93114b29874a2fe0",
"splash/img/light-3x.png": "1e6dbf1db46ccd2437c4c5b005af9190",
"splash/img/light-4x.png": "e6364e42726e81fa58823a898c9e333b",
"version.json": "c0cb5d50bffeebcd2fbbb6dc784e56b2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
