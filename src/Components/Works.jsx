import Cup from "../assets/Image/cup.png"

const Works = () => {
  return (
    <section className="mt-40">
        <h2 className="text-7xl uppercase tracking-wider font-bold flex items-center gap-3 mb-5">Works <img src={Cup} alt="Work" /></h2>
        <p className="text-2xl tracking-wide font-medium leading-8 mb-16">Innovate or Evaporate: Unleashing the Power of Creative Thinking!!!</p>

        <div className="border-b-4 border-orange-400 pb-16 mb-16">
          <a href="#" target="_blank" className="flex justify-between items-start ">
            <div>
              <h3 className="work-title">Facebook</h3>
              <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure explicabo dolores.</p>
            </div>
            <div>
              <span className="work-chip">HTML</span>
              <span className="work-chip">CSS</span>
              <span className="work-chip">React</span>
            </div>
          </a>
        </div>

        <div className="border-b-4 border-orange-400 pb-16 mb-16">
          <a href="#" target="_blank" className="flex justify-between items-start ">
            <div>
              <h3 className="work-title">Facebook</h3>
              <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure explicabo dolores.</p>
            </div>
            <div>
              <span className="work-chip">HTML</span>
              <span className="work-chip">CSS</span>
              <span className="work-chip">React</span>
            </div>
          </a>
        </div>

        <div className="border-b-4 border-orange-400 pb-16 mb-16">
          <a href="#" target="_blank" className="flex justify-between items-start ">
            <div>
              <h3 className="work-title">Facebook</h3>
              <p className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure explicabo dolores.</p>
            </div>
            <div>
              <span className="work-chip">HTML</span>
              <span className="work-chip">CSS</span>
              <span className="work-chip">React</span>
            </div>
          </a>
        </div>
    </section>
  )
}

export default Works;