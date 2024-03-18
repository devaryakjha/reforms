"use client";

import styles from "./Dropdown.module.css";
import type {
  DropdownOptionLink,
  DropdownOptions,
} from "@/components/NavBar/UserDropDown/dropdown";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import LinkOption from "@/components/NavBar/UserDropDown/LinkOption";

interface DropdownProps {
  children: React.ReactNode;
  options: DropdownOptions;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <Menu as="div" className={clsx("not-typography", styles.menu)}>
      <Menu.Button className={styles.button}>{props.children}</Menu.Button>
      <Transition
        as={Fragment}
        enter={styles.enter}
        enterFrom={styles.enterFrom}
        enterTo={styles.enterTo}
        leave={styles.leave}
        leaveFrom={styles.leaveFrom}
        leaveTo={styles.leaveTo}
      >
        <Menu.Items className={styles.menuitems}>
          {props.options.map((sec) => (
            <section key={sec.id} className={styles.menusection}>
              {sec.items.map((option) => {
                return {
                  link: (
                    <LinkOption
                      option={option as DropdownOptionLink}
                      key={option.title}
                    />
                  ),
                  button: <></>,
                }[option.type];
              })}
            </section>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
