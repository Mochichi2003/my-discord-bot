const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("dotenv").config();
const Quote = require("inspirational-quotes");
var fs = require("fs");
const JSON = require("JSON");
const axios = require("axios");
const cowsay = require("cowsay");
const chalk = require("chalk");
const schedule = require("node-schedule");

const wetherAPIKey = process.env.WEATHER_API;
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

//起動したときのmessage
client.on("ready", () => {
  console.log(chalk.red(`${client.user.username}`) + ` でログインしています。`);

  const Channel = client.channels.cache.get("583955930161479682");
  if (!Channel) return console.log("Invalid channel.");
  Channel.send("起動したのだ : " + moment().format("YYYY/MM/DD HH:mm:ss:SSSS"));
});

function sendtime() {
  console.log(moment().format("YYYY/MM/DD HH:mm:ss.SSSSSSSSS"));
}

client.on("ready", () => {});

client.on("message", async (msg) => {
  function sed_message(value, message) {
    console.log(
      `[${moment().format("YYYY/MM/DD HH:mm:ss.SSSSS")}] <#${msg}>` +
        value +
        "\n",
    );
    message.channel.send(value);
  }

  console.log(JSON.stringify("[" + msg.author.id + "]" + msg.content));
  // console.log("\n\n\n");
  // console.log(msg.author.id);
  // console.log(msg);
  if (
    (msg.author.id == "740204772467933204" &&
      msg.channelID == "741655641961136238" &&
      msg.content == "(Ｕ＾ω＾)わんわんお！") ||
    (msg.author.id == "740204772467933204" &&
      msg.channelID == "741644959601393697" &&
      msg.content == "(Ｕ＾ω＾)わんわんお！")
  ) {
    setTimeout(() => {
      console.log("わんわんお");
      msg.channel.send(moment().format("YYYY/MM/DD HH:mm:ss.SSSSSSSSS"));
      msg.channel.send("(Ｕ＾ω＾)わんわんお！");
    }, 1000);
  }

  //ここからコマンドに反応して返すところ
  if (
    (msg.author.id == "740204772467933204" ||
      msg.author.id == "740907019808145509") &&
    msg.content.match(/このメッセージに❤️の絵文字で反応すると/)
  ) {
    console.log(chalk.red("ロールを追加するところ"));
    msg.react("❤️");
  } else if (
    msg.author.id == "740204772467933204" ||
    msg.author.id == "740907019808145509"
  ) {
    return;
  } else if (msg.content === "!ping") {
    sendtime();
    // msg.channel.send("Pong!");
    sed_message("Pong!", msg);
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
    if (Replacement_character[1] == undefined) {
      Replacement_character[1] = "👾";
    }
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
  } else if (msg.content.match(/にゃー/) || msg.content.match(/みゃー/)) {
    sendtime();
    msg.channel.send("o(^･x･^)o ﾐｬｧ♪");
  } else if (msg.content.match(/もち/)) {
    sendtime();
    msg.channel.send("モチモチモチモチモﾁﾓﾁﾓﾁﾓ(ﾉ)`ω´(ヾ)");
  } else if (msg.content.match(/\/天気/)) {
    console.log(wetherAPIKey);
    var city_name = "Tokyo";
    var city = "Tokyo";
    if (msg.content.match(/東京/)) {
      city = "Tokyo";
    } else if (msg.content.match(/新潟/)) {
      city = "Niigata-shi";
    } else if (msg.content.match(/札幌/)) {
      city = "Sapporo-shi";
    } else if (msg.content.match(/横浜/)) {
      city = "Yokohama-shi";
    } else if (msg.content.match(/大宮/)) {
      city = "Ōmiya";
    } else if (msg.content.match(/新潟/)) {
      city = "Niigata-shi";
    } else {
      city = false;
      msg.send("現在対応しているのは東京、新潟、札幌、横浜、大宮です");
    }
    console.log(city);
    var req_url =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      ",jp&units=metric&APPID=" +
      wetherAPIKey;
    //リクエストするURL
    // var request = new XMLHttpRequest();
    axios({
      method: "get",
      url: `${req_url}`,
      // responseType: 'stream'
    }).then(function (response) {
      // console.log(response);
      // console.log(response.data.list);
      var data = response.data.list;
      var hizuke;
      let result_teski_yohou;
      for (let index = 0; index < 15; index++) {
        // const element = array[index];

        // console.log("気温 = " + data[index].main.temp);
        // console.log("天気 = " + data[index].weather[0].main);
        // // console.log("時間 = " + data[index].dt_txt);
        // console.log("風速 = " + data[index].wind.speed);
        hizuke = data[index].dt_txt.split("-");

        tenkiaa =
          // hizuke[0] +
          // "年" +
          hizuke[1] +
          "月" +
          hizuke[2].split(" ")[0] +
          "日" +
          hizuke[2].split(" ")[1].split(":")[0] +
          "時 ";
        // console.log("時間 = " + tenkiaa);
        var tenkiaa_icon;
        // 英語の天気を絵文字に変換するところ
        switch (data[index].weather[0].main) {
          case "Clear":
            tenkiaa_icon = "☀️";
            break;
          case "Clouds":
            tenkiaa_icon = "☁️";
            break;
          case "Rain":
            tenkiaa_icon = "🌧";
            break;
          case "Snow":
            tenkiaa_icon = "⛄️";
            break;
          default:
            tenkiaa_icon =
              data[index].weather[0].main +
              "\n\n_*!!実装されてないものがありますこのBOTを作った製作者に伝えてください!!*_\n\n";
            break;
        }

        // result_teski_yohou +=
        //   `\n${tenkiaa} 天気:${data[index].weather[0].main}` +
        //   ` ${data[index].main.temp}℃ 風速:${data[index].wind.speed}`;
        result_teski_yohou +=
          `\n${tenkiaa} 天気:${tenkiaa_icon}` +
          ` ${data[index].main.temp}℃ 風速:${data[index].wind.speed}`;
      }
      console.log(result_teski_yohou.replace(/undefined/g, ` `));
      msg.channel.send(result_teski_yohou.replace(/undefined/g, ` `));
      // response.data.list.forEach((data) => {
      //   // console.log(data);
      //   msg.channel.send(
      //     `${data.dt_txt}:${data.weather[0].main} ${data.main.temp}℃ 風速:${data.wind.speed}m`,
      //   );
      // });

      // fs.writeFileSync('output.json', JSON.stringify({MyDog: response}, null, ' '));
    });


    
  } else if (msg.content == "名言") {
    console.log(Quote.getQuote());
    msg.channel.send(
      Quote.getQuote()["text"] + "\n by " + Quote.getQuote()["author"],
    );
  } else if (msg.content == "/help") {
    msg.channel.send(
      "・/ぴえん {好きな文字}   ででぴえん絵文字アートが出ます\n" +
        "・/天気 {地名}  でその地名の天気予報を知ることができます。現在対応しているのは、東京・新潟・札幌・横浜・大宮です\n" +
        "・「にゃー」としゃべると「o(^･x･^)o ﾐｬｧ♪」と返ってきます。\n" +
        "・「わん」としゃべると「（Ｕ＾ω＾）わんわんお！」と返ってきます。\n" +
        "・「もち」としゃべると「モチモチモチモチモﾁﾓﾁﾓﾁﾓ(ﾉ)`ω´(ヾ)」と返ってきます。\n" +
        "・「!ping」としゃべると「Pong!」と返ってきます。\n",
    );
  } else if (msg.content.match(/\/リマインダー追加/)) {
    // msg.channel.send("あいう")
    let Replacement_character = msg.content.split(/\s/);
    Replacement_character.forEach((contesnt) => {
      msg.channel.send(contesnt);
    });
  } else if (msg.content.match(/\/cowsay/)) {
    let messeges = msg.content.split(/\s/);
    if (!messeges[1]) {
      console.log("空欄だよー");
      messeges[1] = "名言っぽいことを言おうとした";
    }
    let result = cowsay.say({
      text: messeges[1],
      cow: "fence",
      eyes: "pp",
      tongue: ";;",
    });

    msg.channel.send(`\`\`\`${result}\`\`\``);
    // console.log(result);
  } else if (msg.content.match(/\/make_follow_rule/)) {
    let messeges = msg.content.split(/\s/);

    msg.channel.send(
      "このメッセージに❤️の絵文字で反応すると:" +
        messeges[1] +
        ":のロールが追加されます\n" +
        role_description(messeges[2]), //ロールの説明文
    );
  } else if (msg.content === "!react") {
    msg.react("😄");
  } else if (msg.content === `user-info`) {
    msg.channel.send(
      `Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`,
    );
  } else if (msg.content === "!thinking") {
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor("#ffbd39")
      .setTitle("考え中")
      .attachFiles(["./img/thinking-face_1f914.png"])
      .setImage("attachment://discordjs.png");
    // .setImage("./assets/img/thinking-face_1f914.png")

    msg.channel.send(exampleEmbed);
  }

  // "#ff0000"
});

