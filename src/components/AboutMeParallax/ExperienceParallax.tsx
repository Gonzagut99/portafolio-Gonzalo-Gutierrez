import { useState} from 'react'
import {useLoading} from "../../hooks/useLoading";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles.css'
import YearBubble from './YearBubble'
import TimeLine from '../Timeline/TimeLine'
import Spinner from '../Spinner'
import {aboutMeExperienceInfo} from './aboutMeExperienceInfo'
import KeepInTouchIcon from '../icons/KeepInTouchIcon';

function ExperienceParallax
({id}:{id:string}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const isLoading = useLoading();
    //const [isHovered, setIsHovered] = useState(false)
    const scrolledClass = 'isDisplayed'
    const notScrolledClass = 'notDisplayed'
    let scrolledBarClass = isScrolled?scrolledClass:notScrolledClass 
  
    const handleHoverIn = ()=>{
      setIsScrolled(()=>true)
    }
    const handleHoverOut = ()=>{
      setIsScrolled(()=>false)
    }

    if (!aboutMeExperienceInfo || Object.keys(aboutMeExperienceInfo).length === 0) {
      return (
        <div className="w-full !h-full px-1 py-12 flex justify-center items-center flex-col gap-4">
          <img
            className="size-52 md:size-64"
            src="/parallaxImages/resumeIllustrartion.svg"
            alt=""
          />
          <p className="text-center md:text-xl max-w-96 text-gray-200/90">
            Aún no tengo experiencia laboral formal, pero estoy listo para mi
            primer trabajo.
          </p>
          <a
            id='contact-button'
            className="contact-button relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-medium rounded-lg group mt-3"
          >
            
            <span className="absolute top-0 left-0 !w-[400px] md:!w-[350px] h-48 lg:size-56 -mt-1 transition-all duration-500 ease-in-out -translate-x-[500px] lg:-translate-x-96 -translate-y-24 bg-gray-200/90 group-hover:bg-yellow-300 opacity-100 group-hover:translate-x-1 lg:-translate-y-28 transform skew-x-[-12deg]"></span>
            <span className='inline-flex items-center gap-x-1 relative w-full justify-center text-left text-gray-200/90 transition-colors duration-200 ease-in-out group-hover:text-gray-900 md:text-xl'>
              <KeepInTouchIcon className='size-5 md:size-6' ></KeepInTouchIcon>
              <span className="">
                Pongámonos en contacto
              </span>
            </span>
            <span className="absolute inset-0 border-2 border-gray-200/90 rounded-lg transition-colors group-hover:border-yellow-300"></span>
          </a>
        </div>
      );
    }
  
    return (
        isLoading?<Spinner size='size-12'></Spinner>:
      <Parallax
        id={id}
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className={`w-full scrollBar ${scrolledBarClass} flex flex-col`}
        pages={3.5}
      >
        <ParallaxLayer
          className="flex items-start self-start -z-1 !w-1/4 "
          sticky={{ start: 0, end: 0.3 }}
        >
          <YearBubble year="2023"></YearBubble>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1.5}
          className="flex justify-end gap-3"
          offset={0}
          speed={1.5}
        >
          <div className="w-3/4 pl-4">
            <TimeLine dataTimeline={aboutMeExperienceInfo[2023]}></TimeLine>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-start self-start -z-1 !w-1/4 "
          sticky={{ start: 1.2, end: 1.3 }}
        >
          <YearBubble year="2022"></YearBubble>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1.5}
          className="flex justify-end gap-3"
          offset={1}
          speed={1.5}
        >
          <div className="w-3/4 pl-4">
            <TimeLine dataTimeline={aboutMeExperienceInfo[2023]}></TimeLine>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-start self-start -z-1 !w-1/4 "
          sticky={{ start: 2.2, end: 3 }}
        >
          <YearBubble year="2021"></YearBubble>
        </ParallaxLayer>
        <ParallaxLayer
          className="flex items-center justify-end"
          offset={2.4}
          speed={1.5}
        >
          <div className="w-3/4 pl-4">
            <TimeLine dataTimeline={aboutMeExperienceInfo[2023]}></TimeLine>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
}

export default ExperienceParallax
