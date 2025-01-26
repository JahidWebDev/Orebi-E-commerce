import logo from "../assets/OREBI©.png";

const Navbar = () => {
  return (
    <div className="bg-[#d2dae2]">
      <div className="max-w-container mx-auto">
        <div className="flex items-center py-[32px]">
          <div className="md:w-5/12">
            <img src={logo} alt="loading...." />
          </div>
          <div className="md:w-9/50">
            <ul className="flex gap-x-[39px] text-[14px] text-[#767676]">
              <li className="font-bold text-[#262626] ">Home</li>
              <li className="hover:text-primary ">Shop</li>
              <li className="hover:text-primary ">About</li>
              <li className="hover:text-primary ">Contacts</li>
              <li className="hover:text-primary ">Journal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
