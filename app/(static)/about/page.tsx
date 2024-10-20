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
                        <p className="text-gray-400 text-sm md:text-lg mt-5">I've had a dynamic career, leveraging AI in various roles within both large corporations and agile startups. I've applied AI technologies across diverse industries, including Fintech, video streaming, gaming, and infrastructure, effectively navigating and optimizing the complexities of each field.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">14+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Years of experience</p>
                        </div>
                        <div className="flex flex-row border border-dashed rounded-md border-gray-500 p-4">
                            <p className="basis-1/2 text-custom-100 text-2xl md:text-4xl font-bold m-auto">1M+</p>
                            <p className="basis-2/2 text-gray-100 text-lg md:text-xl font-semibold m-auto">Lines of production code</p>
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
                        <a href="https://www.vecteezy.com/free-photos/work_experience">
                            <img src="/work_experience.png"></img>
                        </a>
                    </div>
                    <div className='flex flex-col my-10 md:my-20'>
                        {/* Experience summary */}
                        <p className="text-custom-100 text-xl md:text-2xl text-left">WORK EXPERIENCE</p>
                        <p className="text-gray-100 text-3xl md:text-6xl text-left">My Experience</p>
                        {/* <p className="text-gray-400 text-xl md:text-xl text-left">I've been an AI chameleon, adapting and thriving across diverse industries, from Fintech to gaming, and everything in between.</p> */}
                        {/* Experience 1 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img src='/signalsiq.svg'></img>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Co-founder</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://signalsiq.ai'>SignalsIQ.ai</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2024-Present )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Anything and everything</p> */}
                            </div>
                        </div>
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img src='/google.png'></img>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Senior software engineer</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://google.com'>Google</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2022-2024 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Tech lead - Persistent disk team</p> */}
                            </div>
                        </div>
                        {/* Exp-2 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <div className="avatar w-full">
                                    <div className="rounded-full mx-auto">
                                        <img src="/gameskraft.jpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Director of engineering</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href="https://www.gameskraft.com/">Gameskraft</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2020-2022 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Managed game engine, fraud detection, payments & devops of RummyCulture</p> */}
                            </div>
                        </div>
                        {/* Exp-3 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <div className="avatar w-full">
                                    <div className="rounded-full mx-auto">
                                        <img className='rounded-full mx-auto' src="/hotstar.png" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Engineering manager</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href="https://www.hotstar.com/">Disney+ Hotstar</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2018-2020 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Scaled subscriptions and payments platform from 100K to 25M+ subscriptions on Hotstar platform </p> */}
                            </div>
                        </div>
                        {/* Exp-4 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img className='rounded-full mx-auto' src='/grab.png'></img>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>SDE-4</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://www.grab.com/sg/'>Grab</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2017-2018 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Was part of the team that launched first version of GabPay wallet in Oct 2017</p> */}
                            </div>
                        </div>
                        {/* Exp-5 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img className='rounded-full mx-auto' src='/stayzilla.jpg'></img>
                                {/* <FontAwesomeIcon icon={faSuitcase} className='pr-4 text-custom-100'></FontAwesomeIcon> */}
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Senior engineer</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl'>Stayzilla</p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2016-2017 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Part of pricing team that used to manage the prices of inventory.</p> */}
                            </div>
                        </div>
                        {/* Exp-6 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img className='rounded-full mx-auto' src='/synopsys.jpeg'></img>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Sr R&D engineer</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://www.synopsys.com/'>Synopsys</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2010-2016 )</p>
                                </div>
                                {/* <p className='text-lg text-gray-400'>Core runtime performance optimzation of Synopsys products</p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-8xl mx-auto px-4 sm:px-6 bg-custom-900 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='flex flex-col md:mt-20 md:pl-20'>
                        {/* Experience summary */}
                        <p className="text-custom-100 text-xl md:text-2xl text-left">EDUCATION</p>
                        <p className="text-gray-100 text-3xl md:text-6xl text-left">My Education</p>
                        <p className="text-gray-400 text-xl md:text-xl text-left">
                            I completed both my bachelor's and master's degrees at some of India's premier institutes.</p>
                        {/* Experience 1 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <img className="rounded-full mx-auto bg-gray-100" src='/iit_kgp.jpg'></img>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Master of technology</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href='https://www.iitkgp.ac.in/'>Indian Institure of Technology, Kharagpur</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2008-2010 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Tech lead of a team that managed every bit of data stored by cloud VMs in GCP.</p>
                            </div>
                        </div>
                        {/* Exp-2 */}
                        <div className='flex flex-row mt-10'>
                            <div className='flex basis-2/12 flex-col pb-5 pr-5 md:pb-10 md:pr-10'>
                                <div className="avatar w-full">
                                    <div className="rounded-full mx-auto">
                                        <img className="rounded-full mx-auto bg-gray-100" src='/vtu.png'></img>

                                    </div>
                                </div>
                            </div>
                            <div className='flex basis-10/12 flex-col'>
                                <p className='font-bold text-3xl'>Bachelor of technology</p>
                                <div className='flex flex-col md:flex-row justify-start'>
                                    <p className='font-semibold text-2xl hover:text-custom-100'><a href="https://www.gameskraft.com/">Visvesvaraya Technological University</a></p>
                                    <p className='md:pl-2 text-2xl text-gray-400'>( 2004-2008 )</p>
                                </div>
                                <p className='text-lg text-gray-400'>Sir M. Visvesvaraya Institute of Technology, Bangalore</p>
                            </div>
                        </div>
                    </div>
                    {/* Experience logo */}
                    <div className="flex flex-col m-auto">
                        <a href="https://www.vecteezy.com/free-photos/education">
                            <img className="rounded-lg" src="/education4.png"></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
