import data from '../../data/data.json'
import React from 'react'
import { Header } from '../../component/header/Header'
import { Card } from '../../component/card/Card';
import './Product.css'
export  function Product() {
  console.log(data);
  return (
    <div>
        <Header/>
        <main>
        <ul className='container flex flex-start'>
        {
          data.products.map(product => <li>
            <Card product={product}/>
          </li>)
        }
        </ul>
        </main>
    </div>
  )
}
