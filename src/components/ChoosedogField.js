import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';
import brindle from './kuvat/brindle.png'
import harmaa from './kuvat/harmaa.png'
import kerma from './kuvat/kerma.png'
import kultainen from './kuvat/kultainen.png'
import musta from './kuvat/musta.png'
import merkkivarinen from './kuvat/merkkivarinen.png'
import mustavalkoinen from './kuvat/mustavalkoinen.png'
import ruskeavalkoinen from './kuvat/ruskeavalkoinen.png'
import punavalkoinen from './kuvat/punavalkoinen.png'
import persikka from './kuvat/persikka.png'
import punainen from './kuvat/punainen.png'
import redmerle from './kuvat/redmerle.png'
import sesam from './kuvat/sesam.png'
import tummakulta from './kuvat/tummakulta.png'
import vaaleakulta from './kuvat/vaaleakulta.png'
import valkoinen from './kuvat/valkoinen.png'
import saksanpaimen from './kuvat/Saksanpaimenkoiraline.png'
import akita from './kuvat/akitaline.png'
import borzoi from './kuvat/borzoiline.png'
import bordercollie from './kuvat/bordercollieline.png'
import toyvillakoira from './kuvat/toyvillakoiraline.png'
import kultainennoutaja from './kuvat/kultainennoutajaline.png'



class ChoosedogField extends Component {
    constructor(props){
        super(props);

        this.state ={
            checked: '',
            colorcheck: '',
            sexchek:'uros',
            name: ''
        };

        this.onRadioChange = this.onRadioChange.bind(this);
        this.onRadioColorChange = this.onRadioColorChange.bind(this);
        this.onRadioSexChange = this.onRadioSexChange.bind(this);

    }

    onRadioChange = (e) => {
        this.setState ({checked: e.target.value, colorcheck: "1", sexcheck: "uros"});
    }

    onRadioColorChange = (e) =>{
        this.setState({colorcheck: e.target.value});
    }

   onRadioSexChange = (e) =>{
           this.setState({sexcheck: e.target.value});
       }
   stateChanged = state => {
    // update the internal state using the updated state from the form field
     this.setState({
      name: state.value
    }, () => this.props.onStateChanged(state));


     };

    validateName = (value) => {
            if (value.length < 3) throw new Error('Koiran nimen tulee olla vähintään 3 merkkiä pitkä')
            if (value.length > 20) throw new Error('Koiran nimen tulee olla enintään 20 merkkiä pitkä')
     };



