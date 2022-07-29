import React from 'react';
import Head from 'next/head';


//layout to wrap website. it has access to props children
const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>My Kind of Cruise App</title>
< meta name="description" content="Book you perfect cruise holiday!"></meta>    
      </Head>
      
      
      {children}
     
     
    </div>
  )
}

export default Layout;