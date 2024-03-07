import React, { useState } from 'react'
import data from './data';

function Accordian() {
  const [select, setSelect] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handelSingleSelection = (currentId) => {
    console.log(currentId);
    setSelect(currentId === select ? null : currentId);
    console.log(select);
  }

  function handleMultipleSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center '>

      <div onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="w-3/2 p-2 px-3 h-10  text-center bg-blue-400 rounded-md ">Multi-Selection On</div>
      <div className='flex flex-col justify-center items-center text-center w-[30%] h-auto mr-4'>
        {
          data && data.length > 0 ? data.map((dataItem) => (
            <div key={dataItem.id}>
              <div onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handelSingleSelection(dataItem.id)} className='bg-blue-200 my-2 flex gap-4 rounded-xl p-5 text-sm'>
                <h3>{dataItem.question}</h3>
                <span> + </span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                  (<div>{dataItem.answer}</div>)
                ) :
                select === dataItem.id && (
                  (<div>{dataItem.answer}</div>)
                )
              }
            </div>))
            : (<div>Data Not Found</div>)
        }
      </div>
    </div>
  )
}

export default Accordian