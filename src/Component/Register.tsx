/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import React from 'react';
import { useHistory } from 'react-router-dom';
import noteApp from './noteApp';
import firebase from 'firebase';


export interface RegisterProps {



}

export interface RegisterState {
  adresse: string,
  password: string,
  stayConnected: boolean
}

class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      adresse: "a",
      password: "b",
      stayConnected: true

      };
      this.connectionClick = this.connectionClick.bind(this);

      this.emailRef = React.createRef();
      this.passwordRef = React.createRef();
      this.stayConnectedRef = React.createRef();



  }

  connectionClick(){

    firebase.auth().signInWithEmailAndPassword(this.state.adresse,this.state.password)
    .then((_userCredential) => {
      const history = useHistory()

      history.push('/noteApp')

      //CONNECTION REUSSI FAIT DE QUOI POUR PASSER A LA PROCHAINE PAGE
      //Utiliser les routes pour passer à la page de l'app.
      //Envoyer le ID de l'utilisateur connecté a l'app.
    })
    .catch((error) =>{
      //CONNECTION PAS REUSSIE, CHANGE DE QUOI DANS LA PAGE POUR LE DIRE A LUTILISATEUR
      //Message d'erreur pour afficher que l'utilisateur a pas reussi
    })


    console.log(this.state.adresse, this.state.password,
      this.state.stayConnected);
    console.log(noteApp)


  }

  onFieldChanged(){


  }

  render() {
    return (
      <body>
      <div id="login">
        <h3 className="text-center text-white pt-5"></h3>
        <div className="container">
           <div id="login-row" className="row justify-content-center align-items-center" >
             <div id="login-coid=lumn" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <div id="login-fom" className="form" >
                    <h3 className="text-center text-info">Bienvenue</h3>

                    <div className="form-goup">

                        <label htmlFor="email" className="text-info">Adresse Courielle: </label><br/>

                        <input ref={this.emailRef}
                               type="email"
                               name="email"
                               id="email"
                               className="form-control"
                               onChange={() => this.setState({adresse: this.emailRef.current.value})}
                               />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Mot de passe" className="text-info">Mot de passe:</label>
                      <input ref={this.passwordRef}
                             type="password"
                             name="password"
                             id="password"
                             className="form-control"
                             onChange= {() => this.setState({password: this.passwordRef.current.value})}/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info" ><span>Rester connecté</span><span>.
                        <input id="remember-me"
                               name="remember-me"
                               ref={this.stayConnectedRef}
                               type="checkbox"
                               onChange={() =>  this.setState({stayConnected: this.stayConnectedRef.current.checked})}></input></span></label><br/>
                      <div>


                      <input
                             type="submit"
                             name="submit"
                             className="btn btn-info "
                             value="Conncter"
                             onClick={this.connectionClick} />

                      </div>
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="#" className="text-info">Créer un compte</a>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </body>
    );
  }
}


export default Register;




