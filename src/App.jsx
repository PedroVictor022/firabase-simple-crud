import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import React, { useContext, useEffect, useState } from 'react'
import { ListClient } from "./components/ListClient";
import { FormContext, FormProvider } from "./context/context";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyCXull-Bvs3a9IZ9XSIr8739ee8juVcAvQ",
  authDomain: "crud-firebase-client.firebaseapp.com",
  projectId: "crud-firebase-client",
});


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");

  // Datebase config
  const [user, setUser] = useState([]);
  const db = getFirestore(firebaseConfig);
  const userCollections = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollections);
      const dataMap = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id
      }));
      console.log(data)
      setUser(dataMap)
    }

    getUsers();
  }, [])

  async function deleteUser(id) {
    const userRef = doc(db, 'users', id);
    await deleteDoc(userRef);
    console.log(`Usuario deletado!`)
    
  }

  async function createUser() {
    console.log(name, email, cell)
    const newUser = await addDoc(userCollections, {
      name,
      email, 
      cell
    })
    console.log(newUser)
  }

  return (
    <React.Fragment>
      <h1>Add more clients</h1>
      <div className="form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="client name"
        />
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email client"
        />
        <input
          type="text"
          value={cell}
          onChange={e => setCell(e.target.value)}
          placeholder="cell client"
        />
        <button onClick={() => createUser()}>Add client</button>
      </div>
      <ListClient 
        user={user}
        deleteUser={deleteUser}
      />
    </React.Fragment>
  )
}

export default App
