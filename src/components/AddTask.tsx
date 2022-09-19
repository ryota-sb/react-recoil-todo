import React from "react";
import "./addTask.css";
import { useRecoilValue } from "recoil";
import { addTitleState, addTitleStateLength } from "../states/addTitleState";

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <div className="taskField">
      <div>{addTitleLength}</div>
      <ul>
        {addTitle.map((title) => (
          <li key={title.id}>{title.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTask;
