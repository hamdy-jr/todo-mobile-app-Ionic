import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonIcon,
  IonInput,
  IonRadioGroup,
  IonRadio,
} from "@ionic/react";
import { IonButton } from "@ionic/react";

import { closeSharp } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../feature/pages/todo.slice";

type AddTodoPropsType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const AddTodo = ({ isOpen, setIsOpen }: AddTodoPropsType) => {
  const [newTask, setNewTask] = useState();
  const [priority, setPriority] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.todo);
  const handelChangeTask = (e: any) => {
    setNewTask(e.target.value);
  };
  const handelAddTask = () => {
    if (newTask && priority) {
      dispatch(
        todoAction.addTodo({
          id: data.length,
          task: newTask,
          isComplete: false,
          priority: priority,
        })
      );
      setIsOpen(false);
      setNewTask(undefined);
      setPriority(undefined);
    }
  };
  console.log(data);
  return (
    <IonModal isOpen={isOpen} trigger="open-modal" initialBreakpoint={0.5}>
      <IonContent className="ion-padding">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ padding: "10px", fontSize: "30px" }}>Add a New Task </h3>
          <IonIcon
            style={{ fontSize: "30px", padding: "10px" }}
            icon={closeSharp}
            onClick={() => setIsOpen(false)}
          ></IonIcon>
        </div>
        <IonInput
          required
          style={{
            backgroundColor: "#ccc",
            borderRadius: "9px",
            marginTop: "20px",
            color: "black",
            height: "60px",
            fontSize: "25px",
          }}
          onIonChange={handelChangeTask}
        ></IonInput>
        <div style={{ paddingTop: "15px" }}>
          <h4 style={{ fontSize: "15px" }}>Priority</h4>
          <IonRadioGroup
            onIonChange={(e) => setPriority(e.target.value)}
            style={{
              display: "flex",
              paddingTop: "5px",
              gap: "20px",
            }}
          >
            <IonRadio className="radio" value="high">
              High
            </IonRadio>
            <IonRadio className="radio" value="normal">
              Normal
            </IonRadio>
            <IonRadio className="radio" value="zlow">
              Low
            </IonRadio>
          </IonRadioGroup>
        </div>
        <IonButton
          expand="block"
          color="tertiary"
          style={{ marginTop: "20px" }}
          onClick={handelAddTask}
        >
          Save
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default AddTodo;
