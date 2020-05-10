import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


class Ohje extends Component {


  render(){

    return(
     <div  className="form-container d-table-cell align-middle">

     <h2> Ohje rekisteröitymiseeen</h2>
     <p className="normal">
     Kaikki rekisteröitymisen kohdat ovat pakollisia.
     Rekisteröitymisnappula tulee esille vasta sitten, kun kaikki kohdat on oikein täytetty.
     </p>
     <p> Käyttäjätunnus </p>
     <p className="normal">
     <ul>
     <li>
        Käyttäjätunnuksen tulee olla 3-20 merkkiä pitkä.
     </li>
     <li>
         Käyttäjätunnus ei saa sisältää erikoismerkkejä, kuten /( ,.
      </li>

       <li>
          Kahta samannimistä käyttäjätunnusta ei voi tehdä.
        </li>
     </ul>
     </p>

     <p> Sähköposti </p>
          <p className="normal">
          <ul>
          <li>
             Sähköpostista tulee löytyä @ ja . -merkit
          </li>
            <li>
               Yhdellä sähköpostilla saa luoda vain yhden tunnuksen.
             </li>
          </ul>
          </p>


     <p> Salasana </p>
          <p className="normal">
          <ul>
          <li>
             Salasanan tulee olla vähintään 7 merkkiä pitkä
          </li>
          <li>
              Salasanan tulee sisältää pieniä ja isoja alkukirjaimia sekä numeroita
           </li>

            <li>
               Erikoismerkit on sallittu
             </li>
              <li>
                Uuden salasanan on täsmättävä ensimmäiseen salasanaan
              </li>
          </ul>
          </p>


          <p> Koiran valinta </p>
               <p className="normal">
               <ul>
               <li>
                  Aloitus koirarotu tulee valita vaihtoehdoista
               </li>
               <li>
                   Väri ja sukupuoli ovat oletuksissa, mutta niitä voi muuttaa mieleiseksi
                </li>

                 <li>
                    Koiran nimen tulee olla 3-20 merkkiä pitkä
                  </li>
               </ul>
               </p>
     </div>

    );
  }

}

export default Ohje;