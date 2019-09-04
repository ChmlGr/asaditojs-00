const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const URL = 'https://api.jikan.moe/v3/top/anime/1';

router.get('/', (req, res) => {
  return fetch(URL)
    .then(response => response.json())
    .then(topAnime => {
      const topList = topAnime.top.map(anime => {
        return {
          title: anime.title,
          score: anime.score,
          cover: anime.image_url,
        };
      });
      res.status(200).json(topList);
    })
    .catch(e => {
      console.log(e);
      res.status(500).send('Server error');
    });
});

module.exports = router;
