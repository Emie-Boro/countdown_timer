import { useState, useEffect } from "react"

const Countdown = ({targetDate}) =>{
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    const [countBoolean, setCountBoolean] = useState(false)

    const [showButton, setShowButton] = useState(true)
    const count = () =>{
        setInterval(()=> {
            const difference = targetDate - new Date()
            
            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
            
            setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinute(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
            setSecond(Math.floor((difference % (1000 * 60)) / (1000)))
        },1000)

        setShowButton(false)
        setCountBoolean(true)
    }


    return(
        <div>
            {countBoolean && <h1>{days}:{hours}:{minute}:{second}</h1>}
            {showButton && <button onClick={count}>Click</button>}
        </div>
    )
}

export default Countdown