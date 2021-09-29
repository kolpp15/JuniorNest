import React from 'react'
import Script from 'react-load-script';

export default function GoogleTrends2({ type, comparison, keyword, geo, time, property}) {
  const handleScriptLoad = () => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("widget"),
      type,
      {
        comparisonItem: comparison,
        category: 0,
        property: property
      },
      {
        exploreQuery: `q=${decodeURI(keyword)}&geo=${geo}&date=${time}&gprop=${property}`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };
  
  return (
    <Script 
      url="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"
      onLoad={handleScriptLoad}
    />
  )
}





// <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2674_RC03/embed_loader.js"></script> 

// <script type="text/javascript"> 

// trends.embed.renderExploreWidget("TIMESERIES", {
// "comparisonItem":[{"keyword":"/m/012l1vxv","geo":"CA","time":"today 12-m"}],
// "category":0,
// "property":""}, 
// {
// "exploreQuery":"q=%2Fm%2F012l1vxv&geo=CA&date=today 12-m",
// "guestPath":"https://trends.google.com:443/trends/embed/"
// }); 

// </script>