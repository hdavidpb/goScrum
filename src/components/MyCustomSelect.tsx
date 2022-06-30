import Select from "react-select";

import { IOptions } from "./Register/interfaces";

interface IProps {
  options: IOptions[];
  onChange: any;
  value: string;
}

const MyCustomSelect = ({ onChange, options, value }: IProps) => {
  const defaultValue = (options: IOptions[], value: string) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <div style={{ width: "100%" }}>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </div>
  );
};

export default MyCustomSelect;
