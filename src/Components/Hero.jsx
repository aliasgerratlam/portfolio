import HeroImg from "../assets/Image/hero.svg"

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center justify-around min-h-[calc(100vh_-_150px)]">
        <div className="text-center relative w-2/3 ">
            <img src={HeroImg} alt="Hero" className="mx-auto"/>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full space-y-96">
            <h1 className="font-black uppercase tracking-wider text-6xl">Aliasger Ratlamwala</h1>
            <h2 className="font-black uppercase tracking-wider text-4xl">Frontend Developer</h2>
            </span>
        </div>
        <p className="text-center font-medium px-60 tracking-widest leading-7">Hi, I'm a frontend developer focused on crafting beautiful and intuitive websites. With expertise in HTML, CSS, and React JS, I bring ideas to life and ensure seamless user experiences. Let's collaborate and make your web presence shine!</p>
    </div>
  )
}

export default Hero