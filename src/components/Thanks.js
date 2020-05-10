import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';


class Thanks extends Component {

    state ={
        redirect: false
    }

    componentDidMount(){
       // Start counting when the page is loaded
        this.id = setTimeout(() => this.setState({ redirect: true }), 5000)
     }

      componentWillUnmount(){
           clearTimeout(this.id); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
      }

  render(){

    return(
     this.state.redirect
           ? <Redirect to="/" />
           :<div  className="form-container d-table-cell align-middle"> <p>Kiitos rekisteröitymisestä! Sinut ohjataan etusivulle 5 sekunnin kuluttua</p>
           </div>

    );
  }

}

export default Thanks;