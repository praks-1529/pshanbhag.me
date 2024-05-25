import { useEffect } from 'react';

import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const metadata = {
    title: 'Prakash - Works',
    description: 'pshanbhag',
}

export default function Blogs() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 my-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col text-center md:text-left">
                        <p className="text-custom-100 text-xl md:text-2xl font-semibold">FUN FACTS </p>
                        <p className="text-gray-100 text-2xl md:text-4xl tracking-tight font-semibold">I develop systems that scales and ready for production</p>
                        <p className="text-gray-400 text-sm md:text-lg mt-5">I've had a dynamic career, working in various roles within both large corporations and agile startups. I've gained experience in diverse industries including AI, Fintech, video streaming, gaming, and infrastructure, honing my skills to adeptly navigate the complexities of each field.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">14+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Years of experience</p>
                        </div>
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">500K+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Lines of code</p>
                        </div>
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">50+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Production features</p>
                        </div>
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">20+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Languages & frameworks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 bg-custom-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Experience logo */}
                    <div className="flex flex-col m-auto">
                        <img src="/work_experience.png"></img>
                    </div>
                    <div className='flex flex-col md:mt-20'>
                        {/* Experience summary */}
                        <p className="text-custom-100 text-xl md:text-2xl text-left">WORK EXPERIENCE</p>
                        <p className="text-gray-100 text-3xl md:text-6xl text-left">My Experience</p>
                        <p className="text-gray-400 text-xl md:text-xl text-left">Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem.</p>
                        {/* Experience 1 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Senior software engineer</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://google.com'>Google</a></p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2022-2024 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Tech lead of a team that managed every bit of data stored by cloud VMs in GCP.</p>
                            </div>
                        </div>
                        {/* Exp-2 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Director of engineering</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href="https://www.gameskraft.com/">Gameskraft</a></p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2020-2022 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Managed game engine, fraud detection, payments & devops of RummyCulture</p>
                            </div>
                        </div>
                        {/* Exp-3 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Engineering manager</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href="https://www.hotstar.com/">Disney+ Hotstar</a></p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2018-2020 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Scaled subscriptions and payments platform from 100K to 25M+ subscriptions on Hotstar platform </p>
                            </div>
                        </div>
                        {/* Exp-4 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Senior engineer</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://www.grab.com/sg/'>Grab</a></p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2017-2018 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Was part of the team that launched first version of GabPay wallet in Oct 2017</p>
                            </div>
                        </div>
                        {/* Exp-5 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Senior engineer</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl'>Stayzilla</p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2016-2017 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Part of pricing team that used to manage the prices of inventory.</p>
                            </div>
                        </div>
                        {/* Exp-6 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Sr R&D engineer</p>
                                <div className='flex flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://www.synopsys.com/'>Synopsys</a></p>
                                    <p className='pl-2 text-2xl text-gray-400'>( 2010-2016 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Core runtime performance optimzation of Synopsys products</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
