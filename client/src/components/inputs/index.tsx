import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type IProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  type: string;
};

export const Input = ({
  value,
  onChange,
  label,
  placeholder,
  type,
}: IProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <label htmlFor="" className="">
        {label}
      </label>
      <div className="">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          className=""
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className=""
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className=""
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
