// هذا الملف يعمل في الخلفية لمراقبة حالة الشبكة
self.addEventListener('fetch', event => {
    // إذا كان الطلب هو الصفحة الرئيسية، وتحققنا من عدم وجود اتصال
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                // في حالة الفشل (انقطاع الإنترنت)، اعرض صفحة offline.html
                return caches.match('offline.html').then(response => {
                    return response || fetch('offline.html');
                });
            })
        );
    }
});
