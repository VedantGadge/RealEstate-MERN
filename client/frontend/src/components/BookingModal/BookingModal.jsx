import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailsContext";
import { bookVisit } from "../../utils/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import '../../App.css'

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit!", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      //we are taking the prev state as prop and are storing the booking ans setting the state of the update booking array of the User
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };
  const { mutate, isLoading } = useMutation({
  mutationFn: () => bookVisit(dayjs(value).format('YYYY-MM-DD'), propertyId, email, setOpened, token),
  onSuccess: () => handleBookingSuccess(),
  onError: ({ response }) => toast.error(response?.data?.message || "Booking failed!"),
  onSettled: () => setOpened(false),
});

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)} // Use onClose to handle modal closing
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{gap: "1rem"}}>
        <DatePicker
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
          minDate={new Date()}
          classNames={{
            day: "custom-day", // apply custom class to all day buttons
          }}
        />

        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
