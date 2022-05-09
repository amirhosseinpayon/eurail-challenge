import { ReactNode } from "react";

import styles from "./tabs.module.scss";

interface Props {
  children?: ReactNode;
  active: boolean;
  disable: boolean;
  onClickHandler: () => void;
}

export const TabItem: React.FC<Props> = ({
  children,
  active,
  disable,
  onClickHandler,
}) => {
  return (
    <li
      onClick={() => onClickHandler()}
      className={`
        ${styles.tabsItem}
        ${active ? styles.tabsItemActive : ""}
        ${disable ? styles.tabsItemDisable : ""}
      `}
    >
      {children}
    </li>
  );
};
