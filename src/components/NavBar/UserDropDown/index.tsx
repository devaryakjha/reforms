import Avatar from "@/ui/Avatar";
import type { Claims } from "@auth0/nextjs-auth0";
import sections from "./dropdown";
import Dropdown from "@/components/Dropdown";

interface UserdropdownProps {
  claims?: Claims;
}

const Userdropdown = (props: UserdropdownProps) => {
  return (
    <Dropdown options={sections}>
      <Avatar url={props.claims?.picture} priority />
    </Dropdown>
  );
};

export default Userdropdown;
