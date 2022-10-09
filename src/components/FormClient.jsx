export function FormClient() {
   return (
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
   )
}