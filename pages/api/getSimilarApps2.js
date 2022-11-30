var gplay = require("google-play-scraper");

export default function handler(req, res) {
  const {
    query: { category },
  } = req;
  gplay
    .list({
      category: category,
      num: 10,
    })
    .then((data) => res.status(200).json({ data: data }));
}
