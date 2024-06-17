

export function Cardtool({ name, logo, bg_color, border_color }: { name: string, logo: string, bg_color: string, border_color: string }) {
  return (
    <>
      <div className={`border-4 ${border_color} flex flex-col justify-center items-center w-full max-w-52 rounded-2xl shadow-2xl drop-shadow-xl max-lg:max-w-48 max-sm:max-w-44 max-mobile-lg:max-w-36`}>
        <img
          className="w-full max-w-40 mx-5 h-52 max-lg:max-w-36 max-sm:max-w-32 max-sm:h-44 max-mobile-lg:max-w-24 max-mobile-lg:h-36"
          src={logo}
          alt=""
        />

        <div className={`${bg_color} w-full max-w-52 rounded-b-lg max-lg:max-w-48 max-sm:max-w-44 max-mobile-lg:max-w-36`}>
          <h2 className="text-2xl text-center text-color_3 font-bold py-2 max-lg:text-xl max-mobile-lg:text-base">{name}</h2>
        </div>
      </div>
    </>
  )
}