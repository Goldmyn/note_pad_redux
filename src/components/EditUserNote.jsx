import { useState } from "react";
import { Button, Modal, Input } from "antd";
import { FaRegEdit } from "react-icons/fa";
import { editNoteContent } from "../features/note/noteSlice";
import { useDispatch } from "react-redux";

const { TextArea } = Input;
const EditUserNote = (props) => {
  const [value, setValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (value.trim() === "") {
      return;
    }
    dispatch(
      editNoteContent({
        note_to_editId: props.note_id,
        note_to_update: value.trim(),
      })
    );
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button icon={<FaRegEdit />} onClick={showModal} />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Editing note content for note {props.note_id}</h3>
        <TextArea
          rows={5}
          onChange={(event) => setValue(event.target.value)}
        ></TextArea>
      </Modal>
    </>
  );
};
export default EditUserNote;
