import React, { useState } from "react";
import eyeOpen from "../assets/icons/eye-open.svg";
import eyeClose from "../assets/icons/eye-close.svg";

const Input = ({
  type,
  wrapperClass,
  inputClass,
  labelClass,
  onChange,
  name,
  id,
  value,
  placeholder,
  icon,
  maxWidth,
  maxHeight,
  minHeight,
  minWidth,
  height,
  width,
  maxLength,
  error,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth,
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    } else {
      return type;
    }
  };

  const getInputIcon = () => {
    switch (type) {
      case "password":
        return showPassword ? eyeClose : eyeOpen;
      default:
        return icon;
    }
  };
  return (
    <>
      <div
        className={`input-wrapper  ${error ? "error" : ""} ${wrapperClass}`}
        style={inputStyle}
      >
        <input
          autoComplete="off"
          type={getInputType()}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          disabled={disabled}
          maxLength={maxLength}
        />
        <label className={`text-capitalize ${labelClass}`}>{placeholder}</label>
        {icon && (
          <img
            // src={showPassword ? eyeClose : eyeOpen}
            src={getInputIcon()}
            alt="icon"
            className="pointer"
            onClick={togglePassword}
          />
        )}
      </div>
    </>
  );
};

export default Input;
