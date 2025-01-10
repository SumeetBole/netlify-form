module.exports = {
    async headers() {
      return [
        {
          source: '/contact',
          headers: [
            { key: 'Content-Type', value: 'text/html' },
          ],
        },
      ];
    },
  };
  