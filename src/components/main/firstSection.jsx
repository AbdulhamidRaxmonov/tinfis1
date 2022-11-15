import React from 'react'
import '../../css/main/firstSection.css'

export default function firstSection(props) {
    console.log(props);
  return (
    <div className='section bg-danger mt-5'>
          <div className="d-flex align-items-center bg-info  justify-content-between container-fluid">
               <div className='div11 d-flex  align-items-center'>
                     <h1>{props.data.div1H1}</h1>
                     <span className='mt-2 ms-3'>{props.data.div1Span}</span>
                </div>  
                <div className='div22 '>
                      <a href="">{props.data.div1A}</a>
                </div>
          </div>
          <div className="">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner d-flex justify-content-center ">
                <div className='div34 carousel-item active'>
                <div class="div35 carousel-item  row d-flex">
                    <div className="div33 col-xl-2" >

                    </div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                </div>
                </div>
                <div className='div34 carousel-item'>
                <div class="div35 carousel-item  row d-flex">
                    <div className="div33 col-xl-2" >

                    </div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                </div>
                </div>
                
                <div className='div34 carousel-item'>
                <div class="div35 carousel-item  row d-flex">
                    <div className="div33 col-xl-2" >

                    </div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                    <div className="div33 col-xl-2"></div>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>        
          </div> 
    </div>
  )
}
