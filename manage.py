import discord
import os
from os.path import join, dirname
from dotenv import load_dotenv
import requests
import time
import datetime
import json
from discord.ext import tasks

# from flask import *  # 必要なライブラリのインポート

client = discord.Client()

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)

# @client.event
# async def on_ready():
#     print('We have logged in as {0.user}'.format(client))

print(os.environ.get("MAIN_DISCORD_SWRVER_B"))


def weather_dttxt_to_data_and_time(value):
    # 2020-08-31 09:00:00
    times = value.split()
    date = times[0].split("-")
    Times_of_Day = times[1].split(":")
    Result = date[1] + "月" + date[2] + "日 " + \
        Times_of_Day[0] + ":" + Times_of_Day[1]
    return Result
    # print(tstr)


def weather_name_to_emoji(value):
    retun_text = None
    if value == "Clear":
        retun_text = "☀️"
    elif value == "Clouds":
        retun_text = "☁️"
    elif value == "Rain":
        retun_text = "🌧"
    elif value == "Snow":
        retun_text = "⛄️"
    else:
        retun_text = value + "\n\n_*!!実装されてないものがありますこのBOTを作った製作者に伝えてください!!*_\n\n"
    return retun_text


# print(weather_name_to_emoji("Rain"))
print("あいうえお")
# print(str(weather_dttxt_to_data_and_time("2020-08-31 09:00:00")))


@client.event
async def on_ready():

    ch_name = "general"

    for channel in client.get_all_channels():
        if channel.name == ch_name:
            await channel.send("起動した")
            print("起動した")


