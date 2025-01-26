import { FaBarsStaggered } from "react-icons/fa6";
import Dropdown from "./Layouts/Dropdown";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div className="py-[25px] bg-MainColor ">
      <div className="max-w-container mx-auto">
        <div className="flex justify-between ">
          <div className=" flex">
            <Dropdown dropRef={ref}>
              <p className=" font-DMSans text-[14px] font-normal gap-x-2.5 flex text-base">
                <FaBarsStaggered className="text-2xl" />
                Shop by Category
              </p>
              {show && (
                <ul className="absolute">
                  <li>ome</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
              )}
            </Dropdown>
          </div>
          <div>
          <input className="" type="text" />
          </div>
          <div className="flex gap-x-3">
          <FaUser/>
          <FaCartShopping/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
