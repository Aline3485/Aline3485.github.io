import React from "react";

function DisplayList({ events }) {
  console.log("events", events);
  return (
    <div className="DisplayList">
      {events &&
        events.map((el, id) => (
          <div key={id}>
            <h1>{el.name}</h1>
            <p>Description :{el.description}</p>
            {/* <p>
                Adresse :{el.fields.address_name} {" "}
                {el.fields.address_street}
              </p>
              <p>Prix :{el.fields.price_type}</p> */}
          </div>
        ))}
    </div>
  );
}

export default DisplayList;
