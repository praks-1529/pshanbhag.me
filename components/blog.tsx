import React from 'react';

import CustomButton from './button';

interface Props {
    header: string;
    img_src: string;
    body: string;
    href: string;
    date: string;
}

const BlogComponent = (props: Props) => {
    return (
        <div className="w-96 bg-gray-300 p-4 shadow-xl">
            <figure><img height={32} src={props.img_src} alt="Blog" /></figure>
            <div className="card-body bg-gray-base">
                <div className="flex flex-col">
                    <h2 className="card-title text-standard-prirmary">{props.header}</h2>
                </div>
                <p className='text-standard-prirmary text-sm'>{props.date}</p>
                <p className="text-justify mt-5 text-standard-prirmary">{props.body}</p>
                <div className="card-actions justify-end">
                    <CustomButton text="View" href={props.href} />
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
