import PaperPlane from "../assets/Image/plane.svg"
import Hi from "../assets/Image/hi.png"
import LinkedIn from "../assets/Image/linkedin.svg"
import Instagram from "../assets/Image/instagram.svg"
import Codepen from "../assets/Image/codepen.svg"
import Heart from "../assets/Image/heart.png"

const Footer = () => {
  const texts = ["Let’s Talk", "Work With Me", "Say Hi!"];

  return (
    <footer className="mt-40 overflow-hidden">
        <div className="-rotate-3 pt-20">
          <ul className="flex flex-nowrap gap-20 py-10 border-y-2 border-gray-800 mb-20">
            {Array(8).fill(texts).flat().map((text, i) => <li key={i} className="text-5xl font-semibold tracking-wide whitespace-nowrap relative before:content-[''] before:absolute before:top-[50%] before:right-[-45px] before:w-3 before:h-3 before:bg-orange-500 before:rounded-full">{text}</li>)}
          </ul>
        </div>

        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-8">
            <img src={PaperPlane} alt="" className="mx-auto" />
          </div>
          <div className="text-center mb-5">
            <a href="mailto:aliasger5363@gmail.com" className="flex items-center justify-center gap-5 w-3/6 mx-auto bg-orange-500 text-white text-4xl font-bold px-10 py-5 rounded-full -rotate-3 transition hover:bg-orange-600 active:scale-95"><img src={Hi} alt="Hi" /> aliasger5363@gmail.com</a>
          </div>
          <ul className="mt-20 mb-40 flex justify-center items-center gap-20">
            <li><a href="#" className="inline-block transition active:scale-95"><img src={LinkedIn} alt="LinkedIn" /></a></li>
            <li><a href="#" className="inline-block transition active:scale-95"><img src={Instagram} alt="Instagram" /></a></li>
            <li><a href="#" className="inline-block transition active:scale-95"><img src={Codepen} alt="Codepen" /></a></li>
          </ul>

          <p className="w-full flex items-center justify-center text-4xl font-bold gap-3 mb-8">Made with <span><img src={Heart} alt="Heart" /></span> By Me :)</p>
        </div>

    </footer>
  )
}

export default Footer