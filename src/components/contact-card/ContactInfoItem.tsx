import React from "react";

import styles from "./contact-card.module.scss";

interface Props {
  title: string;
  value: string;
}

export const ContactInfoItem: React.FC<Props> = React.memo(
  ({ title, value }: Props) => (
    <li className={styles.contactCardInfoListItem}>
      <span>{title}</span>
      <span>{value}</span>
    </li>
  )
);
