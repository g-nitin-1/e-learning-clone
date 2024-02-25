import React,{useContext} from 'react'
import Title from '../components/Title'
import OffersCard from '../components/page-components/OffersCard'
import { offerList, moreOffersList } from '../db/OffersList'
import { ThemeContext } from '../context/themeContext'

export default function Offers({offersRef, showOffers, handleShowOffers}) {
  const {theme} = useContext(ThemeContext);
  return (
    <section ref={offersRef} className="offers container container-md p-2">
      <Title classes={"subtitle text-center mb-4"} text="Here's what you get"/>
      
      <div className={`offers-container ${theme}`}>
      {offerList.map((offer,index) => <OffersCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text}></OffersCard>)}
      </div>
      {showOffers && (<div className={`offers-container ${theme}`}>
      {moreOffersList.map((offer,index) => <OffersCard key={index} icon_1={offer.icon_1} title={offer.title} text={offer.text}></OffersCard>)}
      </div>)}
      <a 
      onClick={handleShowOffers} 
      style={{cursor:"pointer", textDecoration:"underline"}}>
      <h4 className="text-center text-primary mt-2">
      {showOffers ?"Less":"More..."}
      </h4>
      </a>
      </section>
  )
}