//リアクションの反応をトリガーにするところ
client.on("messageReactionAdd", async (reaction, user) => {
  // When we receive a reaction we check if the reaction is partial or not
  console.log(user);
  if (user.bot) {
    return;
  }
  if (reaction.partial) {
    // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
    try {
      await reaction.fetch();
    } catch (error) {
      console.log("Something went wrong when fetching the message: ", error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }
  // Now the message has been cached and is fully available
  // console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);

  // console.log(reaction.message.content.split(/:/));

  const channel = client.channels.cache.get("583955930161479682");
  channel.send(
    "ロール:" +
      reaction.message.content.split(/:/)[1] +
      " メンバー:" +
      `<@${user.id}>`,
  );

  // let member = message.mentions.members.first();
  if (reaction.id === "747016718261682206") {
    // Define the emoji user add
    let role = message.guild.roles.cache.find((role) => role.name === "Alerts");
    if (message.channel.name !== "alerts") {
      message.reply(":x: You must go to the channel #alerts");
    } else {
      message.member.addRole("746730980299112478");
    }
  }
  // or the person who made the command: let member = message.member;
  // user.roles.set(['746730980299112478'])
  //   .then(console.log)
  //   .catch(console.error);
  // Add the role!
  console.log(JSON.stringify(user));
  // user.addRole(reaction.message.content.split(/:/)[1]).catch(console.error);

  // The reaction is now also fully available and the properties will be reflected accurately:
  console.log(
    `[${moment().format("YYYY/MM/DD HH:mm:ss:SSSS")}][${
      reaction.count
    } ] ${user} have given the same reaction to this message!`,
  );
});

var j = schedule.scheduleJob("* * * * * *", function () {
  // client.channels.get("583955930161479682").send('おはよう');
  // client.channels.get("583955930161479682").send("メッセージ");
  // client.channels.cache.get('583955930161479682').send('aaaaaaaaaaaaaaaaaaメッセージ')
  client.channels.cache.get("583955930161479682");

  console.log(
    moment().format("HH:mm:ss") + "きどうしたぞーーーーーーーーーーーーー",
  );
});

// console.log(process.env.TEES);

console.log("うごくぞー");
console.log(process.env.MAIN_DISCORD_SWRVER_B);
client.login(process.env.MAIN_DISCORD_SWRVER_B);

function getdata(param) {}
getdata();
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port port!`))
try {
  const express = require("express");
  const app = express();
  const port = process.env.PORT || 3000;
  app.get("/", (req, res) => res.send("Hello World!"));
  app.listen(port, () => console.log(`Example app listening on port port!`));
} catch (error) {
  console.log(error);
}

/**
 * ロールの説明文を返します
 * @param {string} params Discordのユーザーを指定します
 * @return {string} Discordのユーザーの説明文が返って来ます
 */

function role_description(params) {
  let return_txet;
  if (params) {
    return_txet =
      "このロールを追加すると:" + params + ":さんの投稿を見れるようになります";
  } else {
    return_txet = "";
  }
  return return_txet;
}
