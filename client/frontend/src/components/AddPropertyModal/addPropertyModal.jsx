import React from "react";
import { Modal } from "@mantine/core";

const AddPropertyModal = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)} // Close the modal when the user clicks outside or presses the close button
    >
      {/* Modal content */}
    </Modal>
  );
};

export default AddPropertyModal;
