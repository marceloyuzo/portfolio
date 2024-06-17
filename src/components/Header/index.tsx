import { useNavigate } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";


export function Header() {
  const navigate = useNavigate()

  return (
    <>
      <header className="fixed top-2 z-10 text-color_4 w-full flex justify-center px-10 max-md:top-auto max-md:bottom-2">
        <ul className="w-full max-w-xl flex justify-around border-1 rounded-full px-2 py-2 bg-color_1 border-color_7  text-xs md:text-base sm:text-sm">
          <li
            className="cursor-pointer font-semibold py-2 px-4 hidden rounded-full sm:block hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/")}
          >
            Sobre Mim
          </li>

          <li
            className="cursor-pointer font-semibold py-2 px-4 hidden rounded-full sm:block hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#tecnologias")}
          >
            Tecnologias
          </li>
          <li
            className="cursor-pointer font-semibold py-2 px-4 hidden rounded-full sm:block hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#projetos")}
          >
            Projetos
          </li>
          <li
            className="cursor-pointer font-semibold py-2 px-4 hidden rounded-full sm:block hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#educacao")}
          >
            Educação
          </li>
          <li
            className="cursor-pointer font-semibold py-2 px-4 hidden rounded-full sm:block hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#contato")}
          >
            Contato
          </li>

          {/* MOBILE */}
          <li
            className="py-2 px-2 block rounded-full sm:hidden hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/")}
          >
            <FaHome className="text-lg mobile-lg:text-2xl" />
          </li>

          <li
            className="py-2 px-2 block rounded-full sm:hidden hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#tecnologias")}
          >
            <FaTools className="text-lg mobile-lg:text-2xl" />
          </li>
          <li
            className="py-2 px-2 block rounded-full sm:hidden hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#projetos")}
          >
            <GoProjectRoadmap className="text-lg mobile-lg:text-2xl" />
          </li>
          <li
            className="py-2 px-2 block rounded-full sm:hidden hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#educacao")}
          >
            <PiStudent className="text-lg mobile-lg:text-2xl" />
          </li>
          <li
            className="py-2 px-2 block rounded-full sm:hidden hover:bg-color_5 hover:text-color_1 transition-colors duration-300"
            onClick={() => navigate("/#contato")}
          >
            <FaTelegramPlane className="text-lg mobile-lg:text-2xl" />
          </li>
        </ul>
      </header>
    </>
  )
}