// import React, { useState, useEffect } from "react";


// function Hello() {
//     const [data, setData] = useState([]);
    

//   const getData = () => {
//     fetch("data.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function (myJson) {
//         console.log(myJson);
//         setData(myJson);
//       });
//   };
//   useEffect(() => {
//     getData();
//   }, []);
    
    
//   return (
//       <div className="App">
//           hello
//       {data && data.length > 0 && data.map((cruises) => <p key ={id}>{cruises[0].name}</p>)}
//     </div>
//   );
// }

// export default Hello

 //OPTION 1
  // function pullData() {
  //   fetch(apiUrl)
  //.then(response => response.json())
  //.then(responseData => 
  //displayData = responseData.map(function(cruises){
  //     return(
    //    <h1 key={cruises.id}>{cruises.name}</h1>
  //)
  //})
  //console.log(responseData))
  //setShowCruises(displayData);
  // }
  
  // //OPTION 2 ASYNC FUNCTION
  // async function pullData() {
  //   const response = await fetch(apiUrl);
  //   const responseData = await response.json()
  //    displayData = responseData.map(function(cruises){
  //     return(
  //      <h1 key={cruises.id}>{cruises.name}</h1>
  // )
  // })
  //   console.log(responseData);
  // setShowCruises(displayData);
   
  // }
  //return( {showCruises}) in function About
  
  
