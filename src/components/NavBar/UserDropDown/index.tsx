"use client";
import Avatar from "@/ui/Avatar";
import { Claims } from "@auth0/nextjs-auth0";
import sections from "./dropdown";
import Dropdown from "@/components/Dropdown";

interface UserdropdownProps {
  claims?: Claims;
}

export default function Userdropdown(props: UserdropdownProps) {
  return (
    <Dropdown options={sections}>
      <Avatar url={props.claims?.picture} priority />
    </Dropdown>
  );
}
