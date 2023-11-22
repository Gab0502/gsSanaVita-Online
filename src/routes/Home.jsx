import "../styles/Home.style.css"


function Home() {

  return (
    <>
        <main className="">
            <section className="flex-generic">
                <section className="projeto">
                    <img src="src/assets/stockExam.jpg"></img>
                    <div className="row">
                        <img src="src\assets\SANA2.png" alt="" class="imgName"/>
                        <p className="text">Centralize sua saúde digitalmente. Simplifique e personalize a gestão de exames e históricos médicos em uma plataforma inovadora, promovendo cuidados personalizados e eficientes.</p>
                    </div>
                    <button>Mais infos</button>
                </section>
                <section className="infos">
                    <article className="">
                        <h1 className="texto-laranjaEscuro">O que é a solução</h1>
                        <p className="">
A SanaVita é uma plataforma de gestão de saúde inovadora, unificando resultados de exames, históricos médicos e consultas em um ambiente digital acessível. Mais do que eficiente, é uma abordagem centrada no paciente, oferecendo compreensão e personalização nos cuidados de saúde.</p>
                    </article>
                    <article className="">
                        <h1 className="texto-laranjaEscuro">O que ele fará</h1>
                        <p className="">
A SanaVita simplificará a gestão da saúde, centralizando resultados de exames, históricos médicos, consultas e visitas a instituições de saúde em uma plataforma digital acessível. Além disso, ela possibilitará que médicos acessem facilmente o histórico completo de seus pacientes, promovendo uma abordagem mais integrada e personalizada nos cuidados de saúde. </p>
                    </article>
                    <article className="">
                        <h1 className="texto-laranjaEscuro">Como funcionará</h1>
                        <p className="">A SanaVita oferecerá uma experiência simples e integrada, unificando resultados de exames, históricos médicos e consultas em uma plataforma acessível. Médicos terão fácil acesso aos históricos de seus pacientes, permitindo uma abordagem personalizada nos cuidados de saúde. A interação entre médicos e pacientes será coordenada pelo hospital, que cadastrará os médicos na plataforma para garantir a segurança dos dados. Quando um médico for designado para um paciente, o hospital informará o sistema, autorizando o acesso apenas aos dados desse paciente, assegurando uma integração segura e privada.</p>
                    </article>
                </section>
            </section>
            <h1>VANTAGENS</h1>
            <section className="row">
                <article className="row">
                    <img src="src\assets\Online Doctor-rafiki.svg" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>01</h1>
                        <h3>Resolvendo papelada</h3>
                        <p> Centralizando exames e históricos médicos digitalmente, promove eficiência, acessibilidade e uma experiência livre de documentos físicos.</p>
                    </div>
                </article>
                <article className="row">
                    <img src="src\assets\Medicine-bro.svg" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>02</h1>
                        <h3>Simplificando a medicina</h3>
                        <p> Com arquivos digitais, oferece aos médicos acesso fácil a informações detalhadas dos pacientes, permitindo cuidados personalizados e informados.</p>
                    </div>
                </article>
                <article className="row">
                    <img src="src\assets\Medical prescription-rafiki.svg" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>03</h1>
                        <h3>Historico de visitas</h3>
                        <p>O plano de saúde controla eficientemente o histórico de visitas do usuário, centralizando informações digitalmente para uma gestão de cuidados mais eficaz.</p>
                    </div>
                </article>
            </section>
        
        </main>
    </>
  )
}

export default Home
