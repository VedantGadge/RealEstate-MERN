import React, { useState, useEffect } from "react";
import { Container, Modal, Stepper } from "@mantine/core";
import AddLocation from "../AddLocation/addLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import Facilities from "../Facilities/Facilities";
import './AddPropertyModal.css'

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: "",
  });

  // Update userEmail when user loads
  useEffect(() => {
    if (user?.email) {
      setPropertyDetails((prev) => ({
        ...prev,
        userEmail: user.email,
      }));
    }
  }, [user]);

  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => {
      return current < 1 ? current : current - 1;
    });
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)} // Close the modal when the user clicks outside or presses the close button
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"38rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Add address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Upload Image" description="Add property image">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Add details">
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Facilities" description="Add facilities">
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened = {setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
