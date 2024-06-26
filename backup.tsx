import "./style.css"
import photo from "../../assets/WhatsApp Image 2024-06-02 at 01.50.26.jpeg"
import reactLogo from '../../assets/react-2.svg'
import tailwindLogo from '../../assets/tailwindcss.svg'
import typescriptLogo from '../../assets/typescript-2.svg'
import databaseProjectImage from '../../assets/DatabaseProject_image.png'
import eCommerceImage from '../../assets/E-commerceProject_image.png'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { Cardtool } from "../../components/Cardtool";
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper";
import { Swiper as SwiperType } from 'swiper';

import { Tooltip } from "react-tooltip"
import { CardEducation } from "../../components/CardEducation"


interface projectsProps {
  id: string,
  name: string,
  description: string,
  thumb: string,
  stacks: stackProps[],
  url: string | null,
  githubProject: string
}

interface stackProps {
  name: string,
  logo: string
}


const projects: projectsProps[] = [
  {
    id: "01",
    name: "Database De Jogos",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolores odit eos ipsum numquam odio, ab ea pariatur ad quaerat magni nemo deserunt veniam consectetur possimus quae minus ullam. Numquam.",
    thumb: databaseProjectImage,
    stacks: [
      {
        name: "ReactJS",
        logo: reactLogo
      },
      {
        name: "Typescript",
        logo: typescriptLogo
      },
      {
        name: "TailwindCSS",
        logo: tailwindLogo
      }
    ],
    url: "https://gamescomdb.vercel.app",
    githubProject: "https://github.com/marceloyuzo/gamescomdb"
  },
  {
    id: "02",
    name: "E-Commerce De Roupas",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolores odit eos ipsum numquam odio, ab ea pariatur ad quaerat magni nemo deserunt veniam consectetur possimus quae minus ullam. Numquam.",
    thumb: eCommerceImage,
    stacks: [
      {
        name: "ReactJS",
        logo: reactLogo
      },
      {
        name: "Typescript",
        logo: typescriptLogo
      },
      {
        name: "TailwindCSS",
        logo: tailwindLogo
      }
    ],
    url: null, // mudar depois
    githubProject: "https://github.com/marceloyuzo/loja-roupas" // mudar depois
  }
]


