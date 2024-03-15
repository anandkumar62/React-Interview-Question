import React, { useState, useEffect } from 'react'

function ToDolist() {
    const [list, setList] = useState([]);
    const [todos, setTodos] = useState("");

    // const getLocolItems = () => {
    //     let list = localStorage.getItem("list")
    //     if (list) {
    //         return JSON.parse(localStorage.getItem('lists'));
    //     } else {
    //         return []
    //     }
    // }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(list));
    }, [list]);

    // useEffect(() => {
    //     const storedList = localStorage.getItem('todoList');
    //     if (storedList) {
    //         setList(JSON.parse(storedList));
    //     }
    // }, []);

    function handleAdd() {
        if (todos === "") {
            alert("Enter Somethings")
        }else {
            setList([todos, ...list]);
            setTodos("");
        }
    }

    function handleRemove (index) {
        setList(list.filter((_, i) => i !== index));
    }

    return (
        <div className='h-screen flex flex-col gap-2 justify-center items-center font-bold bg-blue-300'>
            <p className='text-4xl'>TO-DO-LIST</p>
            <div>
                <input className='border-2 rounded-2xl px-6 py-3' onChange={(e) => setTodos(e.target.value)} value={todos} />
                <button onClick={handleAdd} className='border-2 px-6 py-3 ml-2 rounded-2xl'>Add List</button>
            </div>
            <div>
                {list && list.length > 0 ? (
                    list.map((item, index) => (
                        <div key={index} className='flex gap-3'>
                            <p>{item}</p>
                            <p onClick={()=> handleRemove(index)} className='text-red-500 cursor-pointer'>Remove</p>

                        </div>))
                ) : (
                    <div className='text-red-500 text-xl'>No Todo</div>
                )}
            </div>
        </div>
    );
}

export default ToDolist