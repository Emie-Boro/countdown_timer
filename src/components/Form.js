import { useState } from "react"
import Countdown from "./Countdown"

const Form = () =>{
    const [showForm, setShowForm] = useState(true)
    const [date, setDate] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    const [targetDate, setTargetDate] = useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        setTargetDate(new Date(`${date}T${hour}:${minute}:${second}`))

        if(date === undefined) {alert('Date is Required'); return}
        if(hour === undefined) {alert('Hours is Required'); return}
        if(minute === undefined) {alert('Minutes is Required'); return}
        if(second === undefined) {alert('Seconds is Required'); return}
        setShowForm(!showForm)
    }

    return(
        <div className="form-container">
            <h1>Countdown Timer</h1>
            {showForm ? (<form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="hour">Hour</label>
                    <input type="number" name="hour" id="" value={hour} onChange={(e)=>setHour(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="minute">Minute</label>
                    <input type="number" name="minute" id="" value={minute} onChange={(e)=>setMinute(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="second">Second</label>
                    <input type="number" name="second" id="" value={second} onChange={(e)=>setSecond(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>) : ''}
            <Countdown targetDate={targetDate}/>
            <button onClick={()=>window.location.reload()}>Refresh</button>
        </div>
    )
}

export default Form