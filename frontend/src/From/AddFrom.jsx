import React, {  useState } from "react";
import { Button, Input,  useToast } from "@chakra-ui/react";
import axios from "axios";
import "./From.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/Action";
const initState = {
  name: "",
  email: "",
  phone: "",
};

function AddFrom() {
  const [formData, setFormData] = useState(initState);
  const toast = useToast();

  const dispatch = useDispatch();
 
 

  const handle_post_submiting_from = async () => {
    
    dispatch(addContact(formData));
    setFormData(initState)

  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <hr className="shareHr" />
        <h1 className="title">Add User</h1>

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


          <Button
            className="shareButton"
            colorScheme="whatsapp"
            onClick={handle_post_submiting_from}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddFrom;
