import React, { useEffect, useState } from "react";
import EditForm from "../From/EditFrom";
import AddFrom from "../From/AddFrom";
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

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts } from "../redux/Action";
function Add_User() {

  const { loading, error, contacts } = useSelector((store) => store.contactManager);
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();

  // get data
  const getdata = async () => {
    try {
      let res = await axios.get(`http://localhost:8088/users`);
      setdata(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  // delete 
const deleteID = localStorage.getItem("deleteID")
  const deleteuser = async () => {
    dispatch(deleteContact(deleteID,onClose));

    
  }

  useEffect(() => {
   
    dispatch(getContacts());
  }, [contacts]);

  return (
    <div>
      <AddFrom />
      <div className="table">
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>

            <Tbody>
              {contacts?.map((el, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{el.name}</Td>
                    <Td>
                      {" "}
                      <Button colorScheme="green"> View</Button>{" "}
                      <Button
                        colorScheme="facebook"
                        onClick={() => {
                          localStorage.setItem("editID", el._id);
                          navigate("/edit");
                        }}
                      >
                        {" "}
                        Edit
                      </Button>{" "}
                      <Button colorScheme="red" onClick={() => {
                          localStorage.setItem("deleteID", el._id);
                          onOpen()
                      }}> Delete</Button>{" "}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <p>You want to Delete user</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              No
            </Button>
            <Button variant='ghost' colorScheme="red"  onClick={deleteuser}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Add_User;
