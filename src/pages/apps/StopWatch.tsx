import AdminSidebar from '../../components/AdminSidebar'
import { useEffect, useState } from 'react'

const formatTime = (timeinSeconds: number) => {

    const hours = Math.floor(timeinSeconds / 3600)
    const minutes = Math.floor((timeinSeconds % 3600) / 60)
    const seconds = Math.floor(timeinSeconds % 60)


    const hoursString = hours.toString().padStart(2, '0')
    const minutesString = minutes.toString().padStart(2, '0')
    const secondsString = seconds.toString().padStart(2, '0')

    return `${hoursString}:${minutesString}:${secondsString}`
}

const StopWatch = () => {
    const [time, setTime] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false)

    useEffect(() => {
        let intervalId: number;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        }
        return () => { clearInterval(intervalId) }
    }, [isRunning])

    const resetHandler = () => {
        setTime(0)
        setIsRunning(false)
    }

    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="dashboard-app-container">
                <h1>StopWatch</h1>
                <section>
                    <div className='stopwatch'>
                        <h2>{formatTime(time)}</h2>
                        <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? 'Stop' : 'Start'}</button>
                        <button onClick={resetHandler}>Resume</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default StopWatch