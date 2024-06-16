

export function CardEducation({ yearStart, yearEnd, institution, course }: { yearStart: string, yearEnd: string, institution: string, course: string }) {
  return (
    <>
      <div className="border-1 border-color_5 rounded-lg p-6 w-full max-w-4xl shadow-2xl flex flex-col justify-between">
        <span className="text-color_5 text-lg font-mono">{yearStart} - {yearEnd}</span>

        <h2 className="text-color_4 font-mono text-2xl text-shadow max-lg:text-xl max-md:text-lg">{course}</h2>

        <h2 className="text-color_5 font-bold text-2xl text-shadow max-lg:text-xl max-md:text-lg">{institution}</h2>
      </div>
    </>
  )
}