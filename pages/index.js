import React from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products!</h2>
        <p>Speaker of many variations</p>
      </div>

      <p>asdasdasd</p>
      <div className='products-container'>
        {/* {products ? console.log(products) : console.log("some wrong")} */}
        {products?.map( (product) => {
          <Product key={product._id} product={product}/>
        })}
      </div>

      <FooterBanner />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData }
  }
}


export default Home