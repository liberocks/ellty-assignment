import { ButtonHTMLAttributes, FC } from "react"
import { Montserrat } from "next/font/google"
import cx from "classnames"

const sans = Montserrat({ subsets: ["latin"] })

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  disabled?: boolean
  width?: number
}

export const Button: FC<ButtonProps> = ({ label, disabled, width = 340, ...props }) => {
  return (
    <button
      className={cx(
        sans.className,
        "h-[40px] bg-[#FFCE22] disabled:bg-[#FFD84D] rounded px-[20px] py-[10px] text-[#1F2128] font-normal text-[14px] leading-[18.2px]"
      )}
      style={{ width: `${width}px` }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  )
}
