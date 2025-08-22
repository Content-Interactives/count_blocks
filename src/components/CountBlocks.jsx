import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Container } from './ui/reused-ui/Container.jsx'
import { OneBlock, TenBlock, HundredBlock } from './Blocks'

const CountBlocks = () => {


	return (
        <Container
            text="Block Counting Practice" 
            showResetButton={false}
            borderColor="#FF7B00"
            showSoundButton={true}
        >
            {/* Intro Text */}
            <div className='text-center text-sm text-gray-500 p-5'>
                Count the blocks in each row to find the total!
            </div>

            {/* Blocks */}
            <div className='flex flex-wrap justify-center items-center'>
                <OneBlock />
                <TenBlock />
                <HundredBlock />
            </div>
        </Container>
)
};


export default CountBlocks;