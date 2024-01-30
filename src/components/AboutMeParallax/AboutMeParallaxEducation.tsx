import { useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './styles.css'
import YearBubble from './YearBubble'
import TimeLine from '../Timeline/TimeLine'
import {useLoading} from '../../hooks/useLoading'
import Spinner from '../Spinner'
import {aboutMeEducationInfo} from './aboutMeEducationInfo'

function AboutMeParallaxEducation({id, activeTab}:{id:string, activeTab:string}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [classTransition, setClassTransition] = useState('');
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
  
    //efecto fade in
    useEffect(() => {
      if (activeTab === id) {
        setClassTransition('fade_enter');
        setTimeout(() => setClassTransition('fade_enter-active'), 100);
      } else {
        setClassTransition('');
      }
    }, [activeTab, id]);
  
    return (
      isLoading?<Spinner size='size-12'></Spinner>: <Parallax
        id={id}
        onMouseOver={handleHoverIn}
        onMouseLeave={handleHoverOut}
        className={`${classTransition} w-full scrollBar ${scrolledBarClass} flex flex-col`}
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
            <TimeLine dataTimeline={aboutMeEducationInfo[2023]}></TimeLine>
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
            <TimeLine dataTimeline={aboutMeEducationInfo[2022]}></TimeLine>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-start self-start -z-1 !w-1/4 "
          sticky={{ start: 2.2, end: 3 }}
        >
          <YearBubble year="2020"></YearBubble>
        </ParallaxLayer>
        <ParallaxLayer
          className="flex items-center justify-end"
          offset={2.4}
          speed={1.5}
        >
          <div className="w-3/4 pl-4">
            <TimeLine dataTimeline={aboutMeEducationInfo[2020]}></TimeLine>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
}

export default AboutMeParallaxEducation