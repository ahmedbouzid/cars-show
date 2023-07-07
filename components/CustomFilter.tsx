'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox , Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';
function CustomFilter( {title,options} : CustomFilterProps) {
    const [selected , SetSelected] = useState(options[0]) ;
    return (
        <div>
            <div className='w-fit'>
                <Listbox 
                value={selected}
                onChange={(e) => SetSelected(e)}
                >
                    <div className='relative w-fit z-10'>
                        <Listbox.Button className="custom-bilter__btn">

                            <span className='block truncate'> {selected.title} </span>
                            <Image src="chevron-up-down.svg" width={20} height={20} alt='Image' className='ml-4 object-contain' /> 
                        </Listbox.Button>

                    </div>
                </Listbox>

            </div>
        </div>
    );
}

export default CustomFilter;