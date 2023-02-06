import React from 'react'
import footer from '../styles/Footer.module.css'
function Footer() {
  return (
    
    <div className={footer.container}>
        <ul className={footer.list}>
            <li className={footer.li}>© 2023 Airbnb, Inc.</li>
            <li className={footer.li}>Gizlilik</li>
            <li className={footer.li}>Şartlar</li>
            <li className={footer.li}>Site haritası</li>
        </ul>
      
      <ul className={footer.list}>
        <li className={footer.li}>Türkçe (TR)</li>
        <li className={footer.li}>TRY </li>
        <li className={footer.li}>Destek ve kaynaklar</li>
      </ul>
    </div>
   
  )
}

export default Footer
