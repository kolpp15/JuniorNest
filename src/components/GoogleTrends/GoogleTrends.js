import React from "react";
// import ReactDOM from "react-dom";
// import Script from "react-load-script";
// // import googleTrends from 'google-trends-api';
// import { Box, Input } from "@material-ui/core";
import Safe from "react-safe"


// const googleTrends = require('google-trends-api')

// const fetchTrends = () => {
//     googleTrends.realTimeTrends({
//       geo: 'US',
//       category: 'all',
//     }, function(err, results) {
//       if (err) console.log('oh no error!', err);
//       else console.log(results);
//     });
// }


export default function GoogleTrends() {
  return (
    <div>


    
      <Safe.script src="https://use.typekit.net/foobar.js"></Safe.script>
      <Safe.script>{
        `try{Typekit.load({ async: true });}catch(e){}`
      }
      </Safe.script>

      



    </div>
  )
}


