import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import { useState, useEffect } from "react"

export default function exampleFour () {
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("gray");

    const [trigger, setTrigger] = useState (false);

    const handleChange = () => {
        if(number > 2) {
            setColor("orange");
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        if(trigger) {
            interval = setInterval(() => {
                handleChange()
                setTrigger(false);
            }, 3000)
        }
        console.log(number);
        console.log(trigger);

        return() => clearInterval(interval);
    }, [trigger])
        return (
        <>
            <Header/>
            <main>
                <button onClick={() => {
                    setNumber(number + 1)
                    setTrigger(true);
                  }}>Add number</button>
                <h1 style={{ color: color }}>Change the text color</h1>

                {
                    number > 1 && <div style={{
                    backgroundColor:`${color}`,
                    lineHeight: 10,
                    padding: 20                  
                }}>
                    Box
                </div>
                }
            </main>
        </>
    )
}
