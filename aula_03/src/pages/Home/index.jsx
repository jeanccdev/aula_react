import { Footer } from '../../components/footer/footer'
import { MainText } from '../../components/mainText/mainText'
import { SubText } from '../../components/subText/subText'
import { Title } from '../../components/title/title'
import imagem from './img1.png'

export function Home() {
    return (
        <>
            <main>
                <img src={imagem} alt="" />
                <Title />
                <MainText />
                <SubText />
            </main>
            <Footer />
        </>
    )
}