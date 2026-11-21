// Offline reading. Every request goes to the network first, so updates always arrive when online;
// the last copy saved here is used only when the network fails. Account data (Supabase) is never cached.
const CACHE = "ascent-1";

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "icons/icon-192.png"])));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("supabase.co")) return;
  const keep = url.origin === location.origin || /(^|\.)(jsdelivr\.net|googleapis\.com|gstatic\.com)$/.test(url.hostname);
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && keep) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(async () => (await caches.match(req)) || (req.mode === "navigate" ? caches.match("./") : Response.error()))
  );
});
