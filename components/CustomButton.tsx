'use client'
import { CustomButtonProps } from '@/types';
import Image  from 'next/image';
function CustomButton({title , containerStyles , handleClick} :CustomButtonProps) {
    return (
        <div>
           <button 
           disabled = {false}
           type={'button'}
           className={`custom-btn w-20 h-10 ${containerStyles}`}
            onClick={handleClick}
           >
           <span className={`flex-1`}>
            {title}
           </span>
           </button>
           <div className="hero__image_container">
                <div className="hero__image">
                    
                </div>
            </div> 
        </div>
    );
}

export default CustomButton;