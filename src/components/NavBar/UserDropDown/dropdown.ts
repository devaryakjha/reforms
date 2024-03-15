"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/20/solid";

type DropdownHeroIcon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
    title?: string;
    titleId?: string;
  } & React.RefAttributes<SVGSVGElement>
>;

type DropdownType = "link" | "button";

interface DropdownOption<T extends DropdownType = "link"> {
  icon?: DropdownHeroIcon;
  title: string;
  type: T;
  url: T extends "link" ? string : never;
}

type DropdownOptionLink = DropdownOption<"link">;
type DropdownOptionButton = DropdownOption<"button">;

interface DropdownSection {
  id: string;
  items: Array<DropdownOptionLink | DropdownOptionButton>;
}

const dropdownoptions: Array<DropdownSection> = [
  {
    id: "profile",
    items: [
      {
        icon: ArrowRightStartOnRectangleIcon,
        type: "link",
        title: "Logout",
        url: "/api/auth/logout",
      },
    ],
  },
];

export default dropdownoptions;
