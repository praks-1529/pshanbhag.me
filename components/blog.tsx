import React from 'react';

import CustomButton from './button';

interface Props {
    header: string;
    img_src: string;
    body: string;
    href: string;
}

const BlogComponent = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={props.img_src} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex flex-col">
                        <h2 className="card-title">{props.header}</h2>
                    </div>
                    <p className='text-gray-300 text-sm'>Jun 28, 2024</p>
                    <p className="text-justify mt-5 text-gray-300">{props.body}</p>
                    <div className="card-actions justify-end">
                        <CustomButton text="Watch video" href={props.href} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
