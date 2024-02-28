import Divider from "../assets/Image/divider.svg"

const FunFact = () => {
  return (
    <section className="mt-40">
        <ul className="w-4/6">
            <li><p className="fact-line">Creating <span className="text-orange-500 font-bold">pixel perfect</span> 👨‍💻 design and responsive.</p></li>
            <li className="my-20"><img src={Divider} alt="divider" /></li>
            <li><p className="fact-line">‍Stepping️ out 🏃 of my comfort <span className="text-orange-500 font-bold">zone a lot</span>.</p></li>
            <li className="my-20"><img src={Divider} alt="divider" /></li>
            <li><p className="fact-line">‍In my free time i like to play <span className="text-orange-500 font-bold">Valorant</span> 😁.</p></li>
            <li className="my-20"><img src={Divider} alt="divider" /></li>
            <li><p className="fact-line">Sometime legends call me <span className="text-orange-500 font-bold">Deadshot</span> 💀.</p></li>
        </ul>
    </section>
  )
}

export default FunFact