import React from 'react';

type AuthFormInputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const AuthFormInput = ({ label, name, value, type = 'text', error, onChange }: AuthFormInputProps) => {
  return (
    <div className="mb-5 flex flex-col gap-y-2 flex-1">
      <label className="text-[rgba(114,114,114,0.7)] pl-2 font-semibold">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        className={`bg-[rgba(217,217,217,0.23)] border-none outline-none text-[rgba(79,79,79,0.78)] placeholder:text-[rgba(79,79,79,0.48)] pl-5 h-14 rounded-xl w-11/12 ${
          error ? 'border-2 border-red-500' : ''
        }`}
      />
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
};

export default AuthFormInput;