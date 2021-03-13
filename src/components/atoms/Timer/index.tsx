import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const TimerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: cadetblue;
`

interface TimerProps {
  minutes: number;
  seconds: number;
}

const Timer:FC<TimerProps> = ({minutes, seconds}: TimerProps): React.ReactElement => {
  const [countMinutes, setCountMinutes] = useState(minutes);
  const [countSeconds, setCountSeconds] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if(countSeconds === 0) {
        if(countMinutes === 0) clearInterval(timer);
        else {
          setCountMinutes(countMinutes - 1);
          setCountSeconds(59)
        }
      } else {
        setCountSeconds(countSeconds - 1);
      }
    }, 1000);

    return() => clearInterval(timer);
  }, [countMinutes, countSeconds])

  return (
    <TimerStyle>
      {countMinutes}:{countSeconds < 10 ? `0${countSeconds}` : countSeconds }
    </TimerStyle>
  );
}
export default Timer;
