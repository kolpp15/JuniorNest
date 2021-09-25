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

  // const getFileUrl = () => {
  //   const fileRef = storage.database().ref('files').child('daily');
  //   fileRef.on('value', (snapshot) => {
  //     const fileUrls = snapshot.val();
  //     const urls = [];
  //     for (let resumeId in fileUrls) {
  //       urls.push({ resumeId, url: fileUrls[resumeId] });
  //     }
  //     const newState = [...fileUrl, ...urls];
  //     setFileUrl(newState);
  //   });
  // };
  // const deleteFile = (resumeId) => {
  //   const storageRef = storage.ref('files').child(resumeId);
  //   const fileRef = storage.database().ref('files').child(resumeId);
  //   storageRef.delete().then(() => {
  //     fileRef.remove();
  //   });
  // };
  // useEffect(() => {
  //   getFileUrl();
  // }, []);

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center"> 
          Resume:
      </Box>
      <input type="file" onChange={readFiles} />
      <embed src={fileUrl} alt="your resume" width="100%" height="100%"/>    

    </div>
  );
  // return (
  //   <div>
  //     <h1>Upload Resume</h1>
  //     <input type="file" onChange={readFiles} />
  //     {fileUrl
  //       ? fileUrl.map(({ resumeId, url }) => {
  //           return (
  //             <div key={resumeId}>
  //               <embed src={url} alt="your resume" width="80px" height="100px"/>
  //               <button onClick={() => deleteFile(resumeId)}>Delete</button>
  //             </div>
  //           );
  //         })
  //       : ''}
  //   </div>
  // );
}
 



