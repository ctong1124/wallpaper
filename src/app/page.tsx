import Image from "next/image";

export default async function Home() {
  let data = await fetch(`https://www.wikiart.org/en/Api/2/login?accessCode=${process.env.API_ACCESS_CODE}&secretCode=${process.env.API_SECRET_CODE}`);
  let { SessionKey } = await data.json();

  let paintingsCall = await fetch(`https://www.wikiart.org/en/api/2/MostViewedPaintings?imageFormat=HD&authSessionKey=${SessionKey}`);
  let popularPaintings = await paintingsCall.json();
  const randomPainting = popularPaintings?.data?.[Math.floor(Math.random() * popularPaintings.data.length)];

  const {
    title,
    artistName,
    completitionYear,
    width,
    height,
    image,
  } = randomPainting;
  console.log('randomPainting', randomPainting, title, artistName, completitionYear, width,height, image);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello world</h1>
        <Image
          src={image}
          alt="Next.js logo"
          width={width}
          height={height}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Art wallpaper
      </footer>
    </div>
  );
}
