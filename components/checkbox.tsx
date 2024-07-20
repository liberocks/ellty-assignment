import { FC, InputHTMLAttributes } from "react"
import cx from "classnames"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  variant?: "primary" | "secondary"
  disabled?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({ id, name, value, onChange, disabled, variant = "primary", ...props }) => {
  return (
    <div className={cx("flex items-center ", variant === "primary" ? "primary-checkbox" : "secondary-checkbox")}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="opacity-0 absolute size-[25px]"
        {...props}
      />
      <div className="bg-white   border-2 rounded-md size-[25px] flex flex-shrink-0 justify-center items-center mr-2 ">
        <svg
          className="hidden size-4 pointer-events-none"
          version="1.1"
          viewBox="0 0 19 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
            stroke={variant === "primary" ? "#fff" : disabled ? "#E3E3E3" : "#878787"}
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
