import React, { useState } from "react";
import { IonContent, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import { add } from "ionicons/icons";

import TodoList from "../../components/TodoList";
import AddTodo from "../../components/AddTodo";

const Todo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h3 style={{ fontSize: "40px" }}>ToDo List</h3>
          <div>
            <IonFabButton id="open-modal" onClick={() => setIsOpen(true)}>
              <IonIcon
                style={{
                  fontSize: "40px",
                }}
                icon={add}
              ></IonIcon>
            </IonFabButton>
          </div>
        </div>
        <TodoList />
        <AddTodo isOpen={isOpen} setIsOpen={setIsOpen} />
      </IonContent>
    </IonPage>
  );
};

export default Todo;
