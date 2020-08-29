import discord
import os
from os.path import join, dirname
from dotenv import load_dotenv
import requests
import time
import datetime


client = discord.Client()

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path)

# @client.event
# async def on_ready():
#     print('We have logged in as {0.user}'.format(client))

print(os.environ.get("MAIN_DISCORD_SWRVER_B"))


@client.event
async def on_ready():

    ch_name = "general"

    for channel in client.get_all_channels():
        if channel.name == ch_name:
            await channel.send("起動した")
            print("起動した")


@client.event
async def on_message(message):
    print("[" + datetime.datetime.now() + "]" + message.content)
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
        print(response.status_code)  # HTTPのステータスコード取得
        # print(response.text)    # レスポンスのHTMLを文字列で取得
        value = response.text
        Post_text = None

        print("value = " + value["list"])

        await message.channel.send("天気")

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


client.run(os.environ.get("MAIN_DISCORD_SWRVER_B"))
