import Link from "next/link";
import styles from "./LinkOption.module.css";
import clsx from "clsx";
import type { DropdownOptionLink } from "./dropdown";
import { Menu } from "@headlessui/react";

interface LinkOptionProps {
  option: DropdownOptionLink;
}

export default function LinkOption({ option }: LinkOptionProps) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={option.url}
          className={clsx("group", styles.menulink, {
            [styles.active]: active,
            [styles.inactive]: !active,
          })}
        >
          {option.icon && (
            <option.icon className={styles.icon} aria-hidden="true" />
          )}
          {option.title}
        </Link>
      )}
    </Menu.Item>
  );
}
