import React, { useEffect, useRef, useState } from "react";
import {  Button, Input, Select,  useToast } from "@chakra-ui/react";
import axios from "axios";
import "./From.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateContact } from "../redux/Action";
const initState = {
  name: "",
  email: "",
  phone: "",
};

function EditForm() {
  const [formData, setFormData] = useState(initState);
  const toast = useToast()
  const navigate = useNavigate();

  // edit

  let result = Object.entries(formData)
    .filter(([key, value]) => value !== "")
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});


    const dispatch = useDispatch();
    
const editId = localStorage.getItem("editID")
  const handle_post_submiting_from = async () => {
    dispatch(updateContact(result,editId));
  
    try {
      let res = await axios.put(
        `http://localhost:8088/users/${editId}`,
        result
      );
      toast({
        title: `${res.data}`,
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "top",
      })
      navigate("/add_User");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <hr className="shareHr" />

        <div className="input_form">
          
        <Input
            placeholder={"Enter user name"}
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            placeholder={"Enter email"}
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <Input
            placeholder={"Enter Phone No"}
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <Button className="shareButton" colorScheme='whatsapp' onClick={handle_post_submiting_from}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;