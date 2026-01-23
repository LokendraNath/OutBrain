import {
  File,
  Link,
  Share2,
  Tags,
  Trash2,
  Twitter,
  Youtube,
} from "lucide-react";

interface CardProps {
  type: "tweet" | "link" | "tags" | "video" | "docs";
  link: string;
  title: string;
  tags: string[];
  addedDate: string;
}

const IconsVarient = {
  tweet: <Twitter className="text-blue-500" />,
  link: <Link className="text-green-400" />,
  tags: <Tags className="text-purple-600" />,
  docs: <File className="text-gray-400" />,
  video: <Youtube className="text-red-600" />,
};

const Card = ({ type, title, tags, addedDate, link }: CardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl max-w-96 min-h-48 min-w-72">
      {/* Top */}
      <div className="flex justify-between mb-5">
        <span className="flex items-center gap-2 flex-1 min-w-0">
          <span className="shrink-0">{IconsVarient[type]} </span>
          <h3 className="overflow-hidden text-ellipsis text-nowrap text-md font-semibold">
            {title}
          </h3>{" "}
        </span>
        <span className="flex gap-2 shrink-0 ml-3">
          <a href={link}>
            <Share2
              className="hover:text-blue-500 transition duration-300"
              size="20"
            />
          </a>{" "}
          <span>
            <Trash2
              className="hover:text-red-500 transition duration-300"
              size="20"
            />
          </span>
        </span>
      </div>
      <div className="py-5">
        {type === "video" && (
          <iframe
            className="w-full h-56"
            src={link.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "tweet" && (
          <blockquote className="twitter-tweet">
            <a href={link}></a>
          </blockquote>
        )}
      </div>
      {tags.map((tag, index) => (
        <span key={index}># {tag}</span>
      ))}
      <p>{addedDate}</p>
    </div>
  );
};
export default Card;
