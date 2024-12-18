import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserNote from "./EditUserNote";
import { Button } from "antd";
import { MdOutlineDeleteForever } from "react-icons/md";
import { deleteUserNote } from "../features/note/noteSlice.js";

function DisplayNotes() {
  const { userNotes } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  return (
    <div>
      {userNotes.map((item) => {
        return (
          <div key={item.note_id}>
            <p className="text-gray-700 font-bold text-lg">
              {item.note_content}
            </p>
            <h3 className="font-medium text-sm text-gray-500">
              Date Added: {item.note_created_at}
            </h3>
            <div className="flex gap-4 my-2">
              <Button
                onClick={() => dispatch(deleteUserNote(item.note_id))}
                icon={<MdOutlineDeleteForever />}
                danger
              />
              <EditUserNote note_id={item.note_id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayNotes;
