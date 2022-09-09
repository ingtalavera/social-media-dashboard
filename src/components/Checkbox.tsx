import { useEffect, useState } from "react"

interface CheckboxProps {
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ onChange }: CheckboxProps) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  }

  useEffect(() => {
    onChange(isOn)
  }, [isOn])

  return (
    <div
      className={`p-1 rounded-full w-12 flex bg-toggle-base dark:bg-gradient-to-r from-toggle-start to-toggle-end ${isOn ? 'justify-start' : 'justify-end'}`}
      onClick={toggleSwitch}
    >
      <div className="rounded-full h-4 w-4 bg-white dark:bg-darkbluebg"></div>
    </div >
  )
}
