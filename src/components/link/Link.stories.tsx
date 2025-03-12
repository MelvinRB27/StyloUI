import Link from "./Link";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    path: {
      control: "text",
      description: "Link",
      defaultValue: "https://styloui.com",
    },
  },
};

export const Default = () => {
  return <Link path="https://styloui.com">StyloUI.com</Link>;
};
