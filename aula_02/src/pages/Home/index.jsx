import { Footer } from '../../components/footer/footer'
import { Main } from '../../components/main/main'
import { Title } from '../../components/title/title'
import imagem from './img1.png'
import './index.css'

export function Home() {
    return (
        <>
            <main>
                <img src={imagem} alt="" />
                <Title />
                <Main />
            </main>
            <Footer />
        </>
    )
}