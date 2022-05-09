import React, { ReactNode } from "react";

import styles from "./tabs.module.scss";

interface Props {
  children?: ReactNode;
}

export const Tabs: React.FC<Props> = ({ children }) => {
  return <ul className={styles.tabs}>{children}</ul>;
};
