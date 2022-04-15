import React from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

export default function Button({
  onClick,
  style,
  title,
  disabled,
  className,
}) {

  const onClickFn = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="button"
      style={style}
      onClick={() => !disabled && onClickFn()}
    >
      <span className='button-center'>{title}</span>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: null,
  disabled: false,
  title: null,
  className: null,
};
