'use client'
import { SearchmanuFactureProps } from "@/types";
import { Combobox , Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constante";
import { Fragment, useState } from "react";
const SearchManuFacture = ({manufacture,setmanufacture}:SearchmanuFactureProps) => {
    const [querry , setQuerry] = useState('')
    const filteredManufacturer = querry === "" 
    ? manufacturers
    : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g,"")
        .includes(querry.toLowerCase().replace(/\s+/g,""))
    ))
    return ( 
        <div className="search-manufacturer">
            <Combobox>
                <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image src="/car-logo.svg"  
                    width={20}
                    height={20}
                    className="ml-4" 
                    alt="Imgae" />
                </Combobox.Button>
                <Combobox.Input
                className="search-manufacturer__input"
                placeholder="BMW"
                displayValue={(manufacture:string)=> manufacture
                }
                onChange={(e) => setQuerry (e.target.value)}
                />
                <Transition 
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={()=> setQuerry('')}
                >
                    <Combobox.Options >
                        {filteredManufacturer.length === 0 && querry !== "" ? (
                            <Combobox.Option 
                            value={querry}
                            className="search-manufacturer__option"
                            >
                                Create "{querry}"
                            </Combobox.Option>
                        ) : (
                            filteredManufacturer.map((item) => (
                                <Combobox.Option 
                                key={item}
                                className={({active}) => `
                                relative search-manufacturer__option
                                ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                                `}
                                value={item}
                                >
                                {item}
                                </Combobox.Option>
                            ))
                        ) }
                    </Combobox.Options>
                </Transition>
                </div>
            </Combobox>
        </div>
     );
}
 
export default SearchManuFacture;