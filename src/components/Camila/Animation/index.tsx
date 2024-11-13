'use client';
import Image from 'next/image';
import './Animation.scss';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import folha from './assets/folha.png';
import anis from './assets/anis.png';
import tomate from './assets/tomate.png';
import alecrim from './assets/alecrim.png';


import { useLayoutEffect } from 'react';

const Animation = () => {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.animation__folha1', {
      bottom: '10%',
      right: '5%',
      rotate: '0deg',
      scrollTrigger: { 
        trigger: ".animation",
        start: "top 200px",
        end: "bottom 500px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.animation__folha1');
    }

  }, []);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.animation__anis1', {
      top: '150%',
      left: '10%',
      rotate: '350deg',
      scrollTrigger: { 
        trigger: ".animation",
        start: "top 500px",
        end: "bottom 10px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.animation__anis1');
    }

  }, []);

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.animation__tomate', {
      bottom: '120%',
      rotate: '360deg',
      scrollTrigger: { 
        trigger: ".animation",
        start: "top 500px",
        end: "bottom 10px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.animation__tomate');
    }

  }, []);

  useLayoutEffect(() => { 
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.animation__tomate2', {
      top: '120%',
      left: '40%',
      rotate: '360deg',
      scrollTrigger: { 
        trigger: ".animation",
        start: "top 500px",
        end: "bottom 10px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.animation__tomate2');
    }

  }, []);

  useLayoutEffect(() => { 

    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.animation__alecrim', {
      bottom: '100px',
      rotate: '360deg',
      right: '60%',
      scrollTrigger: { 
        trigger: ".animation",
        start: "top 500px",
        end: "bottom 10px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf('.animation__alecrim');
    }

  }, []);



  return (
    <div className='animation'>

      <Image src={folha} alt='folha' className='animation__folha1' />
      <Image src={anis} alt='anis' className='animation__anis1' />
      <Image src={tomate} alt='tomate' className='animation__tomate' />
      <Image src={tomate} alt='tomate' className='animation__tomate2' />
      <Image src={alecrim} alt='alecrim' className='animation__alecrim' />
    </div>
  )
};

export default Animation;