export function Landing() {
  const [activeProject, setActiveProject] = useState<projectsProps>(projects[0])
  const emailInput = "marceloyuzo0@hotmail.com"
  const [copy, setCopy] = useState(false)
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex

    setActiveProject(projects[currentIndex])
  }

  function copyEmail() {
    navigator.clipboard.writeText(emailInput).then(() => {
      setCopy(true)

      setTimeout(() => {
        setCopy(false)
      }, 2000);
    });
  }

  return (
    <main>


      <section className="section-1 flex justify-center items-center gap-10 max-xl:flex-col-reverse max-sm:h-auto max-sm:py-40">
        <div className="w-full max-w-3xl px-8">
          <h1 className="text-7xl text-color_5 font-extrabold mb-5 text-shadow text-center max-sm:text-5xl">REACT DEVELOPER</h1>

          <p className="text-color_4 text-justify indent-4 max-sm:text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="flex flex-col gap-2 text-color_7 max-xl:flex-row">
          <a href="https://www.linkedin.com/in/marcelo-yuzo-itami-0a79a2263/" target="_blank">
            <FaLinkedin size={50} className="max-sm:size-10" />
          </a>
          <a href="https://github.com/marceloyuzo" target="_blank">
            <FaGithub size={50} className="max-sm:size-10" />
          </a>
          <a href="https://www.instagram.com/marceloyuzo/" target="_blank">
            <FaInstagram size={50} className="max-sm:size-10" />
          </a>
        </div>
        <div className="relative">
          <img
            className="relative size-80 rounded-full object-cover z-20 shadow-2xl max-sm:size-60"
            src={photo}
            alt=""
          />
          <div className="absolute top-5 -right-5 size-80 rounded-full border-2 border-color_5 z-0 shadow-2xl max-sm:size-60"></div>
        </div>
      </section>


      <section className="section-2 flex flex-col justify-center items-center max-lg:h-auto max-lg:py-40">
        <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-sm:text-3xl">TECNOLOGIAS</h1>
        <div className="grid grid-cols-3 gap-20 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-14">
          <Cardtool name="TailwindCSS" logo={tailwindLogo} bg_color="bg-color_6" border_color="border-color_6" />
          <Cardtool name="ReactJS" logo={reactLogo} bg_color="bg-color_5" border_color="border-color_5" />
          <Cardtool name="Typescript" logo={typescriptLogo} bg_color="bg-color_6" border_color="border-color_6" />
        </div>
      </section>



      <section className="section-3 flex flex-col justify-center items-center">
        <div className="w-full max-w-5xl flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-sm:text-3xl">PROJETOS PESSOAIS</h1>
          <div className="w-full flex justify-between">
            <div className="w-full max-w-xl flex flex-col justify-between">
              <span className="text-7xl text-color_4 font-mono mb-2">
                {activeProject.id}
              </span>
              <h2 className="text-4xl text-color_5 font-bold mb-8">
                {activeProject.name}
              </h2>
              <p className="text-color_4 font-normal mb-14">
                {activeProject.description}
              </p>
              <div className="w-full flex gap-5 mb-4">
                {activeProject.stacks.map((stack, index) => (
                  <div key={index} className="border-1 border-color_6 rounded-full flex justify-center items-center">
                    <img
                      className="w-full max-w-12 p-2.5"
                      src={stack.logo}
                      alt={stack.name}
                      data-tooltip-id={stack.name}
                      data-tooltip-content={stack.name}
                      data-tooltip-delay-show={300}
                    />
                    <Tooltip id={stack.name} />
                  </div>
                ))}
              </div>
            </div>
            <Swiper
              className="w-full max-w-2xl"
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="relative w-full h-96">
                  <img
                    className="w-full h-full max-w-lg object-cover rounded-md"
                    src={project.thumb}
                    alt={project.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex gap-4">
              {activeProject.url && (
                <a
                  href={activeProject.url}
                  target="_blank"
                  data-tooltip-id={activeProject.url}
                  data-tooltip-content={"Link do projeto no ar."}
                  data-tooltip-delay-show={300}
                >
                  <FiExternalLink
                    size={40}
                    className="text-color_7"
                  />
                  <Tooltip id={activeProject.url} />
                </a>
              )}
              <a
                href={activeProject.githubProject}
                target="_blank"
                data-tooltip-id={activeProject.githubProject}
                data-tooltip-content={"Repositório github do projeto."}
                data-tooltip-delay-show={300}
              >
                <FaGithub size={40} className="text-color_7" />
                <Tooltip id={activeProject.githubProject} />
              </a>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-color_5 text-color_1 px-3 text-xl font-bold rounded-md"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="bg-color_5 text-color_1 px-3 text-xl font-bold rounded-md"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

      </section>
      <section className="section-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-sm:text-3xl">EDUCAÇÃO</h1>

        <div className="w-full max-w-6xl grid grid-cols-2 gap-10">
          <CardEducation yearStart="2022" yearEnd="2026" course="Ciência da Computação" institution="Universidade Estadual de Maringá" />
          <CardEducation yearStart="2024" yearEnd="2024" course="React Js com TypeScript do zero ao avançado na pratica" institution="Udemy" />
        </div>
      </section>
      <section className="section-5 w-full ">
        <div className="flex flex-col gap-14 justify-center py-40 ml-40">
          <h1 className="text-4xl font-bold text-color_5">ENTRE EM CONTATO COMIGO</h1>

          <div className="flex items-center gap-3">
            <input
              className="py-2 px-4 w-full max-w-72 rounded-lg outline-none"
              type="text"
              value={emailInput}
              readOnly={true}
            />
            <button
              className={` rounded-lg p-2 ${copy ? 'bg-color_5' : 'bg-color_4'} transition-colors duration-200`}
              onClick={() => copyEmail()}
            >
              <FaRegCopy size={24} />
            </button>
          </div>
          <div className="flex gap-4 text-color_7">
            <a href="https://www.linkedin.com/in/marcelo-yuzo-itami-0a79a2263/" target="_blank">
              <FaLinkedin size={50} className="max-sm:size-10" />
            </a>
            <a href="https://github.com/marceloyuzo" target="_blank">
              <FaGithub size={50} className="max-sm:size-10" />
            </a>
            <a href="https://www.instagram.com/marceloyuzo/" target="_blank">
              <FaInstagram size={50} className="max-sm:size-10" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}