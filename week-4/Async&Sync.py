import aiohttp
import asyncio
import requests
import logging

#-->Async function
async def fetch_Data():
  async with aiohttp.ClientSession() as session:
    async with session.get('https://jsonplaceholder.typicode.com/posts') as response:
      data = await response.text()
      print(data)

asyncio.run(fetch_Data())


#-->Sync function
def get_Data():
  response = requests.get('https://jsonplaceholder.typicode.com/posts')
  print(response.json())

get_Data()


#--> Task
logging.basicConfig(level=logging.INFO)

coins = ['bitcoin','ethereum', 'solana']

async def get_cryptoData(session, coin):
  url = f"https://api.coingecko.com/api/v3/coins/{coin}"
  async with session.get(url) as response:
        try:
          if(response.status == 200):
            data = await response.json()
            logging.info(f'Fetched {coin}')
            return {
                      "name": data["name"],
                      "symbol": data["symbol"],
                      "price": data["market_data"]["current_price"]["usd"],
                      "image": data["image"]
                  }
          else:
              logging.error(f"Error fetching {coin}: {response.status}")
        except Exception as e:
          logging.error(f"Exception fetching {coin}: {e}")

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = [get_cryptoData(session, coin) for coin in coins]
        results = await asyncio.gather(*tasks)
        for result in results:
            if result:
                print(result)

if __name__ == "__main__":
    asyncio.run(main())
