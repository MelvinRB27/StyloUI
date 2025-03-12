import React from "react";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Documentation/Welcome",
} as Meta;

export const WelcomeMessage: StoryFn = () => (
  <div>
    <h1>Welcome to StyloUI Documentation</h1>
    <p>
      This is the official documentation for **StyloUI**, a UI component library
      built with React and Tailwind.
    </p>
  </div>
);
