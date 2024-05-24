console.log("suck my balls");
self.addEventListener('activate', async (e) => {
    const subscription = await self.registration.pushManager.subscribe();
    console.log(subscription)
})