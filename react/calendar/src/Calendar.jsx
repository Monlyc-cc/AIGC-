import './calendar.css'
import { useState } from 'react'
export default function Calendar({ onchange }) {
    const [time, setTime] = useState(new Date())
    const nums = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一']
    const renddays = (date) => {
        let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        let Day = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
        let elemnts = [];
        let restday = 42 - days - Day;
        if (Day > 0) {
            let lastDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
            while (Day--) {
                elemnts.push(<div className="empty" >{lastDays - Day}</div>)
            }
        }

        let i = 0;
        const now = new Date()
        while (days--) {
            i++;
            if (now.getFullYear() == date.getFullYear() && now.getMonth() == date.getMonth() && i == now.getDate()) {
                let num = i;
                elemnts.push(<div className="day selected" onClick={() => { onchange(date.getFullYear(), date.getMonth() + 1, num) }}>{i}</div>)
            }
            else {
                let num = i
                elemnts.push(<div className="day" onClick={() => { onchange(date.getFullYear(), date.getMonth() + 1, num) }}>{i}</div>)
            }
        }


        if (restday > 0) {
            let nextDays = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDate()
            let i = 0;
            while (restday--) {
                elemnts.push(<div className="empty" >{nextDays + i}</div>)
                i++;
            }
        }
        return elemnts;
    }
    const handlePrevMounth = () => {
        setTime(new Date(time.getFullYear(), time.getMonth() - 1, time.getDate()))
    }
    const handleNextMounth = () => {
        setTime(new Date(time.getFullYear(), time.getMonth() + 1, time.getDate()))
    }
    return (
        <div className="calendar">
            <div className="header">
                <button onClick={handlePrevMounth}>&lt;</button>
                <div>{time.getFullYear()} 年 {nums[time.getMonth()]} 月</div>
                <button onClick={handleNextMounth}>&gt;</button>
            </div>
            <div className="days">
                <div className="day">日</div>
                <div className="day">一</div>
                <div className="day">二</div>
                <div className="day">三</div>
                <div className="day">四</div>
                <div className="day">五</div>
                <div className="day">六</div>
                {renddays(time)}
            </div>
        </div>
    )
}
