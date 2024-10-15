// 'use client';
import Image from "next/image";

type ArtImage = {
  image: string;
  title: string;
  artistName: string;
  width: number;
  height: number;
}

export const ArtImage = ({
  image,
  title,
  artistName,
  width,
  height,
} : ArtImage) => {
  console.log('width', width, 'height', height);
  return(
    <Image
      src={image}
      alt={`${title} Painting by ${artistName}`}
      fill
      className='p-32'
      style={{ objectFit: 'contain' }}
      priority
      // placeholder='blur'
      // blurDataURL={`https://craftypixels.com/placeholder-image/800x200/ececec/ececec`}
    />
  );
}
