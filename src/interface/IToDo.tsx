import { Categories } from "../enum/Categories";

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}
