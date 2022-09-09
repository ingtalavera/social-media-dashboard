import { IconUp, IconDown } from "../constants";


interface Props {
  icon: string;
  followers: string;
  today: string;
  social: string;
  user: string;
  down: boolean;
  headerColor: string;
}

export const MainCard = ({ social, icon, followers, today, user, down, headerColor }: Props) => {

  const arrowIcon = down ? IconDown : IconUp;

  return (
    <div className="rounded-lg bg-lightgrayishblue overflow-hidden pb-6 dark:bg-darkdesaturatedblue">
      <div className={`h-1 ${headerColor}`}></div>

      <div className="flex flex-col items-center mt-8 space-y-6">
        <div className="flex space-x-2 items-center">
          <img src={icon} alt={social} className="h-5 w-5" />
          <span aria-label="username" className="text-sm text-darkgrayishblue font-bold dark:text-desaturatedblue">{user}</span>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <p className="font-bold text-6xl dark:text-white">{followers}</p>
          <p className="text-darkgrayishblue text-xs dark:text-desaturatedblue" style={{ letterSpacing: '5px' }}>FOLLOWERS</p>
        </div>
        <div className="flex space-x-1 items-center">
          <img src={arrowIcon} alt={down ? 'arrow-down' : 'arrow-up'} className="h-1 w-2" />
          <p className={`text-xs font-bold ${down ? 'text-brightred' : 'text-limegreen'}`}>{today} Today</p>
        </div>
      </div>

    </div>
  )
}
