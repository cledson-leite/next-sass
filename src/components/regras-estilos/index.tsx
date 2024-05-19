import './styles.sass'

export const RegraEstilo = () => {
    return (
        <>
            <div className='nesting'>
                <p>Primeiro Paragrafo</p>
                <p>Segundo paragrafo</p>
            </div>
            <p>Terceiro paragrafo</p>
            <main className='lista-nesting'>
                <h2>Titulo Lista Nesting</h2>
                <p className='p-vermelho'>Paragrafo Vermelho</p>
                <p>Paragrafo comum</p>
            </main>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            <ol>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ol>
            <a href="#">Clique em mim</a>
            <div className="container">
                <p className="container-content">constent 1</p>
                <p className="container-content">constent 2</p>
                <p className="container-content">constent 3</p>
            </div>
            <h1 className="title">Titulo Placeholder</h1>
            <h2 className="sub-title">SubTitulo Placeholder</h2>
        </>
    )
}