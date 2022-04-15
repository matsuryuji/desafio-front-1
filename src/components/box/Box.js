import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Box = forwardRef((props, ref) => {
  const {
    children,
    style,
    flexDirection,
    flex,
    className,
    alignItems,
    justifyContent,
    onClick,
    onMouseOver,
    onMouseOut,
    position = 'relative',
    ...attrs
  } = props;
  return (
    <div
      className={className}
      onClick={() => onClick && onClick()}
      onMouseOver={() => onMouseOver && onMouseOver()}
      onMouseOut={() => onMouseOut && onMouseOut()}
      ref={ref}
      style={{
        flexDirection,
        flex: flex ? Number(flex) : 'unset',
        display: flexDirection ? 'flex' : 'block',
        justifyContent,
        alignItems,
        boxSizing: 'border-box',
        position,
        ...style,
      }}
      {...attrs}
    >
      {children}
    </div>
  );
});

Box.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  onClick: PropTypes.func,
};

export default Box;
