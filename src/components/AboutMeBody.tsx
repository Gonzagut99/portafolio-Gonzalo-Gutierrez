import React, {useState} from 'react'
import AboutMeParallax from '../components/AboutMeParallax/AboutMeParallax';
import TabNav from '../components/TabNav/TabNav'
import AboutMeParallaxEducation from './AboutMeParallax/AboutMeParallaxEducation';

function AboutMeBody() {
    const [activeTab, setActiveTab] = useState('habilidades');
  return (
    <>
        <TabNav activeTab={activeTab} setActiveTab={setActiveTab}></TabNav>
		{/* <section id="sobre_mi_parallax" className="relative w-full h-full flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 lg:w-[740px] mx-auto pb-8 sm:pb-10 md:pb-14 lg:pb-20">
			<AboutMeParallax id="parallax1"></AboutMeParallax>
		</section>	 */}
        <section id="sobre_mi_parallax" className="relative w-full h-full flex flex-col gap-y-2 sm:gap-y-3 md:gap-y-4 lg:gap-y-5 lg:w-[740px] mx-auto pb-8 sm:pb-10 md:pb-14 lg:pb-20">
            {activeTab === 'habilidades' && <AboutMeParallax id={activeTab} activeTab={activeTab} />}
            {activeTab === 'educacion' && <AboutMeParallaxEducation id={activeTab} activeTab={activeTab}/>}
        </section>
    </>
  )
}

export default AboutMeBody