import React from "react";
import classes from "../UI/input.module.css";

export default function Input(props) {
  return (
    <div className={classes.Input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  );
}