@client.event
async def on_message(message):
    print("[" + str(datetime.datetime.now()) + "]" + message.content)
    if message.author == client.user:

        return

    if message.content.startswith("!ping"):
        await message.channel.send("pong!")
    if "わん" in message.content:
        await message.channel.send("(Ｕ＾ω＾)わんわんお！")
    if "にゃー" in message.content or "みゃー" in message.content:
        await message.channel.send("o(^･x･^)o ﾐｬｧ♪")
    if "もち" in message.content:
        await message.channel.send("モチモチモチモチモﾁﾓﾁﾓﾁﾓ(ﾉ)`ω´(ヾ)")

    if "/天気" in message.content:
        WEATHER_BASE_URL_KEY = os.environ.get("WEATHER_API")
        print(WEATHER_BASE_URL_KEY)
        # 街の場所を指定するところ
        city = None
        if "東京" in message.content:
            print("東京のを取得する")
            city = "Tokyo"
        elif "新潟" in message.content:
            city = "Niigata-shi"
        elif "札幌" in message.content:
            city = "Sapporo-shi"
        elif "横浜" in message.content:
            city = "Yokohama-shi"
        elif "大宮" in message.content:
            city = "Ōmiya"
        else:
            await message.channel.send("現在対応しているのは、東京、新潟、札幌、横浜、大宮です")

        Request_url = (
            "http://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + ",jp&units=metric&APPID="
            + WEATHER_BASE_URL_KEY
        )

        response = requests.get(Request_url)
        data = response.json()
        jsonText = json.dumps(data, indent=4)
        print(response.status_code)  # HTTPのステータスコード取得
        # print(response.content)    # レスポンスのHTMLを文字列で取得
        # print(jsonText)    # レスポンスのHTMLをJSON形式で取得
        value = response.content
        Post_text = None
        print(type(data))
        # print(data["list"][1])
        weather_date = "てんきだよー\n"
        for i in range(15):

            weather_date = weather_date + (
                weather_dttxt_to_data_and_time(str(data["list"][i]["dt_txt"]))
                + " "
                + weather_name_to_emoji(data["list"][i]["weather"][0]["main"])
                + " "
                + str(data["list"][i]["main"]["temp"])
                + "℃ "
                + "風速"
                + str(data["list"][i]["wind"]["speed"])
                + "m"
                + "\n"
            )
            # print("気温" + str(data["list"][i]["main"]["temp"]))
            # print(
            #     "天気" + weather_name_to_emoji(data["list"][i]["weather"][0]["main"]))
            # print("風速" + str(data["list"][i]["wind"]["speed"]))
            # print(
            #     "日付" + weather_dttxt_to_data_and_time(str(data["list"][i]["dt_txt"])))

            # print(type(data["list"][i]["main"]["temp"]))
            # print(type(data["list"][i]["weather"][0]["main"]))
            # print(type(data["list"][i]["wind"]["speed"]))
            # print(type(data["list"][i]["dt_txt"]))
            # print(str(i) + " " + str(data["list"][i]) + "\n")

        await message.channel.send(weather_date)

    if "/ぴえん" in message.content:
        # pien_Messege[1] ="🤬"
        pien_Messege = message.content.split()

        pien_result_messeage = ""
        if len(pien_Messege) <= 1:
            print("なにもないよ")
            pien_result_messeage = "🤬"
        else:
            pien_result_messeage = pien_Messege

        print(len(pien_Messege))

        pien1 = [
            "👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽🥺🥺🥺\n👽👽🥺🥺🥺🥺👽👽🥺🥺🥺👽🥺\n👽👽🥺🥺🥺🥺👽👽🥺🥺👽🥺👽\n👽👽👽🥺🥺👽👽👽🥺🥺🥺👽👽\n👽👽👽🥺👽👽👽👽🥺🥺🥺👽👽\n👽👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽👽🥺🥺👽👽👽\n👽👽🥺🥺👽👽👽👽🥺👽👽👽👽\n👽👽🥺🥺🥺👽🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽👽🥺🥺🥺👽👽👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽",
            "👽👽👽👽🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺🥺🥺👽👽👽\n👽👽👽👽👽👽🥺🥺🥺👽👽👽👽\n👽👽👽👽👽🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽👽🥺🥺🥺🥺🥺👽👽👽👽\n👽👽👽🥺🥺👽👽🥺🥺🥺🥺🥺👽\n👽👽🥺🥺👽👽👽🥺🥺🥺🥺🥺👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽",
            "👽👽👽👽👽👽👽👽👽👽👽👽👽\n👽👽👽👽👽👽🥺👽👽👽👽👽👽\n👽👽👽👽👽🥺🥺🥺👽👽👽👽👽\n👽👽👽👽👽🥺🥺👽👽👽👽👽👽\n👽👽👽👽🥺🥺👽👽👽👽👽👽👽\n👽👽👽👽🥺🥺👽👽👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺👽👽👽👽👽\n👽👽👽🥺🥺🥺🥺🥺👽👽👽👽👽\n👽👽🥺🥺🥺👽🥺🥺👽👽👽🥺👽\n👽👽🥺🥺👽👽👽🥺👽👽🥺🥺👽\n👽👽🥺🥺👽👽👽🥺🥺🥺🥺🥺👽\n👽🥺🥺👽👽👽👽🥺🥺🥺🥺👽👽\n👽👽👽👽👽👽👽👽👽👽👽👽👽",
        ]
        print(pien1)
        for target_list in pien1:
            # print(target_list)
            target_list = target_list.replace("👽", pien_result_messeage)
            await message.channel.send(target_list)

        # await message.channel.send('ピエン')


channel_sent = None
"""
10秒ごとに発言するメソッドを定義している部分。
async def の1行上が定期実行を示すもので、()内で間隔を指定します。
例えば5分ごとなら(minutes=5)です。
"""
@tasks.loop(seconds=1)
async def send_message_every_10sec():
    await channel_sent.send("10秒経ったよ")

"""
今回はbotの起動直後に定期実行を開始したいので、
botの準備ができた段階で定期実行をstart()します
"""


@client.event
async def on_ready():
    global channel_sent
    channel_sent = client.get_channel(741644959601393697)
    send_message_every_10sec.start()
    # テストサーバーの方


client.run(os.environ.get("MAIN_DISCORD_SWRVER_B"))
