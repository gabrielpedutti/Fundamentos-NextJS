import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'

//colocando o nome do arquivo entre [] se tornar um nome dinâmico na URL da navegação, ou seja, pode ser substituído por qualquer outra informção e cairá nessa página.

export default function ClientePorCodigo() {
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div> 
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}