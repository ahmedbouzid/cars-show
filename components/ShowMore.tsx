'use client' ;
import { showMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'
import { UdpdateSearchParam } from '@/utils';



export default function ShowMore( {pageNumber , isNext } : showMoreProps ) {
 const router = useRouter()
 const handleNavigation = () => { 
const newLimit = (pageNumber + 1 ) *10 ;
    const newPathName = UdpdateSearchParam("limit" ,`${newLimit}`)
    router.push(newPathName)
 }
 
    return (
    <div className='w-full flex-center gap-5 mt-10'>
        {isNext && (
            <CustomButton 
            title=' More Cars'
            btnType='button'
            containerStyles='bg-primary-blue rounded-full text-white'
            handleClick={handleNavigation}
            />
        )}


    </div>
  )
}
