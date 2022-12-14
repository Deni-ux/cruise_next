import React from 'react';
import Head from 'next/head';
import NavBar from './Navbar';
import Footer from './Footer';



//layout to wrap website. it has access to props children
const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>My Kind of Cruise App</title>
< meta name="description" content="Book you perfect cruise holiday!"></meta>    
      </Head>
      
      <NavBar />
      {children}
     <Footer />
     
    </div>
  )
}

export default Layout;