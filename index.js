const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("dotenv").config();
const Quote = require("inspirational-quotes");
var fs = require("fs");
const JSON = require("JSON");
const axios = require("axios");

const wetherAPIKey = process.env.WEATHER_API;
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

client.on("ready", () => {
  console.log(`${client.user.username} でログインしています。`);
});

function sendtime() {
  console.log(moment().format("YYYY/MM/DD HH:mm:ss.SSSSSSSSS"));
}
client.on("message", async (msg) => {
  function sed_message(value, message) {
    console.log(
      `[${moment().format("YYYY/MM/DD HH:mm:ss.SSSSS")}] <#${msg}>` +
      value +
      "\n",
    );
    message.channel.send(value);
  }

  console.log(JSON.stringify(msg.author.id + msg.content));
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

  if (
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
  } else if (msg.content == "天気") {

    console.log(wetherAPIKey);
    var city_name = "Tokyo";
    var city = "Tokyo";
    var req_url =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      ",jp&units=metric&APPID=" +
      wetherAPIKey;
    // var request = new XMLHttpRequest();
    let Weather_req_url = BASE_URL + `?q=${city_name}` + `&APPID=${wetherAPIKey}`;
    // $(function () {
    //   $.ajax({
    //     url: url,
    //     dataType: "json",
    //     type: 'GET',
    //   })
    //     .done(function (data) {
    //       console.log(data);
    //     })
    //     .fail(function (data) {
    //       console.log(data);
    //     });
    // });
    axios({
      method: "get",
      url: `${req_url}`,
      // responseType: 'stream'
    }).then(function (response) {
      // console.log(response);
      // console.log(response.data.list);
      response.data.list.forEach((data) => {
        // console.log(data);
        console.log("気温 = " + data.main.temp);
        console.log("天気 = " + data.weather[0].main);
        console.log("時間 = " + data.dt_txt);
        console.log("時間 = " + data.wind.speed);
      });

      // fs.writeFileSync('output.json', JSON.stringify({MyDog: response}, null, ' '));
    });
  } else if (msg.content == "名言") {
    console.log(Quote.getQuote());
    msg.channel.send(
      Quote.getQuote()["text"] + "\n by " + Quote.getQuote()["author"],
    );
  }
});
// console.log(process.env.TEES);

console.log("うごくぞー");
console.log(process.env.MAIN_DISCORD_SWRVER_A);
client.login(process.env.MAIN_DISCORD_SWRVER_A);

function getdata(param) {

}
getdata();
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port port!`))
