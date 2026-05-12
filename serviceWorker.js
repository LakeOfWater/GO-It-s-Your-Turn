self.addEventListener('push', e => {
    self.registration.showNotification('Hello!', { body: e.data.text() });
  });