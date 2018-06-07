self.addEventListener('install',function(event){
	console.log('Service worker installed');
	event.waitUntil(
		caches.open('static')
		.then(function(cache){
		//adding one by one
			//cache.add('./');
			//cache.add('./icon2.png');
			//cache.add('./index.html');
		//adding all as array
			cache.addAll([
				'./',
				'./index.html',
				'./icon2.png'
			]);
		}))
});

self.addEventListener('activate',function(){
	console.log('Service worker activated');
});

self.addEventListener('fetch',function(event){
	event.respondWith(
		caches.match(event.request)
		.then(function(res){
			if(res) {
				return res;
			}
			else{
				return fetch(event.request);
			}
		})
		);
	});