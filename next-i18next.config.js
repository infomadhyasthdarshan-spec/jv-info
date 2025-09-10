module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'hi'], // example
    },
    localePath: typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  };
  