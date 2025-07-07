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
      <label className="text[13px] text-slate-800">{label}</label>
      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          className="w-full bg-transparent outline-none"
        />

        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
