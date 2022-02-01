import React from 'react';

function Footer() {
  return (
    <div className='main__footer'>
        <div className="main__footer--social-media">
            <a href=""> <i className='bx bxl-facebook-circle'></i>Facebook</a>
            <a href=""> <i className='bx bxl-instagram-alt' ></i>Instagram</a>
            <a href=""> <i className='bx bxl-twitter' ></i>Twitter</a>
         </div>
         <div className="main__footer--us">
             <a href="">About-us</a>
             <a href="">Contact-us</a>
         </div>
    </div>
  );
}

export default Footer;