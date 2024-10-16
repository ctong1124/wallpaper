export const paintingData = {
  id: '57727444edc2cb3880cb7bf6',
  title: 'Mona Lisa',
  url: 'mona-lisa-1504',
  artistUrl: 'leonardo-da-vinci',
  artistName: 'Da Vinci Leonardo',
  artistId: '57726d85edc2cb3880b48ccd',
  completitionYear: 1519,
  dictionaries: [
    '57726b51edc2cb3880ad75e0',
    '57726b4eedc2cb3880ad6ee0',
    '57726bcdedc2cb3880ae733e',
    '57726b4eedc2cb3880ad6ff8',
    '57726bcdedc2cb3880ae7496',
    '57726b4fedc2cb3880ad70b0'
  ],
  location: 'FlorenceItaly',
  period: null,
  serie: null,
  genres: [ 'portrait' ],
  styles: [ 'High Renaissance' ],
  media: [ 'oil', 'panel', 'wood', 'poplar' ],
  sizeX: 53,
  sizeY: 77,
  diameter: null,
  galleries: [ 'Louvre, Paris, France' ],
  tags: [ 'female-portraits', 'Mona-Lisa', 'Lady' ],
  description: 'One of the most iconic and recognizable paintings in the world is the [i]Mona Lisa[/i] (ca. 1503-1519) painted by Leonardo da Vinci. The unique appeal of the portrait lies in its enigmatic nature, Mona Lisa’s smile radiates mystery, sensuality and contentment. This was achieved through sfumato, Leonardo’s painting technique that softened the transition between colors. This depth and complexity of expression is the reason the [i]Mona Lisa[/i] is regarded as the pinnacle of portraiture. The interest in the portrait was further amplified by its mysterious history: the identity of the sitter, who commissioned the painting, how long Leonardo worked on the portrait and how it entered the French royal collection are all topics of scholarly debate. \n' +
    '\n' +
    'It is thought that the sitter was Lisa del Giocondo, the wife of a wealthy Florentine merchant Francesco del Giocondo. For this reason, the painting is sometimes called [i]La Gioconda[/i]. The earliest identification of the painting was provided by the Renaissance art historian [url href=https://www.wikiart.org/en/giorgio-vasari]Giorgio Vasari[/url]. In Vasari’s 1550 biography of Leonardo, he wrote about the magnificent portrait of Lisa del Giocondo, which Leonardo worked on between 1503 and 1506. Many were skeptical of Vasari’s account; however, a 2005 discovery at the University of Heidelberg provided compelling new evidence that confirms Vasari’s assertion. In a volume written by the ancient philosopher Cicero from 1477, there was a handwritten marginal by Leonardo’s contemporary, the secretary and assistant to Niccolò Machiavelli, Agostino Vespucci. In the note dated October 1503, Vespucci praises Leonardo’s skill by comparing him to the Greek and painter [url href=https://www.wikiart.org/en/apelles]Apelles[/url], and states that Leonardo is working on a portrait of Lisa del Giacondo.\n' +
    '\n' +
    'The [i]Mona Lisa[/i] was the earliest example in Italian portraiture that portrayed the sitter in a half-length format. Leonardo presented a new artistic formula: the figure is shown at half-length sitting in armchair in front of a [i]loggia[/i] - a gallery or room with one or more open sides. The incorporation of the [i]loggia[/i] allowed Leonardo to present an imaginary landscape as the backdrop of the portrait. This significant innovation influenced Leonardo contemporaries: [url href=https://www.wikiart.org/en/raphael]Raphael[/url] adopted the composition and pose in his portrait [url href=https://www.wikiart.org/en/raphael/portrait-of-a-lady-with-a-unicorn-1506][i]Young Woman with Unicorn[/i][/url] (ca. 1506). Still it is important to note that Leonardo was indebted to Flemish portraiture of the second half of the 15th century, particularly the portraits of [url href=https://www.wikiart.org/en/hans-memling]Hans Memling[/url] such as [url href=https://www.wikiart.org/en/hans-memling/barbara-de-vlaenderberch-1475][i]Portrait of Barbara van Vlaendenbergh[/i][/url] (ca. 1470-1472) and [url href=https://www.wikiart.org/en/hans-memling/portrait-of-a-man-holding-a-coin-of-the-emperor-nero-1474][i]Man with a Roman coin[/i][/url] (ca. 1480).\n' +
    '\n' +
    'Leonardo spent his final years in France, where his patron the King of France, Francis I, purchased [i]Mona Lisa[/i] for the royal French collection. From 1797, the portrait is on permanent display at the Louvre and is the crown jewel of the museum collection. On the morning of August 22 1911, Louvre employees were shocked to discover that the painting was stolen the previous night. Two years later, Louvre employee Vincenzo Peruggia was identified as the thief. Peruggia claimed his motives were patriotic: he believed Leonardo’s masterpiece belonged in Italy and was caught trying to sell the painting in Florence. After its discovery, the [i]Mona Lisa[/i] was exhibited throughout Italy before its celebratory return to the Louvre in 1914.',
  width: 544,
  image: 'https://uploads6.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG!HalfHD.JPG',
  height: 800
};

export const paintingsData = [{
  id: '5772758fedc2cb3880cead4e',
  title: 'At the Moulin Rouge, The Dance',
  url: 'at-the-moulin-rouge-the-dance-1890',
  artistUrl: 'henri-de-toulouse-lautrec',
  artistName: 'Henri de Toulouse-Lautrec',
  artistId: '57726d86edc2cb3880b48f5d',
  completitionYear: 1890,
  width: 1040,
  image: 'https://uploads5.wikiart.org/images/henri-de-toulouse-lautrec/at-the-moulin-rouge-the-dance-1890.jpg!HalfHD.jpg',
  height: 800
},
{
  id: '5772788bedc2cb3880d82158',
  title: 'Boy and Girl gazing at the Moon',
  url: 'boy-and-girl-gazing-at-the-moon-1926',
  artistUrl: 'norman-rockwell',
  artistName: 'Norman Rockwell',
  artistId: '57726d8aedc2cb3880b498e3',
  completitionYear: 1926,
  width: 663,
  image: 'https://uploads6.wikiart.org/images/norman-rockwell/boy-and-girl-gazing-at-the-moon-1926.jpg!HalfHD.jpg',
  height: 800
}
];



export const paintingAfterDelay = async () => {
  new Promise(resolve => {
    setTimeout(() => resolve(paintingData), 2000);
  });
}

