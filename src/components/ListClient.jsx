import { Box, Flex, Text } from "@chakra-ui/react"

export function ListClient({ user, deleteUser }) {
   // const { counter, setCounter } = useContext(FormContext)

   return (
      <Flex
         align='center'
         justify='start'
         flexDirection='column'
         gap="5"
         color="whiteAlpha.800"
         m="1rem auto"
         w="50%"
         p={4}
         fontWeight="semibold"
         letterSpacing='wide'
      >
         {user.map((user) => {
            return (
               <Flex
                  w="100%"
                  key={user.id}
                  align="center"
                  justify="center"
                  flexDirection='column'
                  gap='1'

                  bg="gray.900"
                  p="3.5"
                  borderRadius='3'
               >
                  <Text>{user.name}</Text>
                  <Text>{user.email}</Text>
                  <Text>{user.cell}</Text>
                  <button onClick={() => deleteUser(user.id)}>Deletar user</button>
               </Flex>
            )
         })}
      </Flex>
   )
}