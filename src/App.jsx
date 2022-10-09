import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from 'react'

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
    <div>
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
      <h2>List clients</h2>
      <ul>
        {user.map((user) => {
          return (
            <div key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.cell}</li>
              <button onClick={() => deleteUser(user.id)}>Deletar user</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
