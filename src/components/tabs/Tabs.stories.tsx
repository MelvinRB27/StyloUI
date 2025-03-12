import { Meta, StoryFn } from "@storybook/react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import { useState } from "react";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tab label="Información" value="tab1" onClick={() => setActiveTab("tab1")} />
      <Tab label="Contacto" value="tab2" onClick={() => setActiveTab("tab2")} />
      <Tab label="Archivos" value="tab3" onClick={() => setActiveTab("tab3")} />
    </Tabs>
  );
};

export const Default = Template.bind({});
