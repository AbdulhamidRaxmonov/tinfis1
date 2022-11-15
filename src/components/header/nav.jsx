import React from 'react';
import '../../css/header/nav.css';

export default function nav() {
  return (
    <div className='nav top-0 z-40'>
    <div className='w-100 d-flex justify-content-between align-items-center container-fluid '>
           <div>
               <a href=""><img width="180px" src="https://tinfis.uz/img/Logo.svg" alt="" /></a>
           </div>
           <div className='basicDiv2'>
                <form className='d-flex align-items-center' action="" >
                      <input className='ms-3 ' type="text" placeholder='Search...' />
                      <a className=' mb-1' href=""><img src="https://tinfis.uz/img/sm-search.svg" alt="" /></a>
                </form>         
           </div>
           <div>
               <a className='me-2' href=""><img width="30px" src="https://tinfis.uz/img/Favorites.png" alt="" /></a>
               <a className='me-2' href=""><img width="30px" src="https://tinfis.uz/img/cart.svg" alt="" /></a>
               <a className='me-2' href=""><img width="30px" src="https://tinfis.uz/img/profile.svg" alt="" /></a>
           </div>
    </div>
    <div className='w-100  d-flex '>
      <div className="d-flex align-items-center w-25 ms-3">
        <a href=""><img src="  https://tinfis.uz/img/catalogBlack.svg" alt="" />Категории</a></div>
        <div className=' alex1 d-flex align-items-center  w-100'>
          <ul className='d-flex  list-unstyled mt-3'>
         <li><a href=""><img width="25px" src="  https://tinfis.uz/img/percent.svg" alt="" />Акции</a></li>
         <li className='ms-5'><a href=""><img width="25px" src="    https://tinfis.uz/img/magazin.svg" alt="" />Магазины</a></li>
        <li className='ms-5'><a href=""><img width="25px" src="  https://tinfis.uz/img/star.svg" alt="" />Бренды</a></li> </ul>

        <div className='basicDiv3  content ms-5'>
          <div className='d-flex justify-content-center'>
            <div className='text-center'> <span>Скоро</span></div>
           </div>
           <div className=''>
              <img src="  https://tinfis.uz/img/airplane.svg" alt="" />
              <span className='ms-4 text-secondary'>Авиабилеты</span>
            </div>
        </div>

        <div className='basicDiv3'>
          <div className='d-flex justify-content-center'>
            <div className='text-center'> <span>Скоро</span></div>
           </div>
           <div className=''>
              <img src="  https://tinfis.uz/img/food.svg" alt="" />
              <span className='ms-4 text-secondary'>Авиабилеты</span>
            </div>


        </div>  <div className='basicDiv3'>
          <div className='d-flex justify-content-center'>
            <div className='text-center'> <span>Блюда</span></div>
           </div>
           <div className=''>
              <img src="    https://tinfis.uz/img/flower.svg" alt="" />
              <span className='ms-4 text-secondary'>Цветы</span>
            </div>
        </div>
        </div>
    </div>
</div>
  )
}
