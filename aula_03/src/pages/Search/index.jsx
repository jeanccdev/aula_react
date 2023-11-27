import { Footer } from '../../components/footer/footer'
import { SearchStyled } from './styles.js'

const fruitList = [
    'Maçã', 'Banana', 'Morango', 'Pera', 'Uva',
    'Abacaxi', 'Manga', 'Melancia', 'Cereja', 'Kiwi'
]

const searchFruit = (event) => {
    const value = event.target.value
    const resultList = fruitList.filter(fruit => fruit.includes(value))
    const result = document.getElementById('result')
    result.innerHTML = ""
    resultList.forEach(fruit => result.innerHTML += `<li>${fruit}</li>`)
}

export function Search() {
    return (
        <>
            <SearchStyled />
            <main>
                <input type="search" name="search" id="search" placeholder='Busque as frutas' onInput={searchFruit} />
                <ul id="result">
                    {fruitList.map(fruit => {
                        return (
                            <li>{fruit}</li>
                        )
                    })}
                </ul>
            </main>
            <Footer />
        </>
    )
}

// - Em alguma outra página, apresente um mecanismo de busca e uma lista de item, a escolha do usuário.