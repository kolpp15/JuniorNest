import React, { useState } from 'react';
import { Box }             from "@material-ui/core";
import { storage }         from "../../Firebase/config";
import { v4 as uuid }      from 'uuid';



export default function Upload() {
  const [fileUrl, setFileUrl] = useState([]);

  const readFiles = async (e) => {
    const file = e.target.files[0];
    const resumeId = uuid();
    const storageRef = storage.ref('files').child(resumeId);
    
    await storageRef.put(file);

    storageRef.getDownloadURL().then((url) => {
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
 



