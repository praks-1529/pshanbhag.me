
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props {
    text: string;
    licon?: FontAwesomeIconProps['icon'];
    ricon?: FontAwesomeIconProps['icon'];
    onClick?: () => void;
    href?: string;
    disabled?: boolean;

}

const CustomButton = (props: Props) => {
    return (
        <div>
            <button onClick={props.onClick} type="submit"
                className="flex items-center rounded-md justify-center border border-transparent bg-custom-100 px-4 py-2 text-base font-medium text-gray-100 hover:bg-gray-100 hover:text-custom-900 focus:outline-none focus:ring-2 focus:ring-custom-100 focus:ring-offset-2 disabled:bg-gray-800 disabled:cursor-not-allowed" disabled={props.disabled}>
                {props.licon &&
                    <FontAwesomeIcon icon={props.licon} className="pr-4 text-indigo-100 disabled:cursor-not-allowed" />
                }
                {!props.href &&
                    <p className={clsx({ "pointer-events: none": props.disabled })}> {props.text} </p>
                }
                {props.href &&
                    <Link href={props.href} className={clsx({ "pointer-events: none": props.disabled })}> {props.text} </Link>
                }
                {props.ricon &&
                    <FontAwesomeIcon icon={props.ricon} className="pl-4 text-indigo-100 disabled:cursor-not-allowed" />
                }
            </button>
        </div>
    )
}

export default CustomButton
