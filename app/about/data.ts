interface IJourneyData {
  title: string;
  image: string;
  content: string;
}

interface IJourney {
  id: number;
  title: string;
  content: string;
  data: IJourneyData[];
}

const journeyList: IJourney[] = [
  {
    id: 2022,
    title: "Begin!!!!",
    content: "",
    data: [
      { title: "First Internship", image: "", content: "" },
      { title: "First Freelance", image: "", content: "" },
    ],
  },
  {
    id: 2023,
    title: "Crisis",
    content: "",
    data: [
      { title: "First Internship", image: "", content: "" },
      { title: "First Freelance", image: "", content: "" },
    ],
  },
  {
    id: 2024,
    title: "Now",
    content: "",
    data: [
      { title: "First Internship", image: "", content: "" },
      { title: "First Freelance", image: "", content: "" },
    ],
  },
];

export default journeyList;
export type { IJourney, IJourneyData };
