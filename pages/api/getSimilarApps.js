var gplay = require("google-play-scraper");

export default function handler(req, res) {
  const {
    query: { appId },
  } = req;

  gplay
    .similar({ appId: appId, num: 10 })
    .then((data) => res.status(200).json({ data: data }));
}
