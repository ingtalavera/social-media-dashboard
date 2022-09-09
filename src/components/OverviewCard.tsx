import { IconUp, IconDown } from "../constants";


interface Props {
  title: string;
  value: string;
  icon: string;
  percentage: number;
  down: boolean;
}

export const OverviewCard = ({ title, icon, value, percentage, down }: Props) => {
  const arrowIcon = down ? IconDown : IconUp;
  return (
    <div className="rounded-md bg-lightgrayishblue py-6 px-7 dark:bg-darkdesaturatedblue">
      <div className="flex justify-between items-center">
        <p className="text-sm text-darkgrayishblue font-bold capitalize dark:text-desaturatedblue">{title}</p>
        <img src={icon} alt="social-icon" className="h-5 w-5" />
      </div>
      <div className="flex justify-between items-end mt-5">
        <p className="font-bold text-3xl dark:text-white">{value}</p>
        <div className="flex items-center space-x-1">
          <img src={arrowIcon} alt={down ? 'arrow-down' : 'arrow-up'} className="h-1 w-2" />
          <p className={`text-xs font-bold ${down ? 'text-brightred' : 'text-limegreen'}`}>
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  )
}
