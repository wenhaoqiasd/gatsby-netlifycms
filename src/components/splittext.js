import React from "react";

class SplitText extends React.Component {
  render() {
    return (
      <h1 aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function(char, index) {
          return (
            <span aria-hidden="true" key={index}>
              {char}
            </span>
          );
        })}
      </h1>
    );
  }
}

export default SplitText;