import React from "react";

const Button = ({
  text,
  img,
  className,
  onClick,
  minHeight,
  maxHeight,
  minWidth,
  height,
  width,
  disabled,
  imgClass,
  loading,
}) => {
  const buttonStyle = {
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    height: height,
    width: width,
  };

  if (loading) {
    disabled = true;
  }

  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <>
          {/* <Icon
              className="rotate-360"
              icon="lucide:loader"
              width="1.5rem"
              height="1.5rem"
              style={{ color: "white" }}
            /> */}

          <span className="rotate-360 me-2">
            <i class="fa-solid fa-spinner"></i>
          </span>
          <span>{text}</span>
        </>
      ) : (
        <>
          {img && <img src={img} alt="Button Image" className={imgClass} />}
          <span>{text}</span>
        </>
      )}
    </button>
  );
};

export default Button;
