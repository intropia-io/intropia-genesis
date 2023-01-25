import { FaExternalLinkAlt } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="w-full pt-5 pb-10 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col w-full items-center">
          <img width={84} className="opacity-30 pb-5" src="/logo.svg" alt="logo"/>
          <LinkUrl
            items={["privacy policy", "terms of service"]}
            links={[
              "https://intropia.notion.site/2254728e540d40b982f91157adf82b40",
              "https://intropia.notion.site/6d643993015c47e9a3e5f8c4ec81777f",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const LinkUrl: React.FC<{ items: string[]; links: string[] }> = ({
  items,
  links,
}) => {
  const returnItems = items.map((item, key) => (
    <a
      key={key}
      target="_blank"
      rel="noreferrer"
      className="flex gap-1 items-center"
      href={links[key]}
      style={{ color: "rgba(255, 255, 255, 0.3)" }}
    >
      <span>{item}</span>{" "}
      <FaExternalLinkAlt size="11" style={{ marginTop: "-3px" }} />
    </a>
  ));
  return (
    <div className="flex text-sm gap-14 justify-items-end">{returnItems}</div>
  );
};
