import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeCart } from "../feature/cart/cartSlice";

const Modals = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button className="cursor-pointer" onClick={() => setOpenModal(true)}>
        Toggle modal
      </Button>
      <Modal
        show={openModal}
        size="lg"
        popup
        onClose={() => setOpenModal(false)}
        className="mt-30"
      >
        <Modal.Body>
          <div className="text-center py-20">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to clear carts?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  dispatch(removeCart());
                  setOpenModal(false);
                }}
              >
                Confirm
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
