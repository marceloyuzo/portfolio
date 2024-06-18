import "./style.css"
import photo from "../../assets/WhatsApp Image 2024-06-02 at 01.50.26.jpeg"
import reactLogo from '../../assets/react-2.svg'
import tailwindLogo from '../../assets/tailwindcss.svg'
import typescriptLogo from '../../assets/typescript-2.svg'
import firebaseLogo from '../../assets/firebase-1.svg'
import databaseProjectImage from '../../assets/DatabaseProject_image.png'
import eCommerceImage from '../../assets/E-commerceProject_image.png'
import criptocurrencyImage from '../../assets/CriptoCurrency_image.png'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Cardtool } from "../../components/Cardtool";
import { useEffect, useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper";
import { Swiper as SwiperType } from 'swiper';

import { Tooltip } from "react-tooltip"
import { CardEducation } from "../../components/CardEducation"
import { Header } from "../../components/Header"
import { useLocation } from "react-router-dom"


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
    description: "O GAMESCOMDB é uma plataforma inspirada em sites como MyAnimeList e Letterboxd, focada em jogos. Os usuários podem criar perfis customizáveis para reunir os jogos que já jogaram, indicar seus favoritos e escrever reviews. Oferece opções de privacidade, permitindo que os perfis sejam públicos, não listados ou privados.\nO projeto utiliza a API da Steam e foi desenvolvido com ênfase no frontend, o backend não está no ar. No momento não foi projetado para utilizar em mobile.",
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
      },
      {
        name: "Firebase",
        logo: firebaseLogo
      }
    ],
    url: "https://gamescomdb.vercel.app",
    githubProject: "https://github.com/marceloyuzo/gamescomdb"
  },
  {
    id: "02",
    name: "E-Commerce De Roupas",
    description: "O projeto loja de roupas foi desenvolvido pegando elementos de grandes lojas como Nike, Puma, Vans e Adidas, os objetivos principais foram o uso de contexto para o sistema de carrinho, aplicação de filtros em produtos, cadastrar um pedido, utilizar uma api para identificar o endereço e outros fundamentos de react.\nNão teve como objetivo desenvolver o backend, então foi utilizado o firebase para armazenar os produtos e pedidos. No momento não foi projetado para utilizar em mobile.",
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
      },
      {
        name: "Firebase",
        logo: firebaseLogo
      }
    ],
    url: "https://loja-roupas-two.vercel.app/",
    githubProject: "https://github.com/marceloyuzo/loja-roupas"
  },
  {
    id: "03",
    name: "Cripto Currency",
    description: "O projeto cripto currency foi desenvolvido durante o curso de React, os principais pontos foram a utilização de uma api para carregar os tipos de cripto, paginação de uma lista, metodos GET para id unico em páginas detalhadas da moeda, filtragem por nome. Foi um dos primeiros projetos desenvolvidos no curso.",
    thumb: criptocurrencyImage,
    stacks: [
      {
        name: "ReactJS",
        logo: reactLogo
      },
      {
        name: "Typescript",
        logo: typescriptLogo
      },
    ],
    url: "https://cripto-currency-marceloyuzos-projects.vercel.app/",
    githubProject: "https://github.com/marceloyuzo/CriptoCurrency"
  }
]


