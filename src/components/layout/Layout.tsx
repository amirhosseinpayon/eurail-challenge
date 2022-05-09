import React, { ReactNode } from "react";

import styles from "./layout.module.scss";

interface Props {
  children?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
