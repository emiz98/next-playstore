var gplay = require("google-play-scraper");

export default function handler(req, res) {
  gplay
    .list({
      category: gplay.category.MUSIC_AND_AUDIO,
      num: 10,
    })
    .then((data) => res.status(200).json({ data: data }));
}
