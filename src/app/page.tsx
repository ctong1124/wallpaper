import { Suspense } from 'react';
import { ArtImage } from './components/ArtImage';
import { Description } from './components/Description';
// import { paintingsData } from './components/data';

export default async function Home() {
  const data = await fetch(`https://www.wikiart.org/en/Api/2/login?accessCode=${process.env.API_ACCESS_CODE}&secretCode=${process.env.API_SECRET_CODE}`);
  const { SessionKey } = await data.json();
  // const blah = await data.json();
  // const { SessionKey} = blah;
  // console.log('api data limit: ', blah);

  const paintingsCall = await fetch(`https://www.wikiart.org/en/api/2/MostViewedPaintings?imageFormat=HalfHD&authSessionKey=${SessionKey}`);
  const popularPaintings = await paintingsCall.json();
  const randomPainting = popularPaintings?.data?.[Math.floor(Math.random() * popularPaintings.data.length)];

  /* reduce calls */
  // const randomPainting = paintingsData?.[Math.floor(Math.random() * paintingsData.length)];

  const {
    title,
    artistName,
    completitionYear,
    width,
    height,
    image,
    id,
  } = randomPainting;
  console.log('randomPainting', randomPainting, title, artistName, completitionYear, width,height, image);

  return (
    <div className="font-[family-name:var(--font-inter)] text-gray-900">
      <main className="">
        <div className="flex items-center justify-center block">
          <div className="h-screen w-screen relative">
            <ArtImage
              image={image}
              title={title}
              artistName={artistName}
              width={width}
              height={height}
            />
          </div>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-100 h-24 w-full block"></div>
        <div className="bg-gray-100">
          <div className="max-w-5xl mx-auto py-12">
            <h1 className="text-4xl leading-normal">{title}</h1>
            <h2 className="text-3xl text-gray-500 leading-normal">{artistName}</h2>
            <Suspense fallback={<div text-gray-400 text-base leading-relaxed pt-8>Loading...</div>}> 
              <Description id={id} />
            </Suspense>
          </div>
          <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center block">
            Art wallpaper
          </footer>
        </div>
      </main>
      
    </div>
  );
}
