import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Norm",
    description:
      "Norm Macdonald is a comedic genius who was considered as funniest man by fellow comics of his time",
  },
  {
    _id: uuid(),
    categoryName: "Ricky",
    description:
      "Ricky gervais is the British comic, actor, creator known for The Office and roasting celebrities on biggest award shows.",
  },
  {
    _id: uuid(),
    categoryName: "Sumit",
    description:
      "Sumit Anand is an Indian comic who has only couple of videos on youtube but he is as funny as they come.",
  },
  {
    _id: uuid(),
    categoryName: "Upmanyu",
    description:
      "Abhishek Upmanyu is the Indian standup comedian famous for his unique delivery style and excellent standup acts.",
  },
];
