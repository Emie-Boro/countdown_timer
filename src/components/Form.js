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
            <div className="form-flex">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
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
                    </div>
                    <div className="form-date">
                        {/* <label htmlFor="date">Date</label> */}
                        <input type="date" name="date" id="" value={date} onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <div class="flex align-center divider">
                        <span class="hr"></span>
                        <button class="btn-secondary" id="submit">Update</button>
                    </div>
                </form> 
            </div>
            <Countdown targetDate={targetDate}/>
        </div>
    )
}

export default Form