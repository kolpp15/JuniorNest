import React from "react";
import GoogleTrends from "./GoogleTrends";

export default function App(props) {
  let jobTitle = props.item[0].title

  if (!jobTitle) {
    jobTitle = 'jobs'
  } else {
    jobTitle = props.item[0].title
  }
  
  return (
    <>

      <div id="widget">
        <GoogleTrends
          type="RELATED_TOPICS"
          keyword={jobTitle}
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />
      
        <GoogleTrends
          type="GEO_MAP"
          keyword={jobTitle}
          url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
        />

      </div>
    </>
  );
}