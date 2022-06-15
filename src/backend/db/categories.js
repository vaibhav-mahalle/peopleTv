import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Norm",
    thumbnail: "https://ik.imagekit.io/j6wafbf7rcj/PeopleTv/vl-pics/norm_on_conan1_vn6YiNCkPS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654168100910",
    description:
      "Norm Macdonald is a comedic genius who was considered as funniest man by fellow comics of his time",
  },
  {
    _id: uuid(),
    categoryName: "Ricky",
    thumbnail: "https://ik.imagekit.io/j6wafbf7rcj/PeopleTv/vl-pics/rickygervais_1_C5o5KFsSP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654168104000",
    description:
      "Ricky gervais is the British comic, actor, creator known for The Office and roasting celebrities on biggest award shows.",
  },
  {
    _id: uuid(),
    categoryName: "Sumit",
    thumbnail: "https://ik.imagekit.io/j6wafbf7rcj/PeopleTv/vl-pics/Sumit-Anand_s_XLclfqA.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654168104818",
    description:
      "Sumit Anand is an Indian comic who has only couple of videos on youtube but he is as funny as they come.",
  },
  {
    _id: uuid(),
    categoryName: "Upmanyu",
    thumbnail: "https://ik.imagekit.io/j6wafbf7rcj/PeopleTv/vl-pics/abhishek_upmanyu_3_2_33HHfw7.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654168096884",
    description:
      "Abhishek Upmanyu is the Indian standup comedian famous for his unique delivery style and excellent standup acts.",
  },
];
