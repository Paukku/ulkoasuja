import React, { Component } from 'react'
import FormField from './FormField'
import EmailField from './EmailField'
import PasswordField from './PasswordField'
import ChoosedogField from './ChoosedogField'
import { NavLink } from 'react-router-dom';


class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
         <p> {this.props.text}</p>
         <NavLink to="/">
         <button className="btn btn-primary text-uppercase px-3 mx-3 py-2" onClick={this.props.closePopup}>Kyllä</button>
         </NavLink>
        <button className="btn btn-cancel-primary text-uppercase px-3 mx-3 py-2" onClick={this.props.closePopup}>Ei</button>
        </div>
      </div>
    );
  }
}

class PopupReg extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
         <p> {this.props.text}</p>
         <NavLink to="/kiitos">
         <button className="btn btn-primary text-uppercase px-3 mx-3 py-2" onClick={this.props.closePopup}>Kyllä</button>
         </NavLink>
        <button className="btn btn-cancel-primary text-uppercase px-3 mx-3 py-2" onClick={this.props.closePopup}>Ei</button>
        </div>
      </div>
    );
  }
}

class JoinForm extends Component {

  // initialize state to hold validity of form fields
  state = {
     fullname: false,
     email: false,
     password: false,
     confirmpassword: false,
     passwordValue: '',  // Password value
     confirmpasswordValue: '', // Confirm password value
     dograce: false
    }

      constructor() {
        super();
        this.state = {
          showPopup: false,
          showPopupR: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

      togglePopupR() {
              this.setState({
                showPopupR: !this.state.showPopupR
              });
            }

  // higher-order function that returns a state change watch function
  // sets the corresponding state property to true if the form field has no errors
  fieldStateChanged = field => state => {
      switch (field) {
        case 'password':  // Set password value to state
          this.setState({ passwordValue: state.value })
          this.setState({ [field]: state.errors.length === 0 })
            break
        case 'confirmpassword':  // Set confirm password value to state and compare passwords
          this.setState({ confirmpasswordValue: state.value }, () => {
             if (this.state.passwordValue === this.state.confirmpasswordValue) {
                this.setState({ [field]: state.value })
                this.setState({ [field]: state.errors.length === 0 })
              }
              else {
               this.setState({ [field]: state.errors.length === 1 })
               this.setState({ [field]: state.errors = ['Salasanat ei täsmää'] })
               this.setState({ [field]: false })
            }
          })
            break
        default:
          this.setState({ [field]: state.errors.length === 0 })
      }
    }

  // state change watch functions for each field
  emailChanged = this.fieldStateChanged('email')
  fullnameChanged = this.fieldStateChanged('fullname')
  passwordChanged = this.fieldStateChanged('password')
  confirmpasswordChanged = this.fieldStateChanged('confirmpassword')
  dograceChanged = this.fieldStateChanged('dograce')



  render () {
    const { fullname, email, password, confirmpassword, dograce } = this.state
    const formValidated = fullname && email && password && confirmpassword && dograce

    // validation function for the fullname
    const validateFullname = value => {

      var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

      // List of "users"
      var users = ["Inna66", "Sanni", "Doglove", "Kello", "Rimpula"]

      if (value.length < 4) throw new Error('Käyttäjätunnus on liian lyhyt')
      if (value.length > 20) throw new Error('Käyttäjätunnus on liian pitkä')
      if(value.match(format)) throw new Error ('Käyttäjänimi ei saa sisältää erikoismerkkejä')

      for(let x = 0; x < users.length; x++) {
        if(value === users[x]) throw new Error('Käyttäjätunnus on jo käytössä')

      }

    }

    return (
      <div className="form-container d-table-cell align-middle">
        <form action="/" method="POST" noValidate>

          <div className="d-flex flex-row justify-content-between align-items-center px-3 mb-5">
            <legend className="form-label mb-0">Rekisteröidy</legend>
          </div>
          <div className="py-5 border-gray border-top border-bottom">

            <FormField type="text" fieldId="fullname" label="Käyttäjätunnus" placeholder="Anna käyttäjätunnus"
            validator={validateFullname} onStateChanged={this.fullnameChanged} required/>

            <EmailField fieldId="email" label="Sähköposti" placeholder="Anna sähköpostiosoite"
            onStateChanged={this.emailChanged} required/>

            <PasswordField fieldId="password" label="Salasana" placeholder="Anna salasana"
            onStateChanged={this.passwordChanged} thresholdLength={7} minStrength={3} required/>

             <FormField type="password" fieldId="confirmpassword" label="Salasana uudestaan" placeholder="Anna salasana uudelleen"
             onStateChanged={this.confirmpasswordChanged} required/>

             <p>Valitse koirarotu</p>
             <ChoosedogField fieldId="choosedog" label="Koiran nimi" placeholder="Anna koiralle nimi" onStateChanged={this.dograceChanged} required/>



           </div>





          {/** Show the form button only if all fields are valid **/}
           {formValidated && <button type="button" className="btn btn-primary text-uppercase px-3 mx-3 py-2" onClick={this.togglePopupR.bind(this)}>Liity
           {this.state.showPopupR ?
                       <PopupReg
                         text='Oletko varma antamistasti tiedoista?'
                         closePopup={this.togglePopup.bind(this)}
                           />
                                        : null
                                    }
           </button>}
           <button  type="button" className="btn btn-cancel-primary text-uppercase px-3 mx-3 py-2" onClick={this.togglePopup.bind(this)}>Peruuta

           {this.state.showPopup ?
            <Popup
              text='Haluatko varmasti peruuttaa?'
              closePopup={this.togglePopup.bind(this)}
                />
                             : null
                         }
            </button>


        </form>
      </div>
    )
  }

}

export default JoinForm