const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
 const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});


// butInstall.addEventListener('click', (event) => {
//     event.prompt();
//     butInstall.setAttribute('disabled', true);
//     butInstall.textContent = 'Installed';
// });

// TODO: Add an handler for the `appinstalled` event
  window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  });



// window.addEventListener('appinstalled', (event) => {
//     textHeader.textContent = 'App Installed';
//     console.log('appinstalled', event);
// });
