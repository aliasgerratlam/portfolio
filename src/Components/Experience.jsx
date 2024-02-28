const Experience = () => {
  return (
    <section className="mt-40">
        <div className="border-4 border-orange-400 rounded-3xl">
            <div className="p-8 bg-orange-400 rounded-2xl">
                <h2 className="text-5xl font-bold tracking-wide">Experience</h2>
            </div>

            <div className="p-4 space-y-4">
                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8 border-[3px] rounded-3xl border-orange-400 border-dashed">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Mar 2023</h3>
                        <span className="inline-block bg-gray-950 rounded-full w-8 h-1"></span>
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Present</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start border-[3px] rounded-3xl border-orange-400 border-dashed">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">Task Source</h2>
                        <p className="text-2xl font-normal tracking-wider">Frontend Developer</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Jan 2021</h3>
                        <span className="inline-block bg-gray-950 rounded-full w-8 h-1"></span>
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Apr 2021</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">Webenliven Solutions</h2>
                        <p className="text-2xl font-normal tracking-wider">Web Designer</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Dec 2018</h3>
                        <span className="inline-block bg-gray-950 rounded-full w-8 h-1"></span>
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Nov 2020</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">Hbwebsol</h2>
                        <p className="text-2xl font-normal tracking-wider">Web Designer and UI/UX Designer</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Oct 2018</h3>
                        <span className="inline-block bg-gray-950 rounded-full w-8 h-1"></span>
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Nov 2018</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">Infonex Solution, Indore</h2>
                        <p className="text-2xl font-normal tracking-wider">Web Designer</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">June 2016</h3>
                        <span className="inline-block bg-gray-950 rounded-full w-8 h-1"></span>
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Sep 2018</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">Research Communication</h2>
                        <p className="text-2xl font-normal tracking-wider">Article writer &  Manager</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience