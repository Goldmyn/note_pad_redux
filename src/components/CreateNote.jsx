import { Input, Button, message } from "antd";
import { useState } from "react";
import { addNewNote } from "../features/note/noteSlice";
import { useDispatch } from "react-redux";

function CreateNote() {
  const [noteValue, setNoteValue] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();

  const handleCreateNote = () => {
    if (noteValue.trim() === "") {
      messageApi.error("Please enter note content");
      return;
    }
    dispatch(addNewNote(noteValue.trim()));
  };
  return (
    <>
      {contextHolder}
      <div>
        <form action="" className="grid gap-4 border-b-2 pb-2">
          <Input
            size="large"
            placeholder="Start typing..."
            onChange={(event) => setNoteValue(event.target.value)}
          />
          <Button type="primary" block onClick={handleCreateNote}>
            Add Note
          </Button>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
