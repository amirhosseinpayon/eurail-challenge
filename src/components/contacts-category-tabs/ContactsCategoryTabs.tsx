import React, { useState, useCallback, useEffect } from "react";

import styles from "./contacts-category-tabs.module.scss";

import { Tabs } from "../ui/tabs/Tabs";
import { TabItem } from "../ui/tabs/TabItem";

import { categorizedContactType } from "../../types/categorizedContact.type";

interface Props {
  categorizedContacts: any;
  activeCategoryKey: string;
  onClickTabHandler: (categoryKey: string) => void;
}

export const ContactsCategoryTabs: React.FC<Props> = ({
  categorizedContacts,
  activeCategoryKey,
  onClickTabHandler,
}) => {
  const [categories, setCategories] = useState<categorizedContactType[]>([]);

  const prepareCategories = useCallback(() => {
    const categories: categorizedContactType[] = Object.keys(
      categorizedContacts
    ).map((key) => categorizedContacts[key]);

    setCategories(categories);
  }, [categorizedContacts]);

  useEffect(prepareCategories, [prepareCategories]);

  return (
    <div className={styles.contactsCategoryTabs}>
      <Tabs>
        {categories.map(({ label, key, contacts }) => (
          <TabItem
            key={key}
            active={activeCategoryKey === key}
            disable={!contacts.length}
            onClickHandler={() => onClickTabHandler(key)}
          >
            <div className={styles.contactsCategoryTabsItem}>
              <span>{label}</span>
              <span>{contacts.length}</span>
            </div>
          </TabItem>
        ))}
      </Tabs>
    </div>
  );
};
