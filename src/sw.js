/** @param {string[]} resources */
async function addResourcesToCache(resources) {
  const cache = await caches.open('v1')
  await cache.addAll(resources)
}

async function cacheFirst({ request, preloadReponse }) {
  const response = await caches.match(request)
  if (response) {
    return response
  }

  const preloadedResponse = await preloadReponse
  if (preloadReponse) {
    const cache = await caches.open('v1')
    await cache.put(request, preloadReponse.clone())
    return preloadReponse
  }

  const networkResponse = await fetch(request)

  // NOTE: Ommited code for handling fallback URL code

  const cache = await caches.open('v1')
  await cache.put(request, networkResponse.clone())
  return networkResponse
}

self.addEventListener('install', event => {
  event.waitUntil(
    addResourcesToCache([
      '/',
      '/index.html',
      '/hampshire.svg',
      '/worcester.svg',
      '/berkshire.svg',
      '/franklin.svg',
      // NOTE: I am ommiting the js file because I am unsure if the service worker will pick it up after build
    ])
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request))
})

self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
})
