export function ListClient({ user, deleteUser }) {
   return (
      <div>
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