import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Checkbox } from "@/components/checkbox"

const meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#f0f0f0" }],
    },
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: "checkbox",
    name: "checkbox",
  },
}
