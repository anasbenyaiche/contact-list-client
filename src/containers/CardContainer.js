import React from "react";
import Card from "../components/Card";



export default function CardContainer({users}) {
  
  return (
    <div>
      {users.map((user) => (
        <div class="row">
          <div class="col-sm-6">
            <Card
                          
              id={user._id}
              name={user.name}
              age={user.age}
              email={user.email}
              phone={user.phone}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
