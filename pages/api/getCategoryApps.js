var gplay = require("google-play-scraper");

export default function handler(req, res) {
  const {
    query: { category },
  } = req;
  gplay
    .list({
      // category: gplay.category.MUSIC_AND_AUDIO,
      category: category,
      num: 10,
    })
    .then((data) => res.status(200).json({ data: data }));

  // res.status(200).json({ data: category });
}
