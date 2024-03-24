import React, { useState } from "react";

export default function App() {
  const[task, setTaks]=useState();
  const[data, setData]=useState([]);
  const Handle=()=>{
    setData([...data,{task}]);
    setTaks("");
  }
  const removeItem=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr])

  }
  

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <div className="flex items-center justify-center">
          <h1 className="text-grey-darkest text-3xl">Todo List</h1>
          </div>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Your Today Task"
              value={task}
              onChange={(event)=>{setTaks(event.target.value)}}
            />
            <button onClick={Handle} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-600">
              Add
            </button>
          </div>
        </div>
        <div>
          {
            data.map((element,index)=>{
              return(
              <div key={index} className="flex mb-4 items-center">
            <p className="w-full text-grey-darkest">
              {element.task}
            </p>
            {/* <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
              Done
            </button> */}
            <button onClick={()=>removeItem(index)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600">
              Remove
            </button>
          </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}
