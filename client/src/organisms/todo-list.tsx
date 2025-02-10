import TodoCard from "../molecules/todo-card";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { setSelectedNote } from "../store/note.slice";
import { truncateText } from "../utils";

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector((state: RootState) => state.notes);

  return (
    <div className="py-6 px-8 flex flex-col gap-3">
      {notes.map((note, index) => (
        <TodoCard
          key={index}
          title={note.title}
          description={truncateText(note.description, 50)}
          createdAt={note.createdAt}
          completed={true}
          clickFunc={() => dispatch(setSelectedNote(note))}
        />
      ))}
    </div>
  );
};
