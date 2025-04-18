import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import '@mantine/dates/styles.css';
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailsContext";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {

    const [value, setValue] = useState(null);
    const {userDetails : {token}} = useContext(UserDetailContext);
    const {mutate,isLoading}=useMutation({
        mutationFn: ()=> bookVisit(value, propertyId, email, setOpened, setValue)
    })
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)} // Use onClose to handle modal closing
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter">
        <DatePicker value = {value} onChange={setValue} minDate={new Date()}/>
        <Button disabled={!value} onClick={()=> mutate()}>Book Visit</Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
