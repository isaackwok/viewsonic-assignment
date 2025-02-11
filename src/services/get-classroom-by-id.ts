import { Classroom } from "../types/classroom";

const mockClassroomInfo = {
  capacity: 30,
  name: "302 Science",
  students: [
    {
      id: "1",
      name: "Philip",
      isActive: true,
      score: 2,
    },
    {
      id: "2",
      name: "Darrell",
      isActive: true,
      score: 5,
    },
    {
      id: "3",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "4",
      name: "Cody",
      isActive: true,
      score: 9,
    },
    {
      id: "5",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "6",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "7",
      name: "Bessie",
      isActive: true,
      score: 0,
    },
    {
      id: "8",
      name: "Wendy",
      isActive: true,
      score: 3,
    },
    {
      id: "9",
      name: "Guest",
      isActive: false,
      score: 0,
    },

    {
      id: "10",
      name: "Esther",
      isActive: true,
      score: 1,
    },
    {
      id: "11",
      name: "Guest",
      isActive: false,
      score: 0,
    },

    {
      id: "12",
      name: "Gloria",
      isActive: true,
      score: 1,
    },
    {
      id: "13",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "14",
      name: "Lee",
      isActive: true,
      score: 2,
    },
    {
      id: "15",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "16",
      name: "Ann",
      isActive: true,
      score: 0,
    },
    {
      id: "17",
      name: "Jacob",
      isActive: true,
      score: 8,
    },
    {
      id: "18",
      name: "Calvin",
      isActive: true,
      score: 2,
    },
    {
      id: "19",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    {
      id: "20",
      name: "Joe",
      isActive: true,
      score: 0,
    },
  ],
};

export const getClassroomInfoById = async (
  classroomId: string
): Promise<Classroom> => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const data = {
    classroomId,
    ...mockClassroomInfo,
  };
  return data;
};
