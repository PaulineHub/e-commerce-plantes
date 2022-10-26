import React from 'react'
import { Link } from 'react-router-dom'
// import ProductItem from './ProductItem'

const BestSellerSection = () => {
  // <ProductItem/> a linker dans le carousel

  return (
    <>
      <section className='product-slider-section'>
        <div className='description-product-slider-section'>
          <h3>Nos meilleures ventes</h3>
          <p>Peuplez votre maison avec nos plantes les plus appréciées.</p>
          <Link to='/products'>
            <button className='btn btn--product-slider'>
              <div className='btn-text'>Magasiner</div>
              <div className='btn-chevron'>
                <i className='fas fa-chevron-right'></i>
                <i className='fas fa-chevron-right'></i>
              </div>
            </button>
          </Link>
        </div>
        <div id='carousel-ctn'>
          <div className='arrow-wrapper'>
            <div className='arrows'>
              <i className='fas fa-chevron-left' data-js-left></i>
              <i className='fas fa-chevron-left' data-js-left></i>
            </div>
            <div className='arrows'>
              <i className='fas fa-chevron-right' data-js-right></i>
              <i className='fas fa-chevron-right' data-js-right></i>
            </div>
          </div>
          <div className='product-slider-wrapper' data-js-products-wrapper></div>
        </div>
      </section>
    </>
  )
}

export default BestSellerSection
