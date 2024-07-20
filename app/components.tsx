"use client"

import { FC, useState } from "react"
import { Button, CheckboxItem, Divider } from "@/components"

import { defaultPageStatus } from "./dummy-data"
import { PageStatus } from "./type"

interface ChecklistCardProps {}

export const ChecklistCard: FC<ChecklistCardProps> = (props) => {
  const [pageStatus, setPageStatus] = useState<Array<PageStatus>>(defaultPageStatus)

  const handleChange = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageStatus(pageStatus.map((page) => (page.id === id ? { ...page, status: e.target.checked } : page)))
  }

  const handleChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageStatus(pageStatus.map((page) => ({ ...page, status: e.target.checked })))
  }

  const handleDone = () => {
    alert(JSON.stringify(pageStatus, null, 2))
  }

  return (
    <div className="w-[370px] px-[0px] shadow-lg py-[15px] rounded-md border flex flex-col items-center">
      <div className="">
        <CheckboxItem
          id="all-pages"
          name="All pages"
          checked={pageStatus.every((page) => page.status)}
          onChange={handleChangeAll}
          width={340}
        />
      </div>

      <Divider />
      <div className="flex flex-col -mt-2">
        {pageStatus.map((page) => (
          <CheckboxItem
            key={page.id}
            id={`${page.id}`}
            name={page.name}
            checked={page.status}
            onChange={handleChange(page.id)}
            width={340}
          />
        ))}
      </div>

      <Divider />

      <Button label="Done" onClick={handleDone} />
    </div>
  )
}
