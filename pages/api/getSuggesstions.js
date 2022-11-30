var gplay = require("google-play-scraper");

export default function handler(req, res) {
  const {
    query: { query },
  } = req;

  gplay
    .suggest({ term: query })
    .then((data) => res.status(200).json({ data: data }));
}
