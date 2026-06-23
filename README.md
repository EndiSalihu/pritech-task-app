Tech Stack

- React Native (Expo)
- TypeScript
- React Navigation (Bottom Tabs + Stack)
- TanStack React Query
- JSON Server (Mock API)

Project Setup

1. Install dependencies
npm install

2. Start JSON Server (Mock API)
npm run server

3. Find your local IP address
Linux: hostname -I

Windows: ipconfig (look for IPv4 Address)

macOS:  ipconfig getifaddr en0

4. Update API URL
Open the file: api-url.ts (in the root of the project)
Update it with your local IP
Example: export const API_URL = "http://192.168.1.2:3000";

5. Start Expo App
npm run client
