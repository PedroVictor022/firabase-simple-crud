import { Button, Flex, Input, Stack } from "@chakra-ui/react";

export function FormClient({
   name, setName,
   email, setEmail,
   cell, setCell,
   createUser
}) {
   return (
      <Flex
         align="center"
         justify="center"
         mt='7'
      >
         <Stack
            spacing={{
               base: '4',
               md: '4',
               lg: '4'
            }}
            flexDirection='column'
            gap='2'
            align='center'
            justify='center'
         >
            <Input
               w={{
                  base: '200px',
                  md: '220px',
                  lg: '240px'
               }}
               variant='outline'
               p='2'
               type="text"
               value={name}
               onChange={e => setName(e.target.value)}
               placeholder="client name"
            />
            <Input
               w={{
                  base: '200px',
                  md: '220px',
                  lg: '240px'
               }}
               variant='outline'
               p='2'
               type="text"
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="email client"
            />
            <Input
               w={{
                  base: '200px',
                  md: '220px',
                  lg: '240px'
               }}
               variant='outline'
               p='2'
               type="text"
               value={cell}
               onChange={e => setCell(e.target.value)}
               placeholder="cell client"
            />
            <Button onClick={() => createUser()}
               size={{
                  base: 'md',
                  md: 'lg',
                  lg: 'lg'
               }}
               colorScheme="messenger"
            >Add client</Button>
         </Stack>

      </Flex>
   )
}