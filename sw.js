const CACHE='agenda-mile-v17-fast-recovery';
const FILES=['./','./index.html','./manifest.json','./icon.svg','./avatar-mile.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const isAppHtml=url.pathname.endsWith('/')||url.pathname.endsWith('/index.html');
 if(isAppHtml){event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(event.request,{cache:'no-store'});if(response&&response.ok)await cache.put(event.request,response.clone());return response}catch(error){return (await cache.match(event.request))||(await cache.match('./index.html'))}})());return}
 event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;try{const response=await fetch(event.request);if(response&&response.ok){const cache=await caches.open(CACHE);cache.put(event.request,response.clone())}return response}catch(error){return caches.match('./')}})());
});
