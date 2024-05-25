console.log('reached service-worker.js successfully');

self.addEventListener('notificationclick', (event) => {
    console.log('click received');
    const sitePageUrl = new URL('THE_MOVIE_INITIATIVE',self.location.origin).href;
    console.log(sitePageUrl);
    const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      let matchingClient = null;
  
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        if (String(windowClient.url) === sitePageUrl) {
          matchingClient = windowClient;
          break;
        }
      }
  
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return clients.openWindow(sitePageUrl);
      }
    });
  
  event.waitUntil(promiseChain);
})

// self.addEventListener('activate', async (e) => {
//     const subscription = await self.registration.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: urlBase64ToUnit8Array(),
//     });
//     console.log(subscription)
// })


// Public Key:
// BHhhIKiRh-QaGYkFZOD-uPOPTKd63KDN2HICwUiOqLBgJpQEvImPj74YTzbLrph5ctjonFz_izVCT0byTDAUbA0

// Private Key:
// kojLB4gU0uQK0051CyBLTDio4jxKiS8rc74gXT34Uzo