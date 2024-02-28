import Clap from "../assets/Image/clap.png"
import Blog1 from "../assets/Image/blog1.jpg"
import Blog2 from "../assets/Image/blog2.jpg"
import More from "../assets/Image/more.svg"

const Blog = () => {
  return (
    <section className="mt-40">
        <h2 className="text-7xl uppercase tracking-wider font-bold flex items-center gap-3 mb-5">Ink and Ideas <img src={Clap} alt="blog" /></h2>
        <p className="text-2xl tracking-wide font-medium leading-8 mb-16">A Journey Through Words and Thoughts</p>
        
        <div className="grid grid-cols-2 gap-16">
            <div className="relative">
                <a href="#">
                    <span className="text-md font-bold tracking-widest rotate-[-90deg] inline-block absolute left-[-40px] top-9">10.10.2024</span>
                    
                    <div className="ml-8">
                        <div className="border-4 border-orange-500 rounded-3xl mb-3">
                            <img src={Blog1} alt="Blog" className="w-full rounded-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-wide">Bits and Bytes: Navigating the Digital Realm</h3>
                    </div>
                </a>
            </div>

            <div className="relative">
                <a href="#">
                    <span className="text-md font-bold tracking-widest rotate-[-90deg] inline-block absolute left-[-40px] top-9">10.10.2024</span>
                    
                    <div className="ml-8">
                        <div className="border-4 border-orange-500 rounded-3xl mb-3">
                            <img src={Blog2} alt="Blog" className="w-full rounded-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-wide">Bits and Bytes: Navigating the Digital Realm</h3>
                    </div>
                </a>
            </div>

            <div className="relative">
                <a href="#">
                    <span className="text-md font-bold tracking-widest rotate-[-90deg] inline-block absolute left-[-40px] top-9">10.10.2024</span>
                    
                    <div className="ml-8">
                        <div className="border-4 border-orange-500 rounded-3xl mb-3">
                            <img src={Blog1} alt="Blog" className="w-full rounded-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-wide">Bits and Bytes: Navigating the Digital Realm</h3>
                    </div>
                </a>
            </div>

            <div className="relative">
                <a href="#" className="block h-full">                    
                    <div className="ml-8 h-full">
                        <div className="border-4 border-orange-500 bg-orange-500 rounded-3xl mb-3 h-[calc(100%_-_40px)] grid place-content-center">
                            <div className="flex items-center justify-center text-5xl font-semibold gap-5">Show More <img src={More} alt="More" /></div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Blog