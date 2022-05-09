import React from "react";
import { Contacts } from "./components/contacts/Contacts";
import { Layout } from "./components/layout/Layout";

export const App: React.FC = () => (
  <Layout>
    <Contacts />
  </Layout>
);
