import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";




function CustomLink({ children, to }) {
    const location = useLocation();
    const match = location.pathname === to;


    return (
        <li className="relative group">
            <Link
          
                to={to}
                className={
                    match
                        ? "item-menu  cs-menuItem bg-yellow-300 text-white before:contents-[''] before:absolute before:w-full before:h-[80%] before:bg-transparent before:-bottom-6 before:left-0 "
                        : "item-menu cs-menuItem before:contents-[''] before:absolute before:w-full before:h-[80%] before:bg-transparent before:-bottom-6 before:left-0"
                }
            >
                {children}
            </Link>
        </li>
    );
}
export default CustomLink;
