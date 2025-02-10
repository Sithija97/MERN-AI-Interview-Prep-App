import { useEffect } from "react";
import { Header } from "../molecules";
import TodoCard from "../molecules/todo-card";
import { TodoList } from "../organisms";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { getNotes } from "../store/note.slice";
import { LoadingStates } from "../enums";

const Loader = () => (
  <div className="flex items-center justify-center h-full">
    <p className="text-slate-600 text-lg">Loading...</p>
  </div>
);

export const Home = () => {
  const dispatch = useAppDispatch();
  const { getNoteStatus, selectedNote } = useAppSelector(
    (state: RootState) => state.notes
  );
  const loadNotes = async () => await dispatch(getNotes());

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <div className="w-[50%] overflow-y-auto">
          {getNoteStatus === LoadingStates.LOADING ? <Loader /> : <TodoList />}
        </div>
        <div className="w-[40%] border-l-[1px] overflow-y-auto">
          {selectedNote ? (
            <TodoCard
              title={selectedNote.title}
              description={selectedNote.description}
              createdAt={selectedNote.createdAt}
              completed={true}
              isDescriptive
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-slate-500">Select a Todo...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
