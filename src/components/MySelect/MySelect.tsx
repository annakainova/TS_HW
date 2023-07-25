import React, { FC } from "react";

interface MySelectProps {
  value: string;
  handleSort: (sort: string) => void;
  defaultValue: string;
  options: [
    {
      value: string;
      name: string;
    },
    {
      value: string;
      name: string;
    }
  ];
}

const MySelect: FC<MySelectProps> = ({
  options,
  defaultValue,
  value,
  handleSort,
}) => {
  return (
    <div>
      <select
        value={value}
        onChange={(event) => handleSort(event.target.value)}
      >
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
