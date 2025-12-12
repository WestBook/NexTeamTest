import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [displayTime, setDisplayTime] = useState('00:00')
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isPausedRef = useRef(isPaused)

  useEffect(() => {
    isPausedRef.current = isPaused
  }, [isPaused])

  useEffect(() => {
    return () => clearTimer()
  }, [])

  const timerStart = () => {
    clearTimer()

    let totalSeconds = minutes * 60 + seconds
    const display = () => {
      const nextMins = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
      const nextSecs = String(totalSeconds % 60).padStart(2, '0')
      setDisplayTime(`${nextMins}:${nextSecs}`)
    }

    display()

    timerRef.current = setInterval(() => {
      if (isPausedRef.current) return
      if (totalSeconds <= 0) {
        clearTimer()
        return
      }
      totalSeconds -= 1
      display()
    }, 1000)
  }

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const timerPauseResume = () => {
    setIsPaused(prev => !prev)
  }

  const timerReset = () => {
    clearTimer()
    setMinutes(0)
    setSeconds(0)
    setDisplayTime('00:00')
  }
  return (
    <>
      <label>
        <input type="number" value={minutes} onChange={e => {
          const value = e.target.valueAsNumber
          setMinutes(Number.isNaN(value) ? 0 : value)
        }} />
        Minutes
      </label>
      <label>
        <input type="number" value={seconds} onChange={e => {
          const value = e.target.valueAsNumber
          setSeconds(Number.isNaN(value) ? 0 : value)
        }} />
        Seconds
      </label>
      <button onClick={timerStart}>START</button>
      <button onClick={timerPauseResume}>PAUSE / RESUME</button>
      <button onClick={timerReset}>RESET</button>
      <h1 data-testid="running-clock">{displayTime}</h1>
    </>
  )
}

export default App
