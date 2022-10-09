import { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [cell, setCell] = useState("");

   return (
      <FormContext.Provider value={{
         name, setName,
         email, setEmail,
         cell, setCell
      }}>
         {children}
      </FormContext.Provider>
   )
}
