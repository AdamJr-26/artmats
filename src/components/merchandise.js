import React, {useState, useEffect} from 'react';

// dummy products

const products = [
     {
         id: '01',
        image01:'./imgs/prisma01.jpeg',
        image02:'./imgs/prisma02.jpeg',
        image03:'./imgs/prisma03.jpeg',
        title: 'Prismacolor Premier Thick Core Colored Pencil Set, 132-Colors',
        price: '4999',
    },
    {
        id: '02',
        image01:'./imgs/prisma01.jpeg',
        image02:'./imgs/prisma02.jpeg',
        image03:'../imgs/prisma03.jpeg',
        title: 'Prismacolor Premier Thick Core Colored Pencil Set, 132-Colors',
        price: '4999',
    },
    {
        id: '03',
        image01:'./imgs/prisma01.jpeg',
        image02:'./imgs/prisma02.jpeg',
        image03:'../imgs/prisma03.jpeg',
        title: 'Prismacolor Premier Thick Core Colored Pencil Set, 132-Colors',
        price: '4999',
    },
    {
        id: '04',
        image01:'./imgs/prisma01.jpeg',
        image02:'./imgs/prisma02.jpeg',
        image03:'../imgs/prisma03.jpeg',
        title: 'Prismacolor Premier Thick Core Colored Pencil Set, 132-Colors',
        price: '4999',
    },
]
    

function Merchandise() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        function fetchProduct(){
            // for (let i= 0; i <= products.length;i++){
            //     setProduct(products[i-1])
            // }
            products ? setProduct(products): setProduct([])
            return product
        }
        fetchProduct()
    },[products])

    const [isDisplay, setDisplay] = useState(false)
    const cardStyle ={
        display: "none",
    }

// console.log(product.image01);
  return (
    <div className='main__merchandise'>
        <div className="main__merchandise--title"><p>Beginner's Materials</p></div>

        <div className="main__merchandise--item-card" onMouseEnter={()=> setDisplay(!isDisplay)}  onMouseLeave={()=> setDisplay(!isDisplay)}>
        {product.map( prod => (
        <div className="image">
            <img key={product.id} className='product-poster' src={prod.image01} alt={product.title} />
            
            <div className="prod-description" >
           <h2 className='prod-title'>{prod.title} </h2>

           <h3 className='prod-price'>₱ {prod.price}</h3>
               <div className={isDisplay? "button": 'button isDisplay'}>
                   <button className='star'><i className='bx bx-star' ></i></button>
                   <button className='cart'><i className='bx bxs-cart-add'></i></button>
               </div>
            </div>
        </div>
        // <div className="hel">
        //     hello
        // </div>
            ))}
        
        </div>
        {/* {isDisplay && <div className="main__merchandise--product-description">
            <div className="close">
                <button><i className='bx bx-x' ></i></button>
            </div>
           <div className="imgs">
               <img src={isDisplay.image02} alt="image02" />
               <img src={isDisplay.image02} alt="image02" />
           </div>
           <h2 className='prod-title'>{isDisplay.title} </h2>
           <h3 className='prod-price'>{isDisplay.price}</h3>
               <div className="button">
                   <button><i className='bx bx-star' ></i></button>
                   <button><i className='bx bxs-cart-add'></i></button>
               </div>
            </div>} */}
    </div>
  );
}

export default Merchandise;
