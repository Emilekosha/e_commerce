import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Recevez des offres exclusives par e-mail</h1>
      <p>Abonnez-vous à notre newsletter et restez informé</p>
      <div>
        <input type="email" placeholder='Votre identifiant de messagerie'/>
        <button>S'abonner</button>
      </div>
    </div>
  )
}

export default NewsLetter
