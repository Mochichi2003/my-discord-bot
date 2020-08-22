const { Client } = require('klasa');

new Client({
  fetchAllMembers: false,
  prefix: '+',
  commandEditing: true,
  typing: true,
  readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.cache.size} guilds.`
}).login("NzQwOTA3MDE5ODA4MTQ1NTA5.Xyv1bg.gZ0Sc9BEksBSsky7QWKVOZMaFss");