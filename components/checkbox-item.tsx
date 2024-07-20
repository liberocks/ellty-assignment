import { FC } from "react"
import { Montserrat } from "next/font/google"
import { Checkbox } from "@/components"
import cx from "classnames"

const sans = Montserrat({ subsets: ["latin"] })

export interface CheckboxItemProps {
  id: string
  name: string
  variant?: "primary" | "secondary"
  disabled?: boolean
  checked: boolean
  width?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckboxItem: FC<CheckboxItemProps> = ({
  id,
  name,
  variant = "primary",
  width = 370,
  disabled,
  checked,
  onChange,
}) => {
  return (
    <div
      id={id}
      className="flex flex-row items-center py-[8px] px-[15px] h-[42px] justify-between"
      style={{ width: `${width}px` }}
    >
      <div className={cx(sans.className, "font-normal text-[14px] leading-[18.2px] text-[#1F2128]")}>{name}</div>
      <Checkbox
        id={`checkbox-${id}`}
        name={name}
        variant={variant}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}
