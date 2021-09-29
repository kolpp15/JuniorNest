import React, { useState, useEffect } from 'react';
import { storage } from "../../Firebase/config";
import { Box } from "@material-ui/core";
import { v4 as uuid } from 'uuid';



export default function Upload() {
  const [fileUrl, setFileUrl] = useState([]);

  const readFiles = async (e) => {
    const file = e.target.files[0];
    const resumeId = uuid();
    const storageRef = storage.ref('files').child(resumeId);
    //const fileRef = storage.database().ref('files').child(resumeId);
    
    await storageRef.put(file);

    storageRef.getDownloadURL().then((url) => {
      //fileRef.set(url);
      //const newState = [...fileUrl, { resumeId, url }];
      //setFileUrl(newState);
      setFileUrl(url);
    });
  };

  return (
    <div>
      <Box> 
          Resume: <input type="file" onChange={readFiles} />
      </Box>
      <a href="{fileUrl}">
      <embed src={fileUrl} alt="your resume"/>    
      </a>
    </div>
  );

}
 



