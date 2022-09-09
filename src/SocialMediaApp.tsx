import { DarkModeMenu, MainCard, OverviewCard } from "./components"
import { data, overviews } from "./constants"


export const SocialMediaApp = () => {
  return (
    <main className="py-10 px-6 h-full">
      <div className="container mx-auto max-w-6xl">

        <header className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white">Social Media Dashboard</h1>
            <p className="font-bold text-sm text-darkgrayishblue dark:text-desaturatedblue">Total Followers: 23,004</p>
          </div>
          <hr className="my-4 border-gray-400 dark:border-gray-600" />

          <DarkModeMenu />
        </header>


        <section className="flex flex-col mt-10 space-y-6 md:grid md:grid-cols-4 md:gap-8 md:space-y-0">

          {
            data.map(social => (
              <MainCard
                key={social.social}
                {...social}
              />
            ))
          }
        </section>

        <section className="mt-10">
          <h2 className="text-darkgrayishblue font-bold text-2xl dark:text-white">Overview - Today</h2>

          <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-4">
            {
              overviews.map((overview, index) => (
                <OverviewCard
                  key={overview.title + index}
                  {...overview}
                />
              ))
            }
          </div>

        </section>

      </div>
    </main>
  )
}
