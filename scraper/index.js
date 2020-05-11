const axios = require('axios').default;
const cheerio = require('cheerio');

axios.get('https://en.wikipedia.org/wiki/2019_NFL_Draft')
  .then(resp => {    
    const $ = cheerio.load(resp.data);
    const playerSelectionHeading = $('#Player_selections').parent()

    console.log(playerSelectionHeading.siblings('.wikitable.sortable').html())
  })
  .catch(err => {
    console.log(`Error: ${err}`)
  })
