import { IColor } from "components/notices/ShortNotice";

export const colorVariants = {
  red: "bg-app-red",
  blue: "bg-app-blue",
  green: "bg-app-green",
  pink: "bg-app-pink",
  smoke: "bg-app-smoke",
  grey: "bg-app-grey",
  yellow: "bg-app-yellow",
  mustard: "bg-app-mustard",
  orange: "bg-app-orange",
} as IColor;

export const effectButton =
  "hover:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)] focus:shadow-[0_5px_20px_-5px_rgba(0,0,0,0.3)]";

export const effectIcon = `hover:scale-110 focus:scale-110 transition-transform duration-300`;

export const effectItem = `hover:shadow-2xl focus:shadow-2xl`;
