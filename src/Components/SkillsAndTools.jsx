import Pin from "../assets/Image/pin.png"

const SkillsAndTools = () => {
  return (
    <section className="mt-40">
        <h2 className="uppercase text-7xl tracking-wider font-bold flex items-center gap-3 mb-5">Skills and Tooools <img src={Pin} alt="Pin" /></h2>
        <p className="text-2xl tracking-wide font-medium w-3/6 leading-8">I then bring your online vision to life with coding or CMS, depending on your needs.</p>

        <div className="pt-10 flex gap-4 flex-wrap">
            <div className="skill-item">HTML5</div>
            <div className="skill-item bg-slate-200 w-80"></div>
            <div className="skill-item bg-slate-200 w-40"></div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">SaSS</div>
            <div className="skill-item bg-slate-200 w-40"></div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item bg-slate-200 w-40"></div>
            <div className="skill-item">Wordpress</div>
            <div className="skill-item">Responsive Design</div>
            <div className="skill-item bg-slate-200 w-28"></div>
            <div className="skill-item">Web Design</div>
            <div className="skill-item">ReactJS</div>
            <div className="skill-item bg-slate-200 w-56"></div>
            <div className="skill-item">Next.JS</div>
            <div className="skill-item">Photoshop</div>
            <div className="skill-item">Design Thinking</div>
            <div className="skill-item bg-slate-200 w-[655px]"></div>
            <div className="skill-item">Blender</div>
        </div>
    </section>
  )
}

export default SkillsAndTools