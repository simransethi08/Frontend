import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }
// \u2714 complete -tick  \u2716 not complete - cross
  render() {
    const { complete, edit, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>  
          <input value={text} focus="focused" />
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}