'use client'

import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import PageIllustration from '@/components/page-illustration';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 600,
            easing: 'ease-out-sine',
        })
    })

    return (
        <>
            <main className="grow">
                <PageIllustration />
                <div className='mt-40 flex flex-col'>
                    {children}
                </div>
            </main>

            <Footer />
        </>
    )
}
