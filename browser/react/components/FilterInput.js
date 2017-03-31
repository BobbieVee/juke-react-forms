import React from 'react';

const FilterInput = ({updateValue}) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange={updateValue}   
      />
    </form>
  );
}

export default FilterInput;