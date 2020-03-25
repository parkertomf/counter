import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [displayCounter, setDisplayCounter] = useState(true);

  return (
    <div>
      {displayCounter && (
        <div>
          <Chip color="primary" size="small" label={count} />

          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setDisplayCounter(false);
            }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Counter;
