import { useState, useEffect } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useLoading} from '../../hooks/useLoading'
import './styles.css'
import { techSkills,techSkillsBackend,techSkillsAdditional } from './aboutMeInfo'
import GridCard from './GridCard'
import Spinner from '../Spinner'

function AboutMeParallax({id, activeTab}:{id:string, activeTab:string}) {
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
    //while this component is being loaded in the clientside a spinner should be shown
    isLoading ? <Spinner size='size-12'></Spinner> :
    <Parallax id={id} onMouseOver={handleHoverIn} onMouseLeave={handleHoverOut} className={`${classTransition} w-full scrollBar ${scrolledBarClass} flex flex-col`} pages={3.5}>
        {/* <ParallaxLayer className='' offset={0} speed={0.5}>
          <p className={styles.scrollText}>Scroll down</p>
        </ParallaxLayer> */}

        <ParallaxLayer className='flex items-start self-start -z-1 !w-1/3 ' sticky={{ start: 0, end: 0.3 }}>
          <div className={`flex flex-col gap-3 justify-center items-center font-extralight text-lg rounded-lg text-gray-200/90 w-full`}>
            <img className='opacity-85' src="/parallaxImages/skillsDesktop.png" alt="habilidades" />
            <p className='text-pretty'>Web Frontend</p>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer className='flex justify-end' offset={0} speed={1.5}>
          <article className='w-3/5 flex flex-col items-center gap-3'>
            <h3 className='font-light'>Web - Frontend</h3>
            <section className={` grid grid-cols-3 gap-4`}>
              {techSkills.map((skill,index)=>(
                <GridCard icon={skill.icon} level={skill.level} levelVariant={skill.levelVariant} name={skill.name} description={skill.description} key={index}></GridCard>
              ))}
            </section>
          </article>
        </ParallaxLayer> */}
        <ParallaxLayer factor={1.5}  className='flex justify-end gap-3' offset={0} speed={1.5}>
            <section className={`w-3/5 grid grid-cols-2 gap-4`}>
              {techSkills.map((skill,index)=>(
                <GridCard icon={skill.icon} level={skill.level} levelVariant={skill.levelVariant} name={skill.name} description={skill.description} key={index}></GridCard>
              ))}
            </section>
        </ParallaxLayer>
        
        <ParallaxLayer className='flex items-start self-start -z-1 !w-1/3 ' sticky={{ start: 1.2, end: 1.3 }}>
          <div className={`flex flex-col gap-3 justify-center items-center font-extralight text-lg rounded-lg text-gray-200/90 w-full`}>
            <img className='opacity-85' src="/parallaxImages/skillsBackend.png" alt="habilidades backend" />
            <p className='text-pretty'>Web Backend y DBs</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer factor={1.5}  className='flex justify-end gap-3' offset={1} speed={1.5}>
            <section className={`w-3/5 grid grid-cols-2 gap-4`}>
              {techSkillsBackend.map((skill,index)=>(
                <GridCard icon={skill.icon} level={skill.level} levelVariant={skill.levelVariant} name={skill.name} description={skill.description} key={index}></GridCard>
              ))}
            </section>
        </ParallaxLayer>

        <ParallaxLayer className='flex items-start self-start -z-1 !w-1/3 ' sticky={{ start: 2.2, end: 3 }}>
          <div className={`flex flex-col gap-3 justify-center items-center font-extralight text-lg rounded-lg text-gray-200/90 w-full`}>
            <img className='opacity-85' src="/parallaxImages/skillsAdditional.png" alt="habilidades backend" />
            <p className='text-pretty'>Adicionales</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer className='flex items-center justify-end' offset={2.4} speed={1.5}>
          <section className={`w-3/5 grid grid-cols-2 gap-4`}>
              {techSkillsAdditional.map((skill,index)=>(
                <GridCard icon={skill.icon} level={skill.level} levelVariant={skill.levelVariant} name={skill.name} description={skill.description} key={index}></GridCard>
              ))}
            </section>
        </ParallaxLayer>

        
      </Parallax>
  )
}

export default AboutMeParallax