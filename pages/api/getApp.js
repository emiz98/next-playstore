var gplay = require("google-play-scraper");

export default function handler(req, res) {
  const {
    query: { appId },
  } = req;

  gplay
    .app({ appId: appId })
    .then((data) => res.status(200).json({ data: data }));
}
