const got = require('got');
var fs = require('fs')


var minutes = 0.5, the_interval = minutes * 60 * 1000;
setInterval(function() {
  //console.log("API-check Pancakeswap");
  got.get('https://api.pancakeswap.info/api/v2/tokens/0x854B4c305554c5fa72353e31b8480c0e5128A152', {responseType: 'json'})
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    const data = res.body;
    console.log (data.data.price);
    fs.appendFile('log.txt', data.data.price + '\n', function (err) {
        if (err) {
            console.log('Error: ', err.message);
        } else {
            console.log('Data was save');
        }
      })
    //for(data.price of data) {
     // console.log(`Got user with id: ${data.price}`);
    //}
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });

}, the_interval);

