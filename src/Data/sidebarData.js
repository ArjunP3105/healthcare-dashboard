import { RxDashboard } from "react-icons/rx";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";

import { BiSolidChart } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";

export const sidebarData = [
  {
    type: "General",
    options: [
      {
        icon: RxDashboard,
        name: "Dashboard",
      },
      {
        icon: PiArrowsDownUpFill,
        name: "History",
      },
      {
        icon: FaCalendarDays,
        name: "Calendar",
      },
      {
        icon: CiSquarePlus,
        name: "Appointments",
      },
      {
        icon: BiSolidChart,
        name: "Statistics",
      },
    ],
  },
  {
    type: "Tools",
    options: [
      {
        icon: IoChatbubbleEllipsesOutline,
        name: "Chat",
      },
      {
        icon: IoIosCall,
        name: "Support",
      },
    ],
  },
];
