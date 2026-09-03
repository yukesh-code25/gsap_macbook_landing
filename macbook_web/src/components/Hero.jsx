import { useEffect } from "react";
import { useRef } from "react"

const Hero = () => {
    const videoRef = useRef();

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 2;
    },[])


  return (
    <section id='hero' className="py-100">
        <div>
            <h1 className="pt-10 pb-6">MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>
        
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>Buy</button>
        <p>From $1599 or $133/mon for 12 months</p>
    </section>
  )
}

export default Hero