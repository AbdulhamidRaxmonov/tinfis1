import React from "react";
import '../../css/header/headerDiv1.css';

function headerDiv1(){
    return (
        <div className="div1 w-100 d-flex align-items-center justify-content-between container-fluid">
             <div className="d-flex">
                 <div>
                      <img src="https://tinfis.uz/img/location.svg" alt="" />
                      <span className="text-white">Ташкент,Ташкентская область</span>
                 </div>
                 <div className="ms-3">
                     <img src="https://tinfis.uz/img/24,7.svg" alt="" />
                     <span className="text-white">+998 71 209 03 33</span>
                 </div>
             </div>
             <div>
                  <a  className="text-white me-2" href="">Кабинет продавца</a>
                  <a className="me-3" href=""><img width="35px" src="https://tinfis.uz/img/icons/help.svg" alt="" /><span className="text-white">Помощь</span></a>
                  <a href=""><img src="	https://tinfis.uz/ru.svg" alt="" /> <span className="text-white">RU</span></a>
             </div>
        </div>
    )
}
export default headerDiv1;