    render(){

    const { type, validator, onStateChanged, children, ...restProps } = this.props;
    const { colorcheck } = this.state;

    const hidename = [colorcheck !== '' ? 'visible' : 'invisible'].join(' ').trim();

     const Choosecolor = (checked) =>{
             if(this.state.checked === "Saksanpaimenkoira"){
                 return(

                        <table>
                         <tbody>
                          <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                         <tr><td><img src={saksanpaimen} alt="saksanpaimenkoira" style={{padding: 5}}/></td>

                           <td>
                            <label>
                             <input type="radio" value="1" name="Musta" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange} />
                             <img src={musta} alt="musta" style={{padding: 5}}/>
                             Musta
                            </label><br />

                             <label>
                               <input type="radio" value="2" name="Merkkivarinen" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange} />
                               <img src={merkkivarinen} alt="merkkivarinen" style={{padding: 5}}/>
                               Merkkivärinen musta
                              </label><br />

                              <label>
                                 <input type="radio" value="3" name="Harmaa" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange} />
                                 <img src={harmaa} alt="harmaa" style={{padding: 5}}/>
                                 Harmaa
                               </label><br />
                            </td>
                          </tr>



                          </tbody>

                        </table>
                    )
             }
             else if(this.state.checked === "Akita"){
             return(
                <table>
                 <tbody>
                  <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                  <tr><td><img src={akita} alt="akita" style={{padding: 5}}/></td>


                   <td>
                    <label>
                     <input type="radio" value="1" name="Brindle" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange}/>
                     <img src={brindle} alt="brindle" style={{padding: 5}}/>
                     Brindle
                    </label><br />

                    <label>
                     <input type="radio" value="2" name="Punainen" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange}/>
                     <img src={punainen} alt="punainen" style={{padding: 5}}/>
                     Punainen
                    </label><br />

                     <label>
                      <input type="radio" value="3" name="Sesam" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange}/>
                      <img src={sesam} alt="sesam" style={{padding: 5}}/>
                      Sesam
                     </label><br />

                      <label>
                        <input type="radio" value="4" name="Valkoinen" checked={this.state.colorcheck === "4"} onChange = {this.onRadioColorChange}/>
                        <img src={valkoinen} alt="valkoinen" style={{padding: 5}}/>
                        Valkoinen
                      </label><br />
                     </td>
                    </tr>
                  </tbody>
                </table>
             )
             }
             else if(this.state.checked === "Toyvillakoira"){
              return(
                 <table>
                  <tbody>
                   <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                   <tr><td><img src={toyvillakoira} alt="toyvillakoira" style={{padding: 5}}/></td>

                    <td>
                     <label>
                      <input type="radio" value="1" name="Harmaa" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange}/>
                      <img src={harmaa} alt="harmaa" style={{padding: 5}}/>
                      Harmaa
                     </label><br />

                     <label>
                      <input type="radio" value="2" name="Musta" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange}/>
                       <img src={musta} alt="musta" style={{padding: 5}}/>
                       Musta
                     </label><br />

                      <label>
                       <input type="radio" value="3" name="Persikka" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange}/>
                       <img src={persikka} alt="persikka" style={{padding: 5}}/>
                       Persikka
                      </label><br />

                       <label>
                         <input type="radio" value="4" name="Valkoinen" checked={this.state.colorcheck === "4"} onChange = {this.onRadioColorChange}/>
                         <img src={valkoinen} alt="valkoinen" style={{padding: 5}}/>
                         Valkoinen
                       </label><br />
                      </td>
                     </tr>
                   </tbody>
                 </table>
              )
              }
             else if(this.state.checked === "Bordercollie"){
              return(
                 <table>
                  <tbody>
                   <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                   <tr><td><img src={bordercollie} alt="bordercollie" style={{padding: 5}}/></td>

                    <td>
                     <label>
                      <input type="radio" value="1" name="Mustavalkoinen" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange}/>
                      <img src={mustavalkoinen} alt="mustavalkoinen" style={{padding: 5}}/>
                      Mustavalkoinen
                     </label><br />

                     <label>
                      <input type="radio" value="2" name="Ruskeavalkoinen" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange}/>
                      <img src={ruskeavalkoinen} alt="ruskeavalkoinen" style={{padding: 5}}/>
                      Ruskeavalkoinen
                     </label><br />

                      <label>
                       <input type="radio" value="3" name="Redmerle" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange}/>
                       <img src={redmerle} alt="red merle" style={{padding: 5}}/>
                       Red merle
                      </label><br />

                       <label>
                         <input type="radio" value="4" name="Punavalkoinen" checked={this.state.colorcheck === "4n"} onChange = {this.onRadioColorChange}/>
                         <img src={punavalkoinen} alt="punavalkoinen" style={{padding: 5}}/>
                         Punavalkoinen
                       </label><br />
                      </td>
                     </tr>
                   </tbody>
                 </table>
              )
              }
             else if(this.state.checked === "Venajanvinttikoira"){
              return(
                 <table>
                  <tbody>
                   <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                   <tr><td><img src={borzoi} alt="borzoi" style={{padding: 5}}/></td>

                    <td>
                     <label>
                      <input type="radio" value="1" name="Harmaa" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange}/>
                      <img src={harmaa} alt="harmaa" style={{padding: 5}}/>
                      Harmaa
                     </label><br />

                     <label>
                      <input type="radio" value="2" name="Kultainen" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange}/>
                       <img src={kultainen} alt="kultainen" style={{padding: 5}}/>
                       Kultainen

                     </label><br />

                      <label>
                       <input type="radio" value="3" name="Musta" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange}/>
                       <img src={musta} alt="musta" style={{padding: 5}}/>
                       Musta
                      </label><br />

                       <label>
                         <input type="radio" value="4" name="Valkoinen" checked={this.state.colorcheck === "4"} onChange = {this.onRadioColorChange}/>
                         <img src={valkoinen} alt="valkoinen" style={{padding: 5}}/>
                         Valkoinen
                       </label>
                       </td></tr>

                   </tbody>
                 </table>
              )
              }
              else if(this.state.checked === "Kultainennoutaja"){
               return(

                  <table>
                   <tbody>
                   <tr><td><p style={{padding:"0"}}>Valitse väri</p></td></tr>
                   <tr><td><img src={kultainennoutaja} alt="kultainennoutaja" style={{padding: 5}}/></td>

                     <td>
                      <label>
                       <input type="radio" value="1" name="Kerma" checked={this.state.colorcheck === "1"} onChange = {this.onRadioColorChange}/>
                       <img src={kerma} alt="kerma" style={{padding: 5}}/>
                       Kerma
                      </label><br />

                      <label>
                       <input type="radio" value="2" name="Kulta" checked={this.state.colorcheck === "2"} onChange = {this.onRadioColorChange}/>
                       <img src={kultainen} alt="kultainen" style={{padding: 5}}/>
                       Kulta
                      </label><br />

                       <label>
                        <input type="radio" value="3" name="Tummakulta" checked={this.state.colorcheck === "3"} onChange = {this.onRadioColorChange}/>
                        <img src={tummakulta} alt="tummakulta" style={{padding: 5}}/>
                        Tumma kulta
                       </label><br />

                        <label>
                          <input type="radio" value="4" name="Vaaleakulta" checked={this.state.colorcheck === "4"} onChange = {this.onRadioColorChange}/>
                          <img src={vaaleakulta} alt="vaaleakulta" style={{padding: 5}}/>
                          Vaalea kulta
                        </label>
                       </td>
                      </tr>
                    </tbody>
                  </table>
               )
               }

             else{
             return <p> Valitse ensin rotu!</p>
             }
         }

    return(
    <Fragment>
     <table label="Valitse koirarotu">
       <tbody>
        <tr>
         <td>
          <label>
           <input type="radio" value="Saksanpaimenkoira" checked={this.state.checked === "Saksanpaimenkoira"} onChange = {this.onRadioChange}/> Saksanpaimenkoira
          </label>
         </td>
         <td>
          <label>
           <input type="radio" value="Akita" checked={this.state.checked === "Akita"} onChange = {this.onRadioChange}/> Akita
          </label>
         </td>
         <td>
          <label>
           <input type="radio" value="Toyvillakoira" checked={this.state.checked === "Toyvillakoira"} onChange = {this.onRadioChange}/> Toyvillakoira
          </label>
         </td>
        </tr>
        <tr>
         <td>
          <label>
           <input type="radio" value="Bordercollie" checked={this.state.checked === "Bordercollie"} onChange = {this.onRadioChange}/> Bordercollie
          </label>
         </td>
         <td>
          <label>
           <input type="radio" value="Venajanvinttikoira" checked={this.state.checked === "Venajanvinttikoira"} onChange = {this.onRadioChange}/> Venäjänvinttikoira
         </label>
        </td>
        <td>
         <label>
          <input type="radio" value="Kultainennoutaja" checked={this.state.checked === "Kultainennoutaja"} onChange = {this.onRadioChange}/> Kultainennoutaja
         </label>
        </td>
       </tr>
       </tbody>
      </table>
        <p></p>
      <Choosecolor/>

      <div className={hidename}>

        <FormField type="text" validator={this.validateName} onStateChanged={this.stateChanged} {...restProps} />

        <p>Sukupuoli</p>
        <table>
        <tbody>
        <tr>
        <td>
        <label>
         <input type="radio" value="uros" name="uros" checked={this.state.sexcheck === "uros"} onChange = {this.onRadioSexChange} />

        Uros
        </label>
        </td>
        <td>
      <label>
         <input type="radio" value="narttu" name="narttu" checked={this.state.sexcheck === "narttu"} onChange = {this.onRadioSexChange} />

         Narttu
       </label>
       </td>
       </tr>
       </tbody>
       </table>
      </div>

      </Fragment>




      );
    }

}

ChoosedogField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  onStateChanged: PropTypes.func,
  minStrength: PropTypes.number,
  thresholdLength: PropTypes.number
};
export default ChoosedogField;