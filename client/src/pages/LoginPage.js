import {Link} from "react-router-dom";
export default function LoginPage (){
    return(
    <form className="login">
        <h1>Se connecter</h1>
        <input type="text" placeholder="Identifiant"/>
        <input type="text" placeholder="Mot de Passe"/>
        <button>Se connecter</button>
        <div>
            <Link to="/register">Je n'ai pas de compte</Link>
        </div>

    </form>
    );
}