import asyncio
import websockets

port = 8080

async def handler(websocket, path):
    async for message in websocket:
        print(message)
    # closed = await websocket

async def main():
    async with websockets.serve(handler, 'localhost', port):
        await asyncio.Future()

if __name__ == '__main__':
    asyncio.run(main())