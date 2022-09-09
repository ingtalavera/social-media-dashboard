import { Checkbox } from "./Checkbox"


export const DarkModeMenu = () => {

  const handleChange = (value: boolean) => {
    if (value)
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.remove('dark');
  }

  return (
    <div className="flex items-center justify-between md:space-x-4">
      <p className="text-sm font-bold text-darkgrayishblue dark:text-desaturatedblue">Dark Mode</p>
      <Checkbox onChange={handleChange} />
    </div>
  )
}
