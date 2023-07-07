'use client';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constante';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default  function Home( ) {

  /// fetch cars 

 const getCars = async () => {
  setLoading(true)
      try {
        const result = await fetchCars({

        manufacture: manufacture || "" ,
        year: year || 2023, 
        fuel: fuel || "",
        limit: limit || 6,
        model: model || "" ,
      }) ;
      setAllCars(result)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading (false)
      }
  }
const [allCars ,  setAllCars] = useState([])
const [loading , setLoading] = useState(false); 
//// For search 

const [manufacture , setManufacturer] = useState("") ; 
const [model , setModel ] = useState("");
const [year, setYear] = useState(2020)
//// state for filtering
const [fuel , setfuel] = useState("") ;
/// pagination state
const [limit, setLimit] = useState(10)

//// useEffect function 

useEffect(() => {
  getCars()
}, [fuel , year , manufacture,model , limit])


  const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
    <div className='mt-12 padding-x padding-y max-width ' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>
          Cars Catalogue
        </h1>
        <p>Explore the cars might Linke</p>

      </div>
      <div className='home__filters'>
        <SearchBar setManufacturer = {setManufacturer} setModel={setModel} />
      </div>
      <div className='home__filter-container'>
        <CustomFilter title="fuel" options={fuels} setFilter ={setfuel} />
        <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />

      </div>
      {allCars.length > 0 ? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard  car={car}/>
            ))}
          </div>
          {loading && (
            <div className='mt-16 w-full flex-center '>
                <Image src="/loading.svg" width={50} height={50} alt='loading img' />
            </div>
          )}
          <ShowMore 
          pageNumber = {limit  / 10}
          isNext = {limit > allCars.length}
          setLimit={setLimit}
          />
        </section>
      ) : (
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>No Data</h2>
          <p>{allCars?.message}</p>
        </div>
      )
    }
    </div>
    </main>
  )
}
