import "../styles/Home.style.css"


function Home() {

  return (
    <>
        <main>
            <section className="flex-generic">
                <section className="projeto">
                    <img src="src\assets\imgGeneric.jpg"></img>
                    <div className="row">
                        <h1 className="tittle">TITULO DA SOLUÇÃO</h1>
                        <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam doloribus eaque aperiam culpa modi, ad dolorem consequuntur aspernatur explicabo repellat totam libero possimus, eveniet consequatur! Cumque voluptates nisi corporis! Iusto?</p>
                    </div>
                    <button>Mais infos</button>
                </section>
                <section className="infos">
                    <article>
                        <h1>O que é a solução</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus eligendi deleniti, vitae illo, amet adipisci tenetur iure aperiam dolor magnam alias eos obcaecati a eaque! Reprehenderit iste nemo voluptatibus!
                        Maxime animi blanditiis omnis eligendi molestias ab quo recusandae veniam nobis nemo amet, quod corporis! Molestias laudantium minima beatae consequuntur assumenda reprehenderit numquam maiores quidem provident excepturi? Accusantium, dignissimos aliquam.</p>
                    </article>
                    <article>
                        <h1>O que ele fará</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem facilis quibusdam repellat delectus nesciunt consequatur mollitia excepturi asperiores ipsa! Pariatur possimus fugit culpa dolore ipsum nam tenetur exercitationem necessitatibus quia.
                        Odit animi architecto nostrum harum labore cum, itaque nesciunt eos quo incidunt! Inventore mollitia nihil quasi corporis, illum sint ab omnis quas quos commodi cum, voluptatibus, iure ratione placeat debitis!</p>
                    </article>
                    <article>
                        <h1>Como funcionará</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dignissimos iure nisi laudantium soluta harum necessitatibus, explicabo, quo esse possimus quibusdam amet, impedit numquam hic deserunt ipsum et vel ex!
                        Maxime nobis velit officiis cum facere perferendis, eveniet aperiam optio, eius libero sint et deleniti explicabo maiores incidunt possimus ad laboriosam tenetur, autem dolores accusamus! Non suscipit quibusdam obcaecati beatae!</p>
                    </article>
                </section>
            </section>
            <h1>VANTANGES</h1>
            <section className="row">
                <article className="row">
                    <img src="src\assets\genericIcon.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>01</h1>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti culpa neque unde est quis quo officia adipisci necessitatibus repellat aliquid, nostrum enim nisi non. Illum temporibus voluptas hic aliquid sit.</p>
                    </div>
                </article>
                <article className="row">
                    <img src="src\assets\genericIcon.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>02</h1>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium velit illum debitis, aut facere impedit ea soluta veniam assumenda aliquid autem modi! Quidem non fugit temporibus, eos quisquam ut voluptates?</p>
                    </div>
                </article>
                <article className="row">
                    <img src="src\assets\genericIcon.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1>03</h1>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi molestias ut? Ipsum, tempora ullam. Rem error accusantium mollitia corporis illo, a fugiat neque consequuntur, ratione nemo aperiam eius sapiente!</p>
                    </div>
                </article>
            </section>
        
        </main>
    </>
  )
}

export default Home
