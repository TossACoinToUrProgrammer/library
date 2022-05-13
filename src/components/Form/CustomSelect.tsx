import { FieldProps } from "formik"
import React from "react"
import Select from "react-select"

interface Option {
  label: string
  value: string
}

interface CustomSelectProps extends FieldProps {
  options: any[]
  className?: string
  placeholder?: string
}

export const CustomSelect = ({ className, placeholder, field, form, options }: CustomSelectProps) => {
  const onChange = (option: any) => {
    form.setFieldValue(
      field.name,
      (option as Option[]).map((item: Option) => item.value)
    )
  }

  const getValue = () => {
    if (options) {
      return options.filter((option) => field.value.indexOf(option.value) >= 0)
    } else {
      return []
    }
  }

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={true}
    />
  )
}

export default CustomSelect
