import React from 'react';
import Navbar from './components/navbar';
import Category from './components/category';
import Banner from './components/banner'
import Merchandise from './components/merchandise';
import Footer from './components/footer';
import './style/style.css'
function App() {
  return (
    <div className='main'>
      <Navbar />
      <Category />
      <Banner />
      <Merchandise />
      <Footer />
      <div className="main__backToTop">
      <a href=""><i className='bx bxs-chevrons-up' ></i></a>
     
      </div>
    </div>
  );
}

export default App;
