'use client'
import Typewriter from 'typewriter-effect';

import CustomButton from '@/components/button';

export default function Hero() {

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col text-center md:text-left">
                        <p className="text-custom-100 text-3xl md:text-3xl font-semibold">HELLO I'M </p>
                        <p className="text-gray-100 text-6xl md:text-8xl font-bold">Prakash Shanbhag</p>
                        <p className="text-gray-100 text-3xl md:text-3xl mt-5 font-bold">A passionate</p>
                        <Typewriter
                            options={{
                                delay: 100,
                                strings: ['Developer', 'Consultant', 'Freelancer'],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'text-3xl text-custom-100',
                                cursorClassName: 'text-3xl text-custom-100'
                            }} />
                        <div className='flex flex-row mt-5 justify-center md:justify-start'>
                            <CustomButton text="Say hello"></CustomButton>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className="avatar w-full">
                            <div className="w-8 h-8 sm:h-96 sm:w-96 rounded-full mx-auto">
                                <img src="/dp.jpeg" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
