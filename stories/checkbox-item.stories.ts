import { CheckboxItem } from "@/components"
import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

const meta = {
  title: "Example/CheckboxItem",
  component: CheckboxItem,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CheckboxItem>

export default meta
type Story = StoryObj<typeof meta>

export const Preview: Story = {
  args: {
    id: "checkbox-list-item",
    name: "All pages",
    checked: true,
    variant: "primary",
    onChange: fn(),
  },
}
