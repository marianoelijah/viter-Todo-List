import React from "react";

const TodoList = ({ setShowFormBalance, setInitBalance }) => {
    const balanceRef = React.useRef(null);

    const handleAddInitBalance = () => {
        setInitTodo(TodoRef.current.value);
        setShowFormBalance(false);
    };

  return (
    <div className="form-balance p-4 rounded-md border border-gray-200 w-3/4 mx-auto">
      <form action="">
        <label htmlFor="" className="block">
         List
        </label>
        <input
          type="text"
          className="px-2 py-1 rounded-md border border-gray-200 text-black w-full outline-none"
          ref={balanceRef}
        />

        <ul className="flex gap-2 mt-3">
          <li className="basis-1/2">
            <button
              className="px-3 py-2 rounded-md bg-red-700 text-white w-full"
              type="button"
              onClick={handleAddInitBalance}
            >
              Todo List
            </button>
          </li>

          <li className="basis-1/2">
            <button
              className="px-3 py-2 rounded-md bg-gray-500 text-gray-800 w-full"
              type="reset"
              onClick={() => setShowFormBalance(false)}
            >
              Cancel
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormBalance;