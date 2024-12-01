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
      {
        title: "First Internship",
        image: "",
        content: `<p>
        I'm participating in MSIB by Kampus Merdeka at Vocasia as a Flutter Developer. I join with other students at development team to develop the mobile app for their platform.</p>
        <p>
        It was challenging since this is the first time I contribute to real product but I learn many things. In this time, I took the chance to ask my mentor about many things such as git branching strategy, code review, and why we should write good and readable code.
        </p>`,
      },
      {
        title: "First Freelance",
        image: "",
        content: `<p>
          In the end of the year, I've got offered to work with my senior to help him on his freelance. I work with my friend to develop mobile app for creating a website that works as a dashboard and CMS for the project.
          </p>`,
      },
    ],
  },
  {
    id: 2023,
    title: "Crisis",
    content: "",
    data: [
      {
        title: "First Job",
        image: "",
        content: `
        <p>
          In this year, I've got my first fulltime as fullstack developer at local company. In this job, there are not many task that I've done and mostly maintaining the system that currently running. I also optimize the mobile app that has been developed before and while it's not the best performance. It is still better than previous. One thing that i remember is that I success to optimize the app that took 2 minutes to login into 3s. While it still took some time, but it better right? Oh yeah to mentioned, there is only 1 developer and it's me.
        </p>`,
      },
    ],
  },
  {
    id: 2024,
    title: "Now",
    content: "",
    data: [
      {
        title: "Second Job",
        image: "",
        content: `
        <p>
          This year, I get my second job but it only last for three months. After probation I decided to not continue for several reasons. In this job, I develop a system that help company to run its business. </p>
        <p>
          It's a retail business, so I developed the new version of of the system with latest technologies that company ask to use before. I also developed the new landing page and design the mobile app UI.
        </p>`,
      },
      {
        title: "Software House",
        image: "",
        content: `
          <p>
            After the probation end, I apply to company to software house and startups in Indonesia. I choose those two business since I always work alone as developer and I really think to join a team that have many developers. I want to learn from people that more experienced in this field.
            </p>
            <p>
            In August, I got offered and move to Jogja and start my third job as a Frontend Developer for Software House. It really fun, there are many people with great skills. In this time, I will use it to learn many things and then when I come home. Hopefully I can work remotely for international company or maybe built my own software house in my city.
          </p>`,
      },
      {
        title: "Graduate",
        image: "",
        content: `
        <p>
          I started college in 2019 and finish it in 2024. It took me 5 years to finish it (It's a bit late for some reason).
        </p>`,
      },
    ],
  },
];

export default journeyList;
export type { IJourney, IJourneyData };
