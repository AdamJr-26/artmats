import React, {useState,useEffect} from 'react';

function Navbar() {
    const [isExpand, setExpand] = useState(false);
    
  return (
    <div className={isExpand ? 'main__navbar expandNavbar' : 'main__navbar '}>
        <div className="main__navbar--logo">
            <p>ArtMats</p>
        </div>

        <div className="main__navbar--account">
            <div className="burger">
                {/* <i class='bx bx-x'></i>  'bx bx-menu'*/}
                    <button onClick={()=> setExpand(!isExpand)} className={isExpand ? 'btnactive': ''}><i className = {isExpand?  'bx bx-x': 'bx bx-menu'}></i></button>
            </div>
            <ul className={isExpand ? 'expand' : ''}>
                {console.log('expand:', isExpand)}
                <li >
                    <a className='log-in'href="/sign-in">Log In</a>
                </li>
                <li >
                    <a className='sign-up' href="/sing-up">Sign-Up</a>
                </li>
            </ul>
        
        </div>
        
    </div>
  );
}

export default Navbar;
