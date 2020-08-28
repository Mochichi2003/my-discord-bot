import discord
import os
from os.path import join, dirname
from dotenv import load_dotenv

client = discord.Client()

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), '.env')
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
            await channel.send("起動したヨン")
            print("起動したヨン")


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('!ping'):
        await message.channel.send('pong!')

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(os.environ.get("MAIN_DISCORD_SWRVER_B"))
