import { useState } from "react";
import { Hide, Show } from "../assets";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  name?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  placeholder,
  value,
  label,
  name,
  id,
  onChange,
  onKeyDown,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="text-xs flex flex-col gap-1 border-b-[1px] border-b-[#E5E5E5]">
      {label && <label htmlFor={id}>{label}</label>}
      <div className=" flex justify-between w-full items-center">
        <input
          className=" p-2 placeholder:text-[#B3B3B3] w-full focus:outline-none"
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          name={name}
          id={id}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {type === "password" && (
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <img src={showPassword ? Show : Hide} alt="비밀번호" />
          </button>
        )}
      </div>
    </div>
  );
};
