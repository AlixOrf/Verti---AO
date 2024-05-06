import logo from './Images/logo-fond-vert.png';
export default function Post (){
  return (
    <div className="post">
      <div className="image">
        <img src={logo} alt="Image" />
      </div>
      <div className="texte">
        <h2>texte</h2>
        <p className="info">
          <a className="auteur">Alix Orfeuvre</a>
          <time>2024-05-06 15:37</time>
        </p>
        <p className="resume">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
);}