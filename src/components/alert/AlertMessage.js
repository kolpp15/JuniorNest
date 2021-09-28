// import React, { useState } from "react";
// import { useAlert } from "react-alert";

// export default function AlertMessage(props) {

//   const alert = useAlert();

//   return (
//     <>

//       <button
//         onClick={() => {
//           alert.success("Success alert!");
//         }}
//       >
//         Success alert
//       </button>
     
//     </>
//   );
// }




// import React from "react";
// import { render } from "react-dom";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-snackbar-material-ui";
// import Home from "./Home";

// // optional configuration
// const options = {
//   // you can also just use 'bottom center'
//   position: positions.BOTTOM_CENTER,
//   timeout: 5000,
//   offset: "30px",
//   // you can also just use 'scale'
//   transition: transitions.SCALE
// };

// const UserApplyJob = () => (
//   <AlertProvider template={AlertTemplate} {...options}>
//     <AlertMessage />
//   </AlertProvider>
// );

// render(<App />, document.getElementById("root"));
