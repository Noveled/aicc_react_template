import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                일: Math.floor(difference / (1000 * 60 * 60 * 24)),
                시: Math.floor((difference / (1000 * 60 * 60)) % 24),
                분: Math.floor((difference / 1000 / 60) % 60),
                초: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div className='flex flex-wrap justify-between'>
            <div className='p-2 w-full sm:w-1/2'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl tracking-tight font-semibold font-customFontkr'>기간 한정 이벤트 진행 중!!</h2>
                <h4 className='py-4 text-xl font-customFontKr'>지금 가입시 최대 <span className='text-violet-600 font-semibold'>200</span>만 원 할인</h4>              
            </div>
            <div className='p-2 w-full sm:w-1/2'>
                <p className='text-xl mb-4 font-customFontKr'>남은 시간 : {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
                <Link to="/signin">
                    <span className='bg-violet-600 text-white  w-fit h-12 rounded-lg text-2xl font-medium px-4 py-2 uppercase block m-auto mb-20'>5 초만에 가입하고 혜택받기</span>
                </Link>
            </div>
        </div>
    );
};

export default CountdownTimer;