import { atom } from "recoil";
import { IToDo } from "./interface/IToDo";

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
