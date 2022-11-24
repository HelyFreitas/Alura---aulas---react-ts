import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  children?: any;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
