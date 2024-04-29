export const taskTypes = [
  {
    name: "task",
  },
  {
    name: "spell",
  },
];

export const tags = [
  {
    name: "initial",
  },
  {
    name: "mid-term",
  },
  {
    name: "completion",
  },
];

export const epics = [
  {
    name: "The Philosopher's Stone Quest",
    start: new Date("1991-09-01").getTime(),
    end: new Date("1991-12-31").getTime(),
  },
  {
    name: "Chamber of Secrets Adventure",
    start: new Date("1992-09-01").getTime(),
    end: new Date("1992-12-31").getTime(),
  },
  {
    name: "Prisoner of Azkaban Mystery",
    start: new Date("1993-09-01").getTime(),
    end: new Date("1993-12-31").getTime(),
  },
];

export const kanbans = [
  {
    name: "To Do",
  },
  {
    name: "In Progress",
  },
  {
    name: "Done",
  },
];

export const users = [
  {
    name: "Harry Potter",
    organization: "Gryffindor",
  },
  {
    name: "Hermione Granger",
    organization: "Gryffindor",
  },
  {
    name: "Ron Weasley",
    organization: "Gryffindor",
  },
  {
    name: "Draco Malfoy",
    organization: "Slytherin",
  },
];

export const projects = [
  {
    name: "Defense Against the Dark Arts",
    userId: 1,
    organization: "Gryffindor",
    created: 636804000000,
  },
  {
    name: "Quidditch Team Training",
    userId: 2,
    organization: "Gryffindor",
    created: 636804000000,
    pin: true,
  },
  {
    name: "Potions Class",
    userId: 3,
    organization: "Gryffindor",
    created: 636804000000,
  },
  {
    name: "Slytherin House Challenges",
    userId: 4,
    organization: "Slytherin",
    created: 636804000000,
  },
];

export const tasks = [
  {
    name: "Study for Transfiguration Exam",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "Please focus on Vanishing Spells.",
  },
  {
    name: "Practice Wingardium Leviosa",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 2,
    note: "Try not to drop the feather this time!",
  },
  {
    name: "Research on Polyjuice Potion",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "Make sure to collect all ingredients.",
  },
  {
    name: "Create Study Notes on Gillyweed",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "Important for Herbology class!",
  },
  {
    name: "Practice Patronus Charm",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 2,
    note: "Focus on happy memories!",
  },
];
