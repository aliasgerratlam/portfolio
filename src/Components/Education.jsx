const Education = () => {
  return (
    <section className="mt-20">
        <div className="border-4 border-orange-400 rounded-3xl">
            <div className="p-8 bg-orange-400 rounded-2xl">
                <h2 className="text-5xl font-bold tracking-wide">Education</h2>
            </div>

            <div className="p-4 space-y-4">
                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8 border-[3px] rounded-3xl border-orange-400 border-dashed">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Present</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start border-[3px] rounded-3xl border-orange-400 border-dashed">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">M.Sc in CS</h2>
                        <p className="text-2xl font-normal tracking-wider">Makhanlal Chaturvedi university</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">Aug 2018</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">B.Com Graduate</h2>
                        <p className="text-2xl font-normal tracking-wider">P.M.B Gujrati Collage</p>
                    </div>
                </div>

                <div className="grid grid-cols-[300px_minmax(900px,_1fr)] gap-4">
                    <div className="p-10 bg-slate-100 rounded-2xl text-center flex flex-col justify-center items-center gap-8">
                        <h3 className="text-3xl font-semibold tracking-wide leading-6">June 2016</h3>
                    </div>
                    <div className="p-10 bg-slate-100 rounded-2xl grid place-content-center justify-start">
                        <h2 className="text-4xl font-bold tracking-wider mb-5">High School Graduate</h2>
                        <p className="text-2xl font-normal tracking-wider">Ammar Bagh - e - Nounihal Senior Secondry School</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education