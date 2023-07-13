import React from 'react'
import { useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
function Home() {
  const { loading, error, contacts } = useSelector(
    (store) => store.contactManager
  );

  console.log(contacts)
  return (

      <div className="table">
        <h1 className="title" style={{
        textAlign: 'center',
        margin:"1em"
      }}>All User List</h1>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Phone No</Th>
              </Tr>
            </Thead>

            <Tbody>
              {contacts?.map((el, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{el.name}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.phone}</Td>
                    
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Home
