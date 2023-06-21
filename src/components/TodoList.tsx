import { IonCheckbox, IonItem } from "@ionic/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../feature/pages/todo.slice";

const TodoList = () => {
  const todoList = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();

  dispatch(todoAction.sortDataByPriority());
  return (
    <div style={{ marginTop: "10px" }}>
      {todoList.map((ele: any) => {
        let color = "red";
        if (ele.priority === "high") {
          color = "green";
        } else if (ele.priority === "normal") {
          color = "yellow";
        }

        return (
          <IonItem key={ele.id} style={{ marginTop: "10px" }}>
            <IonCheckbox
              justify="space-between"
              style={{
                fontSize: "20px",
              }}
              // onIonChange={() =>
              //   dispatch(todoAction.updateIsComplete([ele.id, ele.isComplete]))
              // }
            >
              <div
                style={{
                  display: "inline-block",
                  background: color,
                  width: "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  marginRight: "15px",
                }}
              ></div>
              {ele.task}
            </IonCheckbox>
          </IonItem>
        );
      })}
    </div>
  );
};

export default TodoList;
