import React from "react";
import tutors from "../res/tutor";
import Card from "./Card";

function Tutors() {
    return (
        <Card
        fName={tutors[0].fName}
        LName={tutors[0].lName}
        img={tutors[0].imgURL}
        // tel={tutors[0].phone}
        email={tutors[0].email}
      />
    );
}

export default Tutors;