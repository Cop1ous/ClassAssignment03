import { useEffect, useState } from "react"
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function exampleOne () {
    const [number, setNumber] = useState(0);

    useEffect (() => {
        console.log(number)
    })

    return (
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>infinite loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}