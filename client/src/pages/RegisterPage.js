import {Link} from "react-router-dom";

export default function RegisterPage (){
    return(
    <form className="register">
        <h1>Créer un compte</h1>
        <input type="text" placeholder="Adresse Mail"/>
        <input type="text" placeholder="Identifiant"/>
        <input type="text" placeholder="Mot de Passe"/>
        <input type="text" placeholder="Confirmer le Mot de Passe"/>
        <button>Créer un compte</button>
        <div>
            <Link to="/login">J'ai déjà un compte</Link>   
        </div>
        <div>
            <Link to="">J'accepte les conditions générales d'utilisation</Link>   
        </div>
    </form>
    );
}