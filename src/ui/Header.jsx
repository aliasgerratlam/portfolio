import Sun from "../assets/Image/sun.png"

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <button><img src={Sun} alt="sun" /></button>
        <a href="#" className="font-medium">Download CV</a>
      </div>
      <button className="font-medium">Menu</button>
    </div>
  )
}

export default Header;