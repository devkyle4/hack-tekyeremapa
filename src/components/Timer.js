import React, { useState, useEffect } from "react";
import "./styles/timer.css"

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for the hackathon form closure
    const targetDate = new Date("March 30, 2025 23:59:59").getTime();

    // Function to update the timer
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        // If the deadline has passed, stop updating
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate remaining time
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="countdown-timer">
      <h2 className="timer-header">Hackathon Form Closing In:</h2>
      <div className="timer">
        <div className="time-unit">
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div className="time-unit">
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-unit">
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div className="time-unit">
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
