import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

type Description = {
  id: string;
}

const createStringFromList = (list: string[]) => (
  list
    .map((word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(', ')
);

const extendPreset = presetHTML5.extend((tags) => ({
  ...tags,
  url: (node) => ({
    tag: 'a',
    attrs: node.attrs,
    content: [{
      tag: 'span',
      attrs: { style: 'text-decoration: underline'},
      content: node.content,
    }],
  }),
}));

export const Description = async ({
  id
} : Description) => {
  const paintingCall = await fetch(`https://www.wikiart.org/en/api/2/Painting?id=${id}&imageFormat=HalfHD`);
  const painting = await paintingCall.json();
  const { description, genres, styles, media, url, artistUrl } = painting;

  // to test with dummy data, comment all code above in this function and add to top of code:
  // import { paintingData } from './components/testData'
  // uncomment line below:
  // const { description, genres, styles, media, url, artistUrl } = paintingData;

  const genresString = createStringFromList(genres);
  const stylesString = createStringFromList(styles);
  const mediaString = createStringFromList(media);

  const processed = description ? bbobHTML(description.replaceAll('\n', '<br>'), extendPreset()) : description;

  return(
    <div className="text-gray-500 text-base leading-relaxed pt-8">
      <p dangerouslySetInnerHTML={{ __html: processed }} />
      <div className="pt-4">
        { genresString.length ? (
          <p>
            <span className="text-gray-900">Genre:&nbsp;</span>
            {genresString}
          </p>
        ): null}
        { stylesString.length ? (
          <p>
            <span className="text-gray-900">Style:&nbsp;</span>
            {stylesString}
          </p>
        ): null}
        { mediaString.length ? (
          <p>
            <span className="text-gray-900">Medium:&nbsp;</span>
            {mediaString}
          </p>
        ): null}
      </div>
      <div className="pt-4">
        { url && artistUrl ? (
          <p>
            Learn more about this work at:&nbsp;
            <a className="underline" href={`https://www.wikiart.org/en/${artistUrl}/${url}`}>WikiArt.org</a>
          </p>
        ): null}
      </div>
    </div>
  );
}
