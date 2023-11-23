import "../styles/footer.style.css"
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <>
        <footer className="bg-azul">
          <div className="row bg-azul">
            <div>
              <h3 className="texto-laranjaEscuro">Links rapidos</h3>
              <Link to="/">
                Home
              </Link>
              <Link to="/login">Login</Link>

            </div>
            <div>
              <h3 className="texto-laranjaEscuro">Contato</h3>
              <p className="texto-branco">+55 11 946325666</p>
              <p className="texto-branco">sanaVita@gmail.com</p>
            </div>
            <div className="column">
            <h3 className="texto-laranjaEscuro">Redes Sociais</h3>
            <img src="	https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
            <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"/>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
