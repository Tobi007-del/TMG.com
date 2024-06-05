console.log('reached service-worker.js successfully');

self.addEventListener('install', () => {
  self.skipWaiting();
})

self.addEventListener('notificationclick', (event) => {
    console.log('click received');
    const sitePageUrl = new URL('TMG.com',self.location.origin).href;
    console.log(sitePageUrl);
    const promiseChain = clients.matchAll({
      type: 'window',
      includeUncontrolled: true,
    }).then((windowClients) => {
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


// Web-Push
// Public base64 to Unit


const urlBase64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

const saveSubscription = async (subscription) => {
  const response = await fetch('http://localhost:7000/save-subscription', {
      method: 'post',
      headers: { 'Content-type': "application/json" },
      body: JSON.stringify(subscription)
  })

  return response.json()
}

self.addEventListener("activate", async (e) => {
  const subscription = await self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array("BHhhIKiRh-QaGYkFZOD-uPOPTKd63KDN2HICwUiOqLBgJpQEvImPj74YTzbLrph5ctjonFz_izVCT0byTDAUbA0")
  })

  const response = await saveSubscription(subscription)
  console.log(response)
})


self.addEventListener("push", e => {
    const data = e.data.json();
    const pushTitle = data.title;
    const pushOptions = {
        body: `Dear Gardener, movies will be available soon!!!, ready your seatbelts and anticipate our official launch` , 
        icon: "/TMG.com/TMG.com_PROJECT/SPARE-PICS/movieicon-two.jpeg",
        badge: "/TMG.com/TMG.com_PROJECT/SPARE-PICS/icons8-clapperboard-100.png", 
        image: "/TMG.com/TMG.com_PROJECT/SPARE-PICS/tape-2.png",
        actions: [
            {
                action: 'open-site',
                title: 'Visit The Garden',
                type: 'button',
                icon: '/TMG.com/THE_MOVIE_INITIATIVE_PROJECT/SPARE-PICS/icons8-clapperboard-100.png'
            }
        ],
        tag: 'push',
        renotify: true,
    };
    self.registration.showNotification(pushTitle, pushOptions)
})

// Public Key:
//BHhhIKiRh-QaGYkFZOD-uPOPTKd63KDN2HICwUiOqLBgJpQEvImPj74YTzbLrph5ctjonFz_izVCT0byTDAUbA0

// Private Key:
// kojLB4gU0uQK0051CyBLTDio4jxKiS8rc74gXT34Uzo