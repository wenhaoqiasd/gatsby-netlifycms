import * as React from "react"

const SplitText = ({ copy }) => {
  return (
	<h1 aria-label={copy}>
	  {copy.split("").map((item, index) => {
		return (
		  <span aria-hidden="true" key={index}>
			{item}
		  </span>
		);
	  })}
	</h1>
  );
};

export default SplitText