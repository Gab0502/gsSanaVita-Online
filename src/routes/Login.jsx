import { useState } from 'react';
import "../styles/Login.style.css"

function Login() {
  //hooks
  const [usuarios, setUsuarios] = useState({
    usuario: '',
    senha: '',
  });
  console.log(usuarios)
  // funções
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUsuarios({ ...usuarios, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:3000/user");
      if (response.ok) {
        const users = await response.json();
        console.log(users);
        const foundUser = users[usuarios.usuario];
        console.log("usuario",foundUser)
        if (foundUser && foundUser.senha === usuarios.senha) {
          const { senha, ...userDetails } = foundUser;
          console.log("User Details:", userDetails);
          console.log("oi")
  
          sessionStorage.setItem("usuarioLogado", JSON.stringify(userDetails));
          const [usuarioLogado]=useState(JSON.parse(sessionStorage.getItem("usuarioLogado")));
          console.log("user",usuarioLogado)
  
          setTimeout(() => {
          }, 3000);
        } else {
          setTimeout(() => {
            setUsuarios({
              usuario: "",
              senha: "",
            });
          }, 3000);
        }
      } else {
        setUsuarios({
          usuario: "",
          senha: "",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  
  

  return (
    <>
    <main className=''>
    <section className='central-box'>
    <img src="src\assets\SANA.png" id="foto" alt="User Profile" />
      
      
      <div className='login'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Login</h2>
          <input
            type="text"
            name="usuario"
            value={usuarios.usuario}
            placeholder="Digite seu usuario"
            onChange={handleChange}
          />
        </div>

        <div>
          <h2>Senha</h2>
          <input
            type="password"
            name="senha"
            value={usuarios.senha}
            placeholder="Digite sua senha"
            onChange={handleChange}
          />
        </div>
        <img src="" alt="" />

        <button type="submit">Logar</button>
      </form>
      </div>
      </section>
    </main>
    </>
  );
}

export default Login;
