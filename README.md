This was a quick React Server Component, Next.js app router practice project. Art wallpaper is a museum display-like page that keeps your computer awake. 

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