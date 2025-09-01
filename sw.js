// Service Worker para Projeto Economia Sustentável
const CACHE_NAME = "economia-sustentavel-v1";
const urlsToCache = [
    "/projeto_02/",
    "/projeto_02/index.html",
    "/projeto_02/css/style.css",
    "/projeto_02/js/script.js",
    "/projeto_02/images/1.jpg",
    "/projeto_02/images/2.jpg",
    "/projeto_02/images/3.jpg",
    "/projeto_02/images/4.jpg",
    "/projeto_02/images/5.jpg",
    "/projeto_02/images/6.jpg",
    "/projeto_02/assets/favicon.svg",
    "/projeto_02/manifest.json",
];

// Instalação do Service Worker
self.addEventListener("install", function (event) {
    console.log("🌱 Service Worker: Instalando...");
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                console.log("🌱 Service Worker: Cache aberto");
                return cache.addAll(urlsToCache);
            })
            .catch(function (error) {
                console.error(
                    "🌱 Service Worker: Erro ao cachear recursos:",
                    error
                );
            })
    );
});

// Ativação do Service Worker
self.addEventListener("activate", function (event) {
    console.log("🌱 Service Worker: Ativando...");
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    // Remove caches antigos
                    if (cacheName !== CACHE_NAME) {
                        console.log(
                            "🌱 Service Worker: Removendo cache antigo:",
                            cacheName
                        );
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interceptação de requests
self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // Cache hit - retorna a resposta do cache
            if (response) {
                return response;
            }

            return fetch(event.request).then(function (response) {
                // Verifica se é uma resposta válida
                if (
                    !response ||
                    response.status !== 200 ||
                    response.type !== "basic"
                ) {
                    return response;
                }

                // Clona a resposta
                var responseToCache = response.clone();

                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});

// Sincronização em background
self.addEventListener("sync", function (event) {
    if (event.tag === "background-sync") {
        console.log("🌱 Service Worker: Sincronização em background");
    }
});

// Notificações push
self.addEventListener("push", function (event) {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: "/projeto_02/assets/favicon.svg",
            badge: "/projeto_02/assets/favicon.svg",
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: "2",
            },
            actions: [
                {
                    action: "explore",
                    title: "Ver Projeto",
                    icon: "/projeto_02/assets/favicon.svg",
                },
                {
                    action: "close",
                    title: "Fechar",
                    icon: "/projeto_02/assets/favicon.svg",
                },
            ],
        };

        event.waitUntil(
            self.registration.showNotification(
                "Projeto Economia Sustentável",
                options
            )
        );
    }
});

// Manipular cliques em notificações
self.addEventListener("notificationclick", function (event) {
    event.notification.close();

    if (event.action === "explore") {
        event.waitUntil(clients.openWindow("/projeto_02/"));
    }
});

// Log de versão
console.log("🌱 Service Worker: Economia Sustentável v1.0 carregado");
