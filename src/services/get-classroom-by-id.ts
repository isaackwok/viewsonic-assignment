import { Classroom } from "../types/classroom";

const mockClassroomInfo = {
  capacity: 30,
  name: "302 Science",
  students: {
    "1": {
      id: "1",
      name: "Philip",
      isActive: true,
      score: 2,
    },
    "2": {
      id: "2",
      name: "Darrell",
      isActive: true,
      score: 5,
    },
    "3": {
      id: "3",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "4": {
      id: "4",
      name: "Cody",
      isActive: true,
      score: 9,
    },
    "5": {
      id: "5",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "6": {
      id: "6",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "7": {
      id: "7",
      name: "Bessie",
      isActive: true,
      score: 0,
    },
    "8": {
      id: "8",
      name: "Wendy",
      isActive: true,
      score: 3,
    },
    "9": {
      id: "9",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "10": {
      id: "10",
      name: "Esther",
      isActive: true,
      score: 1,
    },
    "11": {
      id: "11",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "12": {
      id: "12",
      name: "Gloria",
      isActive: true,
      score: 1,
    },
    "13": {
      id: "13",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "14": {
      id: "14",
      name: "Lee",
      isActive: true,
      score: 2,
    },
    "15": {
      id: "15",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "16": {
      id: "16",
      name: "Ann",
      isActive: true,
      score: 0,
    },
    "17": {
      id: "17",
      name: "Jacob",
      isActive: true,
      score: 8,
    },
    "18": {
      id: "18",
      name: "Calvin",
      isActive: true,
      score: 2,
    },
    "19": {
      id: "19",
      name: "Guest",
      isActive: false,
      score: 0,
    },
    "20": {
      id: "20",
      name: "Joe",
      isActive: true,
      score: 0,
    },
  },
  groups: {
    "1": {
      id: "1",
      name: "Group 1",
      students: ["1", "2", "3", "4", "5"],
      score: 3,
    },
    "2": {
      id: "2",
      name: "Group 2",
      students: ["6", "7", "16", "17", "18"],
      score: 6,
    },
  },
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
