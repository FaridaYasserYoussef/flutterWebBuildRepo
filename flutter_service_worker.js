'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3309993353628214261768845877db91",
".git/config": "c5eafb68265c9e0d887789cfcb560d58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4296d88adcafcc6e0296dda9c08b8933",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4368345090e52d7a1dfb429ae2645771",
".git/logs/refs/heads/master": "4ffebfb049f30f8a77fda03f193f3177",
".git/logs/refs/remotes/origin/master": "7ffd638addbe6b7c7c68ed8d8c7f5c6b",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/de4dfb9a43dad188fbe110dc1d21f2b6684393": "4c0e2ff0611630ffcc4a9fb04e1cf595",
".git/objects/06/5fb58ec7dbb66ec3ac994f76035bf26813df8a": "5fef3204c17d67d885f7e60d1f66913e",
".git/objects/09/3dcaca35cc71115645425a602f55193435d2bb": "dadd67b98944ea1f4fcf20a357446006",
".git/objects/09/be22279cd3486a18f94c212c3165c1011b7a60": "01e78ac8eecf1ef349475577f935ebe0",
".git/objects/0b/c0b9870f0f68a86870d4f9f95755dfcc2c3547": "84a21b1bc98c3801d42a8e5792bc08ba",
".git/objects/0d/4967f629ea6f42b9dcbc87b07349afdee44c12": "b5139570949315f2db58b1ea4652db61",
".git/objects/13/227fb46182e7a310432724882db819c854ccdc": "c9d78cd8c2bceec3c5836e6df3e47951",
".git/objects/13/bd85f1d0049671e7490f064603b60c843d7356": "571de8faf91d5df26f595ef2774fac65",
".git/objects/14/6aef28dc756f68c28b38dec42f042345fd0e5c": "8edd281ef1e1a52abb9ef5f1f58a00de",
".git/objects/1a/19f909178ce622021bfe0eb20c16e1f94e07fd": "cd71ae9c603c5df2e213433aeea4c123",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/07b41354b889000e5fb2ee89df2e758f56cc3c": "c5fd29032b37e914d749f38785c3bd7c",
".git/objects/25/563a53ed93cf030e58aa2e8d054f3b7e54cbf9": "bbf6c4e3fa4c082035a47f8b1e6d9538",
".git/objects/2b/c5e954bbf51795e8984bb15f0ac3d716ce00ba": "ca30a1e4248d54aaf3b66843b87406ce",
".git/objects/2c/a19e16be80e855c699dd73b7d3c5183aa614bb": "53c75e43ae804ecada48488067f158a4",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/33/c3913a6fb309beeaef6f473218a56657f27017": "15cf7a58c2169657efb187dffd668400",
".git/objects/34/cff4d372107104409ddb36d158a181380c74a6": "ff1e9f25bd68f74f9d3a92ba8b60ba7f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/1f9b64f70825fcb906c44963f66d0afaf67342": "fd6cff73ea42819b344d91251f6a8d7d",
".git/objects/3d/b1288ae0a875ab3c4c706540af781ac91d7cbe": "4f5ded255f1a567136e7fabd97c8632f",
".git/objects/46/100ac20972d448f6c90a4d50287d048231f35f": "a354ff5557b361990de03dce399e007d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/697e0557d98e29535f74db1d16c46bc7bb5df9": "7e0e0ee5e2a096e9d78e0eb5e1fd4e8b",
".git/objects/4a/35953f31d46cf74af49593f5e3319ceb9b106c": "b29e39504a96193542f1df4d557c53e9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/50/152648d1fcdb8eff249e6632ff4535e3adb732": "83f9e1ac4e595fb414ac945c5fd66ed1",
".git/objects/51/421f3659b8eabdaed622e6c0fca1157ac8cbe1": "1be71a2a29afedebaf086a9d1c94b4d7",
".git/objects/59/5e6b5c1b08881afc08a86ce6e5e97e779acc86": "967359d1236bdfba4f8f300ce633869c",
".git/objects/59/72aefb39d3d923753de424dab8677462bd9775": "097bf0782481d1dd3a67157ca8e51c8d",
".git/objects/60/f05d73f9cad7050eed9fdb25239786fc3ef94a": "519056e65cb7d2a79be225050efc629e",
".git/objects/64/ad2744e3ee4a58ea044f22a6425747d5efdede": "d9f62d818ee8450a3f319c4825014925",
".git/objects/68/f7aede013d2b820bfe77c3c150e607f01a5acf": "28071e365bb5fd7155f8fac8c4f554ea",
".git/objects/7e/bbc84a0c10960db883b32ed27844a6aa59a31e": "8c642bb0f747a00a21baf8bc6307bd2e",
".git/objects/82/fcf77fc2d6c4e4f88929bf4567a9fcbd285b8a": "d9b36c9c79cb16ed6205cd2e1dabfab9",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/587f4736278398cd9844e72dd004f353c4f850": "d8e77577bbdd9fe98dd899105bc35936",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/6b8779aaa2010aca08039033c8208d43b96675": "44bf9ae5b9d83a67045e565d85cd5e3b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/99/771e922ab490bd8a61c1362bfe98d8a8a515b2": "7bedfb6d678c951e189e348ad6c201ce",
".git/objects/a0/666fe4d8454574b214cc93cc5b975865c6a3b2": "fbd33fc5e3ffb36fff3ad3c4645abfb4",
".git/objects/a0/c800f4499fc75eedc7f9b8d08c8c7bee76c208": "002f3aaf27fc94842efdc928f434334f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/9417a370b286d6039f624e0d49da3d78bb3d9a": "407362b217abc405950f79488bf29d0a",
".git/objects/ae/445d211c9ea27a0f65fb934776f17fe55d3a98": "d430abe73f3ae74457e26a78f47cae4c",
".git/objects/af/5ba4b9ff9c8fa3f1b4dacb01cd83820dd10e48": "70e9d9ffb1aa3dc7e8eb1525dbeebf65",
".git/objects/b7/03cdd7ba5dbb39e0121646a6f6c8b44df5eb34": "a43d3107bf7f7ebecab8cdb893b1e1b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/d99e4a664a43e9a0c97ba9fab0f27e1ea208ba": "3575eddc481a4eb7a6e133ebc42f0cc2",
".git/objects/c5/276400805eb60a3f928b283ef811b318a5ae75": "03590ea5f984fe302914c32bd96cce3d",
".git/objects/c5/3c3d3f821065c5b7bb9ff716eb1151acc452cd": "394e0b0d179103e0414cd13d760c9641",
".git/objects/c9/3bf67d6d863f3d7cd6ebb63cb7f9181b228fde": "3ec9829b1324e6eee8de4c0a23bd4205",
".git/objects/d1/0fa3558b8895fbcb827bc8c54ac2aec02e29eb": "ab8875a1a78e880ddc29a987ecaf4df9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/e07b61458bcdd8d30364a71d0df4421b482879": "cdbca81365e65a94e9baeec654041cf8",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/09d135448d5161436f30ec2195c28f738d62cc": "44fa71023f97207e9544381cba71a5f7",
".git/objects/dc/2b757b7f09b56ff75cd2051fd7f6be9ed45f96": "ea78a0db854ae6ca6a1eeca602bead0f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ea/169a69beb2ef77b726962c1f53850b25f63372": "626aebe2569ef029274e7c484c2a535a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/d710f2ad54fef77473a2a44e0db91ff994c240": "43942d12d8efb1561ad9870d3190403b",
".git/objects/f5/47e4dffc148331c0e1d12927575e4b1ce256d1": "4e3d46989b26f80fec0ad12630b5ed45",
".git/objects/f7/86d76258a2a0e274d20532b0c7b40496e48857": "55625412901d4ba24d3db35a2dcdf6bb",
".git/objects/fc/c8601457f09e053417d28f9ae082cb132d8472": "7839671d39506cef7684ef4df41dfbd4",
".git/objects/fc/dc25afd208b13dd8bfb3696a0423455c631a86": "838a54cfa4c54d9fbb627368f176138a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/eebb39ed9474efb9ebc9149a7fcd9aafd59676": "9357f25d174b2b520d02790a3daa749f",
".git/refs/heads/master": "c9796124349ab5cc0f4213fdda5f930a",
".git/refs/remotes/origin/master": "c9796124349ab5cc0f4213fdda5f930a",
"assets/AssetManifest.bin": "1fd09e911222b6988014b68640d86062",
"assets/AssetManifest.json": "3123ed8fc9cb5fc91ada8cd9e16eb4b3",
"assets/assets/images/ai_search.png": "308daabc799cca1c294d7c9f1a3f625b",
"assets/assets/images/all_books_search.png": "a7f5811e439147dbb28d6d41278703fb",
"assets/assets/images/artificial-intelligence.png": "2915f534974b3e3866846260909256d4",
"assets/assets/images/book-flipping-pages.gif": "ae5666bebd2342c7f3d30aaf471035bf",
"assets/assets/images/books_search.png": "41fca97891f113580bed571808ace1aa",
"assets/assets/images/book_search.png": "76c234dc101e4a9a3e0508c98c2a8233",
"assets/assets/images/carouselitem.jpg": "7a0c7c680b822ec923656e760048e50f",
"assets/assets/images/homtest.png": "814573942f352fc03077d47a1c38bbd0",
"assets/assets/images/image155.png": "3acbe7d3369406b900a9b92290853f94",
"assets/assets/images/image75.png": "e8b3264badf5a5da07a9e2cd45a36e29",
"assets/assets/images/image87.png": "f5138a3ff5586359e1e2bcc07ddd8a4e",
"assets/assets/images/logo.png": "542e4274c047f57611902aaea74c36d2",
"assets/assets/images/mainPage.png": "d6a1a0f16835bb59c70414828468a254",
"assets/assets/images/pageBackground.jpg": "7b088d2a10c58708c935dbce0e8a9a6a",
"assets/assets/images/pageflip.gif": "b1efe3a8927d4a796826603cdf1d71f6",
"assets/assets/images/single_book_search.png": "3dd742d37739fd47ab0be91d530d6a5e",
"assets/assets/images/time_search.png": "26d4f2e269db8f2cd044be4edd98e582",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b260f185429888c2bbea65abf7e859eb",
"assets/NOTICES": "6b82240c77645f8cfc450d7d891912ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f9cfeb7bdccaa4618edff9c0f597be1",
"/": "3f9cfeb7bdccaa4618edff9c0f597be1",
"main.dart.js": "6a26740f237845258f088b184a9e28a0",
"manifest.json": "2965c7f231121ec869926b87e30868db",
"version.json": "21eb1578cb9074eb598ad4c78deec032"};
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
