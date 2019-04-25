import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

export const TodoItem = (props) => (
  <li onSelect={props.onSelect} onClick={props.onClick}> {props.innertext} </li>

);
