import React from "react";
import InputContext from "../context/InputContext";

const Input = () => {
  const { query, queryChange, search } = React.useContext(InputContext);
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className=""
        value={query}
        onChange={queryChange}
        onKeyPress={search}
      />
    </>
  );
};

export default Input;
