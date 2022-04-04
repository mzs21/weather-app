import React from "react";
import InputContext from "../context/InputContext";

const Input = () => {
  const { query, queryChange, search } = React.useContext(InputContext);
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={queryChange}
      onKeyPress={search}
      className="mb-10 w-64 h-auto py-2 rounded-lg text-center focus:outline-none"
    />
  );
};

export default Input;
