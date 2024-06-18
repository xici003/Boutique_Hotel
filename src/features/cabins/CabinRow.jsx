import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";

import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { useDeleteCabin } from "./useDeleteCabin";
import { IoDuplicate } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy name of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          {/* Context Menu */}
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button icon={<IoDuplicate />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<CiEdit />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<FaRegTrashCan />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>
          </Menus.Menu>

          <Modal.Window name="edit">
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
