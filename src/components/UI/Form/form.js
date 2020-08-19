import React, { useEffect, useState } from "react";

const Form = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    props.children.forEach((element) => {
      const key = element.props.children[1].props.name;
      setState((prevState) => ({
        ...prevState,
        [key]: {
          type: element.props.children[1].type,
          value: element.props.children[1].props.value,
          props: element.props.children[1].props,
        },
      }));
    });
  }, [props.children]);

  const inputChangedHandler = (event) => {
    const value = event.target.value;
    const input = event.target.name;
    setState((prevState) => ({
      ...prevState,
      [input]: {
        ...prevState[input],
        value: value,
      },
    }));
  };

  let content = Object.keys(state).map((key) => {
    return React.createElement(state[key].type, {
      ...state[key].props,
      key: key,
      value: state[key].value,
      onChange: inputChangedHandler.bind(this),
    });
  });

  const send = (event) => {
    event.preventDefault();
    let values = {};
    for(let input of Object.keys(state)) {
        values[input] = state[input].value;
    }
    props.submited(values);
  };

  return (
    <form onSubmit={send} className={props.className}>
      {content.map((input) => {
        return (
          <div key={input.key} className="formGroup">
            <label style={{ textTransform: "capitalize" }}>{input.key}</label>
            {input}
          </div>
        );
      })}
      <button>{props.submitText ? props.submitText : "Submit"}</button>
    </form>
  );
};

export default Form;
