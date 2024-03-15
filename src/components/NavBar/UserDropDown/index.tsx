"use client";
import styles from "./Userdropdown.module.css";
import Avatar from "@/ui/Avatar";
import { Claims } from "@auth0/nextjs-auth0";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/20/solid";
import sections from "./dropdown";

interface UserdropdownProps {
  claims?: Claims;
}

export default function Userdropdown(props: UserdropdownProps) {
  return (
    <Menu as="div" className={clsx("not-typography", styles.menu)}>
      <Menu.Button className={styles.button}>
        <Avatar url={props.claims?.picture} />
      </Menu.Button>
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
          {sections.map((sec) => (
            <section key={sec.id} className={styles.menusection}>
              {sec.items.map((option) => {
                return (
                  <Menu.Item key={option.title}>
                    {({ active }) =>
                      ({
                        link: (
                          <Link
                            href={option.url}
                            className={clsx("group", styles.menulink, {
                              [styles.active]: active,
                              [styles.inactive]: !active,
                            })}
                          >
                            {option.icon && (
                              <option.icon
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            {option.title}
                          </Link>
                        ),
                        button: <></>,
                      })[option.type]
                    }
                  </Menu.Item>
                );
              })}
            </section>
          ))}
          {/* <section className={styles.menusection}>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/api/auth/logout"
                  className={clsx("group", styles.menulink, {
                    [styles.active]: active,
                    [styles.inactive]: !active,
                  })}
                >
                  <ArrowRightStartOnRectangleIcon
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Logout
                </Link>
              )}
            </Menu.Item>
          </section> */}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
