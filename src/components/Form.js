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

        const undefined_error = (value) =>{
            if(value === undefined) {
                alert(`${value} is required`);
                return;
            }
        }
        
        undefined_error(date)
        undefined_error(hour)
        undefined_error(minute)
        undefined_error(second)

        const formatting_time = (value) =>{
            if(value === undefined) {
                alert(`${value} is required`);
                return;
            }

            if(value.length === 1) {
                return '0'+value
            } else{
                return value
            }
        }
        
        setTargetDate(new Date(`${date}T${formatting_time(hour)}:${formatting_time(minute)}:${formatting_time(second)}`))

        setShowForm(!showForm)
    }

    return(
        <div className="container">
            <h1>Countdown Timer</h1>
            {showForm ? (<form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="hour">Hour</label>
                    <input type="number" name="hour" id="" value={hour} onChange={(e)=>setHour(e.target.value)} max="23"/>
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
            {showForm == false && <Countdown targetDate={targetDate}/> }
            {showForm == false && <button onClick={()=>window.location.reload()}>Refresh</button> }
        </div>
    )
}

export default Form