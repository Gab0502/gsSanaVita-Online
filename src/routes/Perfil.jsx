import { useState, useEffect } from 'react';
import "../styles/perfil.style.css";

function Perfil() {
  // Estado para armazenar as informações do usuário logado
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [userIcon, setUserIcon] = useState(null);

  // Efeito para carregar as informações do usuário do sessionStorage
  useEffect(() => {
    try {
      const userFromStorage = JSON.parse(sessionStorage.getItem('usuarioLogado'));

      if (userFromStorage) {
        setUsuarioLogado(userFromStorage);
        setUserIcon(userFromStorage.foto);
      }
    } catch (error) {
      console.log('no login');
    }
  }, []);

  // Renderizar informações com base no status do login
  return (
    <>
      <main className='bg-cinza'>
        {usuarioLogado ? (
          <div className='profile'>
            <h2>Olá {usuarioLogado.nome}</h2>
            <img src={`src/assets/${userIcon}`} alt="User Profile" />
            <h3>Email: {usuarioLogado.email}</h3>
            <h3>Data de Nascimento: {usuarioLogado.dataNascimento}</h3>
            <h3>Gênero: {usuarioLogado.genero}</h3>
            {usuarioLogado.status === "p" ? (
              // Renderizar informações para pacientes
              <div>
                <h3>Status: Paciente</h3>
                {Object.keys(usuarioLogado.visitas).length > 0 ? (
                  <>
                    <h3>Visitas:</h3>
                    <ul>
                      {Object.entries(usuarioLogado.visitas).map(([data, visita]) => (
                        <li key={data}>
                          {`${data}: ${visita.local}, ${visita.descricao}`}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>Nenhuma visita registrada ainda.</p>
                )}
                {Object.keys(usuarioLogado.resultados).length > 0 ? (
                  <>
                    <h3>Resultados:</h3>
                    <ul>
                      {Object.entries(usuarioLogado.resultados).map(([data, resultado]) => (
                        <li key={data}>
                          {`${data}: ${resultado.nome}, `}
                          {resultado.link ? (
                            <a href={`src/assets/pdfs/${resultado.link}`} target="_blank" rel="noopener noreferrer">
                              Ver Resultado (PDF)
                            </a>
                          ) : (
                            <span>Sem link disponível</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p>Nenhum resultado disponível ainda.</p>
                )}
              </div>
            ) : usuarioLogado.status === "d" ? (
              // Renderizar informações para médicos
              <div>
                <h3>Status: Doutor</h3>
                {/* Renderizar outras informações específicas para doutores */}
              </div>
            ) : (
              // Renderizar informações para outros casos
              <div>
                <h3>Status: Desconhecido</h3>
              </div>
            )}
          </div>
        ) : (
          // Caso não haja usuário logado, redirecione para a página de login
          <p>Usuário não autenticado. Redirecionando para a página de login...</p>
        )}
      </main>
    </>
  );
}

export default Perfil;
