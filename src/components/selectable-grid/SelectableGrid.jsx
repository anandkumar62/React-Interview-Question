import React, { useState } from 'react';

function SelectableGrid() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseDown = (BoxNumber) => {
    setIsMouseDown(true);
    setSelectedBoxes([BoxNumber]);
    // console.log(selectedBoxes);
  };

  const handleMouseEnter = (BoxNumber) => {
    if (isMouseDown) {
      const startBox = selectedBoxes[0];
      const endBox = BoxNumber;

      const startRow = Math.floor((startBox - 1) / 10);
      const startCol = (startBox - 1) % 10;

      const endRow = Math.floor((endBox - 1) / 10);
      const endCol = (endBox - 1) % 10;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const selected = [];
      if (startBox < endBox) {
        for (let row = minRow; row <= maxRow; row++) {
          for (let col = minCol; col <= maxCol; col++) {
            selected.push(row * 10 + col + 1);
          }
        }
      } else {
        for (let row = maxRow; row >= minRow; row--) {
          for (let col = maxCol; col >= minCol; col--) {
            selected.push(row * 10 + col + 1);
          }
        }
      }
      setSelectedBoxes(selected);
      // console.log(selected);
    }
  };

  const isSelected = (BoxNumber) => selectedBoxes.includes(BoxNumber);

  return (
    <div
      className='grid grid-cols-10 grid-rows-10 gap-4 mt-14 h-full lg:mx-60 mx-10 item-center'
      onMouseUp={handleMouseUp}
    >
      {[...Array(10 * 10).keys()].map((_, i) => (
        <div
          key={i}
          className={`grid grid-cols-10 h-5 w-5 border-2 font-bold p-5 ${isSelected(i + 1) ? 'bg-blue-500 text-white' : 'bg-red-500 text-white '
            }`}
          onMouseDown={() => handleMouseDown(i + 1)}
          onMouseEnter={() => handleMouseEnter(i + 1)}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default SelectableGrid;
