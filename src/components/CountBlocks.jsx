import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Container } from './ui/reused-ui/Container.jsx'
import { OneBlock, TenBlock, HundredBlock } from './Blocks'

const CountBlocks = () => {
    // State Management
        
	// Values for hundreds, tens, and ones with specific ranges
	const [hundreds, setHundreds] = useState(100); // 100 - 900
	const [tens, setTens] = useState(10); // 10 - 90
	const [ones, setOnes] = useState(1); // 1 - 9

	// Randomized answer counts for displayed blocks (0-9 each)
	const [answerHundreds, setAnswerHundreds] = useState(0);
	const [answerTens, setAnswerTens] = useState(0);
	const [answerOnes, setAnswerOnes] = useState(0);

	// Reveal result state
	const [showResult, setShowResult] = useState(false);

	const incrementHundreds = () => {
		setHundreds(prev => Math.min(900, prev + 100));
	};

	const decrementHundreds = () => {
		setHundreds(prev => Math.max(0, prev - 100));
	};

	const incrementTens = () => {
		setTens(prev => Math.min(90, prev + 10));
	};

	const decrementTens = () => {
		setTens(prev => Math.max(0, prev - 10));
	};

	const incrementOnes = () => {
		setOnes(prev => Math.min(9, prev + 1));
	};

	const decrementOnes = () => {
		setOnes(prev => Math.max(0, prev - 1));
	};

	// Randomize initial answer on mount
	useEffect(() => {
		const randomHundreds = Math.floor(Math.random() * 10); // 0..9
		const randomTens = Math.floor(Math.random() * 10); // 0..9
		const randomOnes = Math.floor(Math.random() * 10); // 0..9
		setAnswerHundreds(randomHundreds);
		setAnswerTens(randomTens);
		setAnswerOnes(randomOnes);
	}, []);

	// After showing result, wait 3s then randomize a new answer and hide result
	useEffect(() => {
		if (!showResult) return;
		const timeoutId = setTimeout(() => {
			setShowResult(false);
			setAnswerHundreds(Math.floor(Math.random() * 10));
			setAnswerTens(Math.floor(Math.random() * 10));
			setAnswerOnes(Math.floor(Math.random() * 10));
		}, 3000);
		return () => clearTimeout(timeoutId);
	}, [showResult]);

	// Check logic
	const checkButtonRef = useRef(null);
	const handleCheck = () => {
		const totalBlocks = answerHundreds * 100 + answerTens * 10 + answerOnes;
		const userTotal = hundreds + tens + ones;
		if (userTotal === totalBlocks) {
			confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
			setTimeout(() => setShowResult(true), 150);
		} else {
			const btn = checkButtonRef.current;
			if (!btn) return;
			btn.classList.remove('shake-x');
			void btn.offsetWidth; // restart animation
			btn.classList.add('shake-x');
		}
	};

	return (
        <Container
            text="Block Counting Practice" 
            showResetButton={false}
            borderColor="#FF7B00"
            showSoundButton={true}
        >
            {/* Intro Text */}
            <div className='text-center text-sm text-gray-500 p-5'>
                Count the blocks in each row to find the total, then enter the total in the input boxes to solve!
            </div>

            {/* Blocks */}
            <div className='w-[100%] absolute top-[25%] blocks-responsive flex flex-wrap justify-between items-center p-5 pt-0 pb-0'>
                <HundredBlock count={answerHundreds} />
                <TenBlock count={answerTens} />
                <OneBlock count={answerOnes} />
            </div>

            {/* Inputs */}
            <div className={`absolute bottom-[1%] flex flex-col justify-center items-center w-[100%] gap-4 p-5 pb-2 pt-2 transition-opacity duration-300 ${showResult ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={incrementHundreds}
                            aria-label='Increase hundreds'
                            >
                            ▲
                        </button>
                        <input 
                            type="text" 
                            readOnly
                            tabIndex={-1}
                            value={hundreds}
                            className='w-[90%] md:w-28 lg:w-32 text-center border-2 border-green-400 rounded-lg p-2 focus:outline-none shadow-sm select-none pointer-events-none text-gray-800' 
                            />
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={decrementHundreds}
                            aria-label='Decrease hundreds'
                        >
                            ▼
                        </button>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={incrementTens}
                            aria-label='Increase tens'
                        >
                            ▲
                        </button>
                        <input 
                            type="text" 
                            readOnly
                            tabIndex={-1}
                            value={tens}
                            className='w-[90%] md:w-28 lg:w-32 text-center border-2 border-red-400 rounded-lg p-2 focus:outline-none shadow-sm select-none pointer-events-none text-gray-800' 
                        />
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={decrementTens}
                            aria-label='Decrease tens'
                        >
                            ▼
                        </button>
                    </div>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-2'>
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={incrementOnes}
                            aria-label='Increase ones'
                        >
                            ▲
                        </button>
                        <input 
                            type="text" 
                            readOnly
                            tabIndex={-1}
                            value={ones}
                            className='w-[90%] md:w-28 lg:w-32 text-center border-2 border-blue-400 rounded-lg p-2 focus:outline-none shadow-sm select-none pointer-events-none text-gray-800' 
                        />
                        <button 
                            className='w-6 h-6 flex items-center justify-center rounded-md bg-orange-100 hover:bg-orange-200 text-orange-600 border border-orange-300 shadow-sm'
                            onClick={decrementOnes}
                            aria-label='Decrease ones'
                        >
                            ▼
                        </button>
                    </div>
                </div>

                {/* Check Answer Button */}
                    <div className={`flex justify-center w-full transition-opacity duration-300 ${showResult ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <button ref={checkButtonRef} onClick={handleCheck} className='w-24 md:w-28 lg:w-32 text-center border-2 border-orange-400 bg-yellow-100 hover:bg-orange-200 text-orange-600 rounded-lg p-1 focus:outline-none shadow-sm placeholder-black'>Check!</button>
                    </div>

                    {showResult && (
                        <div className='absolute bottom-[16%] flex justify-center items-center w-full p-4'>
                            <div className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-600'>
                                {answerHundreds * 100 + answerTens * 10 + answerOnes}
                            </div>
                        </div>
                    )}
            </div>

        </Container>
)
};


export default CountBlocks;