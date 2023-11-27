import { Footer } from '../../components/footer/footer'
import { FormStyled } from './styles.js'

export function Form() {
    return (
        <>
            <FormStyled />
            <main>
                <form action="" method="get">
                    <label htmlFor="usuario">Usuário</label>
                    <input type="text" name="usuario" id="usuario" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" />
                    <input type="submit" value="Entrar" />
                </form>
            </main>
            <Footer />
        </>
    )
}