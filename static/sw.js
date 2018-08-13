importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-news",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.933cd0ebb087aaab2fdc.js",
    "revision": "2c8505cc42b79b625aeab68586ae8a0e"
  },
  {
    "url": "/_nuxt/layouts_default.a37e657957e221764466.js",
    "revision": "93445244e7c9eb9fb7ee720953a2efc8"
  },
  {
    "url": "/_nuxt/manifest.9d25f0c1ff07d1958175.js",
    "revision": "6c6d5aa79dc3a4a2294b3c651248866b"
  },
  {
    "url": "/_nuxt/pages_index.0f7c9d38a1a13d81694b.js",
    "revision": "6fc666d82b5aa4fa72e674863f4cc3ec"
  },
  {
    "url": "/_nuxt/vendor.913ef8abf7898de6ba6f.js",
    "revision": "a848739c264c616e490d6ce9123cc8dd"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

