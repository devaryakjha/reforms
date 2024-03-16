"use client";

import Logout from "@heroicons/react/20/solid/ArrowLeftStartOnRectangleIcon";

type DropdownType = "link" | "button";

interface DropdownOption<T extends DropdownType = "link"> {
  icon?: HeroIconComponent;
  title: string;
  type: T;
  url: T extends "link" ? string : never;
}

export type DropdownOptionLink = DropdownOption<"link">;
export type DropdownOptionButton = DropdownOption<"button">;

interface DropdownSection {
  id: string;
  items: Array<DropdownOptionLink | DropdownOptionButton>;
}

export type DropdownOptions = Array<DropdownSection>;

const dropdownoptions: DropdownOptions = [
  {
    id: "profile",
    items: [
      {
        icon: Logout,
        type: "link",
        title: "Logout",
        url: "/api/auth/logout",
      },
    ],
  },
];

export default dropdownoptions;
