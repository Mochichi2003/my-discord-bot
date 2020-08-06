const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
client.on("ready", () => {
  console.log(`${client.user.username} でログインしています。`);
});

function sendtime() {
  console.log(moment().format("YYYY/MM/DD HH:mm:ss.SSSSSSSSS"));
}
client.on("message", async (msg) => {
  // console.log("\n\n\n");
  // console.log(msg.author.id);
  if (msg.author.id == "740204772467933204") {
    return;

  } else if (msg.content === "!ping") {
    sendtime();
    msg.channel.send("Pong!");

  } else if (msg.content.match(/\/ぴえん/)) {

    sendtime();
    let Replacement_character = msg.content.split(/\s/);
    console.log(Replacement_character[1]);
    // console.log(msg.content.split(/\s/));
    let pien1 =
      "👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽🥺🥺🥺\n👽👽🥺🥺🥺🥺👽👽🥺🥺🥺👽🥺\n👽👽🥺🥺🥺🥺👽👽🥺🥺👽🥺👽\n👽👽👽🥺🥺👽👽👽🥺🥺🥺👽👽\n👽👽👽🥺👽👽👽👽🥺🥺🥺👽👽\n👽👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽👽🥺🥺👽👽👽\n👽👽🥺🥺👽👽👽👽🥺👽👽👽👽\n👽👽🥺🥺🥺👽🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽👽🥺🥺🥺👽👽👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽";
    let pien2 =
      "👽👽👽👽🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺🥺👽👽👽\n👽👽👽👽👽👽🥺🥺🥺👽👽👽👽\n👽👽👽👽👽🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺👽👽🥺🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽🥺🥺🥺🥺🥺👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽";
    let pien3 =
      "👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽👽👽👽🥺👽👽👽👽👽👽\n👽👽👽👽👽🥺🥺🥺👽👽👽👽👽\n👽👽👽👽👽🥺🥺👽👽👽👽👽👽\n👽👽👽👽🥺🥺👽👽👽👽👽👽👽\n👽👽👽👽🥺🥺👽👽👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺👽👽👽👽👽\n👽👽🥺🥺🥺👽🥺🥺👽👽👽🥺👽\n👽👽🥺🥺👽👽👽🥺👽👽🥺🥺👽\n👽👽🥺🥺👽👽👽🥺🥺🥺🥺🥺👽\n👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽";

    let callback1;
    let callback2;
    let callback3;

    if (Replacement_character[1] != "") {
      callback1 = pien1.replace(/👽/g, `${Replacement_character[1]}`);
      callback2 = pien2.replace(/👽/g, `${Replacement_character[1]}`);
      callback3 = pien3.replace(/👽/g, `${Replacement_character[1]}`);
      console.log(callback1);
      console.log(callback2);
      console.log(callback3);
    } else {
      callback1 = pien1;
      callback2 = pien2;
      callback3 = pien3;
    }
    // console.log(callback);
    try {
      msg.channel.send(callback1);
      msg.channel.send(callback2);
      msg.channel.send(callback3);
    } catch (error) {
      console.log(error);
      msg.channel.send("エラーが出たぞ@mochi#6392");
    }


  } else if (msg.content.match(/わん/)) {
    sendtime();
    msg.channel.send("(Ｕ＾ω＾)わんわんお！");

  } else if (msg.content.match(/にゃー/)) {
    sendtime();
    msg.channel.send("o(^･x･^)o ﾐｬｧ♪");

  } else if (msg.content.match(/もち/)) {
    sendtime();
    msg.channel.send("モチモチモチモチモﾁﾓﾁﾓﾁﾓ(ﾉ)`ω´(ヾ)");

  }
});

client.login("NzQwMjA0NzcyNDY3OTMzMjA0.Xylnag.NyjiX99P4s099JAadzEEE8Jf-6w");
