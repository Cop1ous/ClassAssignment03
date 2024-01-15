import { useEffect } from "react"
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"

export default function exampleTwo () {

    useEffect(() => {
        console.log("RUN")
    }, [])
    return (
        <>
            <Header/>
            <main>
                    <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}