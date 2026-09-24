const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({

  testDir: './tests',

  use: {
    baseURL: process.env.BASE_URL,
    headless: !!process.env.CI,
  },

  projects: [

    // Creates authentication state
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/,
    },

    // Uses authentication state
    {
      name: 'chromium',

      use: {
        storageState: 'auth/user.json',
      },

      dependencies: ['setup'],
    },

  ],

  reporter: 'html',

});