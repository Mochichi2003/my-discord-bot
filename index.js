const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`${client.user.username} でログインしています。`);
});

client.on("message", async (msg) => {
  // console.log("\n\n\n");
  // console.log(msg.author.id);
  if (msg.author.id == "740204772467933204") {
    return;
  } else if (msg.content === "!ping") {
    msg.channel.send("Pong!");
  } else if (msg.content === "/ぴえん") {
    msg.channel.send(
      "💗💗💗💗💗💗💗💗💗💗💗💗💗\n💗💗💗💗💗💗💗💗💗💗🥺🥺🥺\n💗💗🥺🥺🥺🥺💗💗🥺🥺🥺💗🥺\n💗💗🥺🥺🥺🥺💗💗🥺🥺💗🥺💗\n💗💗💗🥺🥺💗💗💗🥺🥺🥺💗💗\n💗💗💗🥺💗💗💗💗🥺🥺🥺💗💗\n💗💗🥺🥺💗💗💗💗🥺🥺🥺🥺💗\n💗💗🥺🥺💗💗💗💗🥺🥺🥺🥺💗\n💗💗🥺🥺💗💗💗💗🥺🥺💗💗💗\n💗💗🥺🥺💗💗💗💗🥺💗💗💗💗\n💗💗🥺🥺🥺💗🥺🥺🥺💗💗💗💗\n💗💗💗🥺🥺🥺🥺🥺🥺💗💗💗💗\n💗💗💗💗🥺🥺🥺💗💗💗💗💗💗\n💗💗💗💗💗💗💗💗💗💗💗💗💗",
    );
    msg.channel.send(
      "💗💗💗💗🥺🥺🥺🥺💗💗💗💗💗\n💗💗💗💗🥺🥺🥺🥺🥺💗💗💗💗\n💗💗💗💗💗💗💗💗💗💗💗💗💗\n💗💗💗🥺🥺🥺🥺🥺🥺💗💗💗💗\n💗💗💗🥺🥺🥺🥺🥺🥺🥺💗💗💗\n💗💗💗💗💗💗🥺🥺🥺💗💗💗💗\n💗💗💗💗💗🥺🥺🥺💗💗💗💗💗\n💗💗💗💗🥺🥺🥺🥺💗💗💗💗💗\n💗💗💗💗🥺🥺🥺🥺🥺💗💗💗💗\n💗💗💗🥺🥺💗💗🥺🥺🥺🥺🥺💗\n💗💗🥺🥺💗💗💗🥺🥺🥺🥺🥺💗\n💗💗💗💗💗💗💗💗💗💗💗💗💗",
    );
    msg.channel.send(
      "💗💗💗💗💗💗💗💗💗💗💗💗💗\n💗💗💗💗💗💗🥺💗💗💗💗💗💗\n💗💗💗💗💗🥺🥺🥺💗💗💗💗💗\n💗💗💗💗💗🥺🥺💗💗💗💗💗💗\n💗💗💗💗🥺🥺💗💗💗💗💗💗💗\n💗💗💗💗🥺🥺💗💗💗💗💗💗💗\n💗💗💗🥺🥺🥺🥺🥺💗💗💗💗💗\n💗💗💗🥺🥺🥺🥺🥺💗💗💗💗💗\n💗💗🥺🥺🥺💗🥺🥺💗💗💗🥺💗\n💗💗🥺🥺💗💗💗🥺💗💗🥺🥺💗\n💗💗🥺🥺💗💗💗🥺🥺🥺🥺🥺💗\n💗🥺🥺💗💗💗💗🥺🥺🥺🥺💗💗\n💗💗💗💗💗💗💗💗💗💗💗💗💗",
    );
  } else if (msg.content.match(/わん/)) {
    msg.channel.send("(Ｕ＾ω＾)わんわんお！");
  }
});

client.login("NzQwMjA0NzcyNDY3OTMzMjA0.Xylnag.NyjiX99P4s099JAadzEEE8Jf-6w");
