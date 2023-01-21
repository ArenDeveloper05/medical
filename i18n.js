module.exports = {
  locales: ['hy', 'ru', 'en'], // Array with the languages that you want to use
  defaultLocale: 'hy', // Default language of your website
  localeDetection: false,
  pages: {
    '*': ['common'], // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
  },
};