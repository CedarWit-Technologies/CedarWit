import UM1 from "../../assets/UM1.png";
import UM2 from "../../assets/UM2.png";
import UM3 from "../../assets/UM3.png";
import Lunnagram1 from "../../assets/Lunnagram1.png";
import Lunnagram2 from "../../assets/Lunnagram2.png";
import Lunnagram3 from "../../assets/Lunnagram3.png";
import RC1 from "../../assets/RC1.png";
import RC2 from "../../assets/RC2.png";
import RC3 from "../../assets/RC3.png";

const useProjects = () => {
  const projects = [
    {
      tags: ["Mobile Dev", "Design"],
      projectName: "Universal Mindfulness",
      projectDetails:
        "Revinance is a fintech mobile application used for something and. With features including a wallet system, investment plan and markettplace",
      imgs: [UM1, UM2, UM3],
    },
    {
      tags: ["Mobile Dev", "Design"],
      projectName: "Lunnagram",
      projectDetails:
        "Revinance is a fintech mobile application used for something and. With features including a wallet system, investment plan and markettplace",
      imgs: [Lunnagram1, Lunnagram2, Lunnagram3],
    },
    {
      tags: ["Mobile Dev", "Design"],
      projectName: "Royal Convener",
      projectDetails:
        "Revinance is a fintech mobile application used for something and. With features including a wallet system, investment plan and markettplace",
      imgs: [RC1, RC2, RC3],
    },
  ];
  return projects;
};

export default useProjects;
