import { FC, useState, useEffect } from 'react';

type AnimatedNumberProps = {
    number: number;
    from?: number;
    duration?: number;
}

const AnimatedNumber : FC<AnimatedNumberProps> = ({number, from = 0, duration = 500}) => {
    const [currentNumber, setCurrentNumber] = useState<number>(from);

    useEffect(() => {
        const interval = setInterval(() => {
            if(currentNumber < number) {
                setCurrentNumber(currentNumber + 1);
            } else {
                clearInterval(interval);
            }
        
        }, duration / (number - from));

        return () => clearInterval(interval);
    })

    return (
        <div>
            {currentNumber}
        </div>
    )
}

export default AnimatedNumber;