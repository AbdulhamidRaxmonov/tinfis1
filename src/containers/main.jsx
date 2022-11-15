import React, { Component } from 'react'
import FirstSection from '../components/main/firstSection'


var obj = {
    div1H1: "Нoвинки",
    div1Span: "183 товаров",
    div1A: "Показать все"
}

export default class main extends Component {
    
  render() {
    return (
        <div>
           <FirstSection data={obj}/>
        </div>
      )
  

  }
}
