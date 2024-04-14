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
            <div className="count-container">
                    <h1><span className="count-time">{days}</span> Days</h1>
                    <h1 ><span className="count-time">{hours}</span> Hours</h1>
                    <h1 ><span className="count-time">{minute}</span> Minutes</h1>
                    <h1 ><span className="count-time">{second}</span> Seconds</h1>
                </div>
            {showButton ? <button className="btn-secondary" onClick={count}>Start Counting</button> : <button className="btn-secondary" onClick={()=> window.location.reload()}>Refresh</button>}
        </div>
    )
}

export default Countdown