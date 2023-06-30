'use client'
import Image from "next/image";
import CustomButton from "./CustomButton";
function Hero( ) {
   const handleScrool = ( ) => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="hero__subtitle">
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Nisi, alias?
                </p>
                <CustomButton
                title="Explore"
                containerStyles="bg-primary-blue text-white rounded-full mt-15 p-30"
                handleClick={handleScrool}
                />

            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image  src="/hero.png" alt='hero' 
                     fill   className='object-contain'
                    />
            <div className="hero__image-overlay"></div>

                </div>
            </div> 
        </div>
    );
}

export default Hero;