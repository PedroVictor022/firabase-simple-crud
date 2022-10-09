import { Box, Flex, Heading } from "@chakra-ui/react";
import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import React, { useContext, useEffect, useState } from 'react'
import { FormClient } from "./components/FormClient";
import { ListClient } from "./components/ListClient";

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
    <Box
      w='100%'
      h='auto'
      minH='100vh'
      bg='gray.800'
    >
      <Box w="100%" h="5rem" p="4" textAlign="center" bg="gray.900">
        <Heading color="whiteAlpha.900">My Contacts</Heading>
      </Box>
      <FormClient
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        cell={cell} setCell={setCell}
        createUser={createUser}
      />
      <ListClient
        user={user}
        deleteUser={deleteUser}
      />


    </Box>
  )
}

export default App
