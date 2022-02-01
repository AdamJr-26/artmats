import React,{useState} from 'react';

function Category() {
    const [isHover, setHover] = useState(false)

    return (
    <div className='category'>
        <div className="category__Home">
            <p>Home</p>
        </div>
        <div className="category__list">
            <p onClick={()=>setHover(!isHover)} >Mediums <i className='bx bx-chevron-down' ></i></p>

            <ul className={isHover? '' : 'mouseOnMe'}>
                <li>
                    <a href="">watercolors</a>
                </li>
                <li>
                    <a href="">acrylic paints</a>
                </li>
                <li>
                    <a href="">graphite pencils</a>
                </li>
            </ul>
            
        </div>
    </div>
  );
}

export default Category;
