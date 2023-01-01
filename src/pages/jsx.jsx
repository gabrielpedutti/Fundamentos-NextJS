import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um Conceito Central</h1> //Mostrando que é possível armazenar um trecho HTML em uma variável

    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2> //Mostrando que é possível retornar em uma função um trecho HTML com ação JavaScript dentro dele.
    }
    
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                <p>
                    {JSON.stringify({ nome: 'João', idade: 30 })}
                </p>
            </div>
        </Layout>
    )
}