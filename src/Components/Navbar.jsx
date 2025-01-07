import logo from "../assets/OREBI©.png"



const Navbar = () => {
  return (
    <div className="bg-[#d2dae2]">
        <div className="max-w-container mx-auto">
       <div className="flex items-center py-[32px]">
        <div className="md:w-5/12">
        <img src={logo} alt="loading...." />
        </div>
        <div className="md:w-9/50">
            <ul className="flex gap-x-[39px] font-DMSans text-[14px] text-[#767676]">
                <li className=" font-bold text-[#262626] font-DMSans">Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contacts</li>
                <li>Journal</li>
            </ul>
        </div>
       </div>     
    </div>
    </div>
  )
}

export default Navbar