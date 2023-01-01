import styles from '../styles/estiloModular.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function estiloModular() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
        <div>
            <div>
                <h1>Aqui tem o estilo global</h1>
            </div>
            {/* Se não utilizar o className como esta abaixo, não será interpretado o CSS. Usar "className="roxo"" só funcionará se fizer parte do CSS global. */}
            <div className={styles.roxo}>
                <h1>Aqui tem o estilo modular</h1>
            </div>
        </div>
        </Layout>
    )
}