'use client'

import { fetchSeasonalAnimes } from "@/app/api/animes/anime-list"
import { useQuery } from "@tanstack/react-query"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CarouselSkeleton from "./carousel-skeleton"
import { useRouter } from "next/navigation"
import { Neucha } from 'next/font/google'

const neucha = Neucha({subsets: ['latin'], weight: ['400']})

const SeasonCarousel = () => {
const route = useRouter()
const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 6,
      spacing: 20,
    },
  })
const{data, isLoading} = useQuery({
  queryKey: ['seasonal-anime'],
  queryFn: fetchSeasonalAnimes,
  
})

if (isLoading) return <CarouselSkeleton/>

console.log(data)



  return (
    <div className=" text-white   w-[90%] 2xl:w-full">
     
    <div className="mt-12 flex flex-col text-3xl gap-4">
      <h2 className={neucha.className}>Seasonal anime</h2>
    <div ref={ref} className="keen-slider h-64 w-10 ">
          {data?.map(anime => (
            <div key={anime.mal_id} className="keen-slider__slide rounded-md group cursor-pointer" onClick={() => route.push(`/${anime.mal_id}`)}>
               <Image
                 src={anime.images.jpg.large_image_url}
                 alt="anime-cover"
                 fill
                 /> 
            </div>
          ))}
       </div>
         
    </div>  
    </div>
  )
}

export default SeasonCarousel