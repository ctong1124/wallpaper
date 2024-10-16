This was a quick React Server Component, Next.js app router practice project. Art wallpaper is a museum display-like page that keeps your computer awake. 
<img width="1828" alt="Screen Shot 2024-10-15 at 9 01 26 PM" src="https://github.com/user-attachments/assets/a525288b-a373-4bf1-a725-7a70ecdb68c0">

## Getting Started
```bash
npm install
npm run dev
```

To test locally with live data, create a `.env` file in the root. Go to https://www.wikiart.org/en/App/GetApi to obtain keys and add them to your .env file.
```
API_ACCESS_CODE=[your access code]
API_SECRET_CODE=[your secret code]
```

To test locally with dummy data, follow instructions in comments in the following files:
```
src/app/page.tsx
src/app/components/Description.tsx
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Future additions
Ideas for future feature additions and improvements:
- Snap to the art section vs. info section with animation
- A loading placeholder or animation, so we could potentially load in higher quality image 
- Options for categories of art to show
- Active state on mousemove instead of hover
- Error handling for api calls
- Caching for initial search call
- Tests
- Prettier
- Build and deploy


## Preview of UI
![site gif](https://github.com/user-attachments/assets/e82eeb57-1d55-4c06-82c2-935e969dbb0d)