export function Landing() {
  const [activeProject, setActiveProject] = useState<projectsProps>(projects[0])
  const [copy, setCopy] = useState(false)
  const [visible, setVisible] = useState(false)
  const emailInput = "marceloyuzo0@hotmail.com"
  const swiperRef = useRef<SwiperCore | null>(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

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

  const descriptionParagraphs = activeProject.description.split('\n').map((paragraph, index) => (
    <div key={index} className="text-color_4 text-justify text-sm font-normal indent-4 max-sm:text-xs">
      {paragraph}
    </div>
  ));

  return (
    <main>
      <Header />

      <section className="section-1 flex justify-center items-center gap-10 max-xl:flex-col-reverse max-xl:pt-20 max-md:pt-0 max-sm:h-dvh max-sm:py-10" id="section-1">
        <div className={`w-full max-w-3xl px-8 transition-opacity transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} duration-1000 ease-in`}>
          <h1 className="text-7xl text-color_5 font-extrabold mb-5 text-shadow text-center max-sm:text-4xl max-mobile-xl:text-3xl max-mobile-sm:text-2xl">REACT DEVELOPER</h1>

          <p className="text-color_4 text-justify indent-4 max-sm:text-sm max-mobile-sm:text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className={`flex flex-col gap-2 text-color_7 max-xl:flex-row transition-opacity transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} duration-1000 ease-in`}>
          <a href="https://www.linkedin.com/in/marcelo-yuzo-itami-0a79a2263/" target="_blank">
            <FaLinkedin size={50} className="max-sm:size-10 animation_icon" />
          </a>
          <a href="https://github.com/marceloyuzo" target="_blank">
            <FaGithub size={50} className="max-sm:size-10 animation_icon" />
          </a>
          <a href="https://www.instagram.com/marceloyuzo/" target="_blank">
            <FaInstagram size={50} className="max-sm:size-10 animation_icon" />
          </a>
        </div>
        <div className={`relative transition-opacity transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} duration-1000 ease-in`}>
          <img
            className="relative size-80 rounded-full object-cover z-20 shadow-2xl max-sm:size-60 max-mobile-xl:size-52"
            src={photo}
            alt="Foto de perfil"
          />
          <div className="absolute top-5 -right-5 size-80 rounded-full border-2 border-color_5 z-0 shadow-2xl max-sm:size-60 max-mobile-xl:size-52"></div>
        </div>
      </section>


      <section className="section-2 flex flex-col justify-center items-center max-md:h-auto max-lg:py-40" id="tecnologias">
        <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-md:text-2xl project_animation max-mobile-lg:mb-10 max-mobile-sm:text-xl">TECNOLOGIAS</h1>
        <div className="grid grid-cols-3 gap-20 max-md:grid-cols-2 max-mobile-lg:grid-cols-1 max-mobile-lg:gap-10 max-lg:gap-14 ">
          <div className="project_animation animation_card">
            <Cardtool name="TailwindCSS" logo={tailwindLogo} bg_color="bg-color_6" border_color="border-color_6" />
          </div>
          <div className="project_animation animation_card">
            <Cardtool name="ReactJS" logo={reactLogo} bg_color="bg-color_5" border_color="border-color_5" />
          </div>
          <div className="project_animation animation_card">
            <Cardtool name="Typescript" logo={typescriptLogo} bg_color="bg-color_6" border_color="border-color_6" />
          </div>
        </div>
      </section>



      <section className="section-3 flex flex-col justify-center items-center px-10 max-lg:h-auto max-lg:py-40" id="projetos">
        <div className="w-full max-w-6xl flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-lg:mb-10 max-md:text-2xl project_animation max-mobile-lg:mb-10 max-mobile-sm:text-xl">PROJETOS PESSOAIS</h1>
          <div className="w-full flex justify-between gap-10 max-lg:gap-0 max-lg:flex-col-reverse max-lg:items-center project_animation">
            <div className="w-full max-w-xl flex flex-col justify-between max-lg:max-w-lg max-sm:max-w-md max-mobile-xl:max-w-sm">
              <span className="text-7xl text-color_4 font-mono mb-2 max-lg:text-5xl max-lg:mt-2 max-sm:text-4xl">
                {activeProject.id}
              </span>
              <h2 className="text-4xl text-color_5 font-bold mb-8 max-lg:text-2xl max-lg:mb-4 max-sm:text-xl">
                {activeProject.name}
              </h2>
              <div>
                {descriptionParagraphs}
              </div>
              <div className="w-full flex gap-5 mb-4 mt-8 max-lg:mt-4 max-mobile-xl:gap-2">
                {activeProject.stacks.map((stack, index) => (
                  <div key={index} className="border-1 border-color_6 rounded-full flex justify-center items-center animation_icon">
                    <img
                      className="w-full max-w-12 min-w-12 max-h-12 p-2.5 max-lg:max-w-10 max-lg:min-w-10 max-lg:max-h-10 max-xs:max-w-9 max-xs:min-w-9 max-xs:max-h-9"
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
              className="w-full max-w-xl max-lg:max-w-lg max-lg:h-auto max-sm:max-w-md max-mobile-xl:max-w-sm"
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="relative w-full max-w-xl max-lg:max-w-lg max-lg:h-auto max-sm:max-w-md max-mobile-xl:max-w-sm">
                  <img
                    className="w-full h-full object-cover rounded-md "
                    src={project.thumb}
                    alt={project.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex justify-between max-lg:px-0 max-lg:max-w-lg max-sm:max-w-md max-mobile-xl:max-w-sm ">
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
                    className="text-color_7 max-lg:max-w-10 max-lg:size-9 max-xs:size-7"
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
                <FaGithub size={40} className="text-color_7 max-lg:size-9 max-xs:size-7" />
                <Tooltip id={activeProject.githubProject} />
              </a>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-color_5 text-color_1 px-3 text-xl font-bold rounded-md transition-colors duration-500 hover:bg-color_7"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoIosArrowBack />
              </button>
              <button
                className="bg-color_5 text-color_1 px-3 text-xl font-bold rounded-md transition-colors duration-500 hover:bg-color_7"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

      </section>
      <section className="section-4 flex flex-col justify-center items-center" id="educacao">
        <h1 className="text-4xl text-color_5 font-extrabold mb-16 text-shadow text-center max-sm:text-2xl project_animation">EDUCAÇÃO</h1>

        <div className="flex justify-center items-center project_animation">
          <div className="w-full max-w-6xl grid grid-cols-2 gap-10 px-10 max-xl:grid-cols-1">
            <CardEducation yearStart="2022" yearEnd="2026" course="Ciência da Computação" institution="Universidade Estadual de Maringá" />
            <CardEducation yearStart="2024" yearEnd="2024" course="React Js com TypeScript do zero ao avançado na pratica" institution="Udemy" />
          </div>
        </div>
      </section>
      <section className="section-5 w-full" id="contato">
        <div className="w-full flex justify-center py-20 px-10">
          <div className="w-full flex flex-col gap-14 justify-center items-start max-w-6xl max-xl:max-w-3xl max-lg:max-w-2xl max-md:gap-10">
            <h1 className="text-4xl font-bold text-color_5 max-md:text-3xl max-sm:text-2xl max-mobile-xl:text-xl">ENTRE EM CONTATO COMIGO</h1>
            <div className="w-full flex gap-3">
              <input
                className="py-2 px-4 w-64 rounded-lg outline-none max-md:text-sm max-md:w-56 max-mobile-xl:text-xs max-mobile-xl:w-48 "
                type="text"
                value={emailInput}
                readOnly={true}
              />
              <button
                className={`rounded-lg p-2 ${copy ? 'bg-color_5' : 'bg-color_4'} transition-all duration-300 max-md:p-1`}
                onClick={() => copyEmail()}
                data-tooltip-id="copy"
                data-tooltip-content="Copiar Email"
              >
                {copy ? (
                  <FaCheck size={24} className="max-md:size-5" />
                ) : (
                  <FaRegCopy size={24} className="max-md:size-5" />
                )}

                <Tooltip id="copy" />
              </button>
            </div>
            <div className="flex gap-4 text-color_7">
              <a href="https://www.linkedin.com/in/marcelo-yuzo-itami-0a79a2263/" target="_blank">
                <FaLinkedin size={50} className="max-sm:size-10 animation_icon" />
              </a>
              <a href="https://github.com/marceloyuzo" target="_blank">
                <FaGithub size={50} className="max-sm:size-10 animation_icon" />
              </a>
              <a href="https://www.instagram.com/marceloyuzo/" target="_blank">
                <FaInstagram size={50} className="max-sm:size-10 animation_icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}