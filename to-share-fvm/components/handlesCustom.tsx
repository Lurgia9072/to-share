import React, { useState } from 'react';

interface Props {
  handleSize?: number;
  handleColor?: string;
}

const CustomHandle: React.FC<Props> = ({ handleSize = 20, handleColor = '#333' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        width: handleSize,
        height: handleSize,
        backgroundColor: handleColor,
        borderRadius: '50%',
        position: 'absolute',
        top: position.y,
        left: position.x,
        cursor: 'pointer',
      }}
      onMouseDown={handleDrag}
    />
  );
};

export default CustomHandle;