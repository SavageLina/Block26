import React, { useState, useEffect } from "react";


export default function SelectedContact({ selectedContactId, setSelectedContactId}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
      async function fetchContactDetails() {
        try {
          const response = await fetch(
            `https://fsa.jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          );
          const contactData = await response.json();
          setContact(contactData);
          console.log(contactData);
        }
        catch (error){console.error(error)}      }
      fetchContactDetails();
  }, [selectedContactId])
    return (
      contact &&(
      <div>
        <h1>{contact.name}</h1>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Address: {contact.address}</p>
        <button onClick={()=>setSelectedContactId(null)}>BACK</button>
      </div>
      )
    );
  }