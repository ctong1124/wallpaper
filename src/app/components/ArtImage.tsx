import Image from "next/image";

type ArtImage = {
  image: string;
  title: string;
  artistName: string;
}

export const ArtImage = ({
  image,
  title,
  artistName,
} : ArtImage) => (
  <Image
    src={image}
    alt={`${title} Painting by ${artistName}`}
    fill
    className='p-32'
    style={{ objectFit: 'contain' }}
    priority
  />
);

