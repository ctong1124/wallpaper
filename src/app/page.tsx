import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ArtImage } from './components/ArtImage';
import { Description } from './components/Description';

const DynamicActiveState = dynamic(() =>
  import('./components/ActiveState').then((mod) => mod.ActiveState), { ssr: false });


export default async function Home() {
  const data = await fetch(`https://www.wikiart.org/en/Api/2/login?accessCode=${process.env.API_ACCESS_CODE}&secretCode=${process.env.API_SECRET_CODE}`);
  const { SessionKey } = await data.json();

  const paintingsCall = await fetch(`https://www.wikiart.org/en/api/2/MostViewedPaintings?imageFormat=HalfHD&authSessionKey=${SessionKey}`);
  const popularPaintings = await paintingsCall.json();
  const randomPainting = popularPaintings?.data?.[Math.floor(Math.random() * popularPaintings.data.length)];

  // to test with dummy data, comment all code above in this function and add top top of file:
  // import { paintingsData } from './components/testData'
  // uncomment line below:
  // const randomPainting = paintingsData?.[Math.floor(Math.random() * paintingsData.length)];

  const {
    title,
    artistName,
    completitionYear,
    image,
    id,
  } = randomPainting;

  return (
    <div className="font-[family-name:var(--font-inter)] text-gray-900">
      <main className="">
        <div className="flex items-center justify-center block bg-red-0 group">
          <div className="h-screen w-screen relative">
            <ArtImage
              image={image}
              title={title}
              artistName={artistName}
            />
            <DynamicActiveState />
          </div>
        </div>
        <div className="bg-gradient-to-b from-white to-gray-50 h-24 w-full block"></div>
        <div className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-8 pt-12 pb-36">
            <h1 className="text-4xl leading-normal">{`${title}, ${completitionYear}`}</h1>
            <h2 className="text-3xl text-gray-500 leading-normal">{artistName}</h2>
            <Suspense fallback={<div className="text-gray-400 text-base leading-relaxed pt-8">Loading...</div>}> 
              <Description id={id} />
            </Suspense>
          </div>
          <footer className="bg-gray-100 ">
            <div className="px-8 py-12 flex max-w-5xl mx-auto text-sm justify-between">
              <span className="justify-self-start">Art wallpaper: keep your device awake.</span>
              <span className="justify-self-end text-gray-500" >by <a href="https://www.linkedin.com/in/carisatong/" className="underline text-gray-900">Carisa</a></span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
