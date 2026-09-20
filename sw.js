// åĞÇ Çáãáİ íÚãá İí ÇáÎáİíÉ áãÑÇŞÈÉ ÍÇáÉ ÇáÔÈßÉ
self.addEventListener('fetch', event => {
    // ÅĞÇ ßÇä ÇáØáÈ åæ ÇáÕİÍÉ ÇáÑÆíÓíÉ¡ æÊÍŞŞäÇ ãä ÚÏã æÌæÏ ÇÊÕÇá
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                // İí ÍÇáÉ ÇáİÔá (ÇäŞØÇÚ ÇáÅäÊÑäÊ)¡ ÇÚÑÖ ÕİÍÉ offline.html
                return caches.match('offline.html').then(response => {
                    return response || fetch('offline.html');
                });
            })
        );
    }
});