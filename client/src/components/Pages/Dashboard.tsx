import { NotebookPen } from "lucide-react";
import Card from "../UI/Card";

const Dashboard = () => {
  return (
    <>
      <div className="ml-5 flex gap-3 mb-3">
        <h1 className="text-2xl">AllNotes</h1> <NotebookPen size={30} />
      </div>
      <div className="h-full overflow-y-auto p-3">
        <div className="grid grid-cols-3 gap-5 px-5">
          <Card
            type="tweet"
            title="Node js creater Talk About the AI Taking the jobs"
            addedDate="34/23/3433"
            tags={["political", "tech"]}
            link="https://twitter.com/rough__sea/status/2013280952370573666?ref_src=twsrc%5Etfw"
          />
          <Card
            type="link"
            title="Workout Plan"
            addedDate="34/23/3433"
            tags={["fitness", "lifestyle"]}
            link="hkkejrkj"
          />
          <Card
            type="tags"
            title="Example 2"
            addedDate="34/23/3433"
            tags={["fitness", "lifestyle"]}
            link="hkkejrkj"
          />
          <Card
            type="video"
            title="Example 3"
            addedDate="34/23/3433"
            tags={["fitness", "lifestyle"]}
            link="https://www.youtube.com/embed/DzUrMX1MbBE?si=ooKBQ0C3g0HTAcvO"
          />
          <Card
            type="docs"
            title="Example 4"
            addedDate="34/23/3433"
            tags={["fitness", "lifestyle"]}
            link="hkkejrkj"
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
