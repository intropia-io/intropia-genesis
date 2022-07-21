import { useState } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";
const TickerText = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible: boolean) => {
    setPageIsVisible(isVisible);
  };
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <div
        className="whitespace-nowrap"
        style={{
          padding: "10px 0",
          fontSize: "16px",
          background:
            "linear-gradient(90deg, rgba(5, 190, 254, 0.1755) 8.8%, rgba(41, 46, 69, 0.198) 49.1%), rgba(41, 46, 69, 0.8)",
        }}
      >
        {pageIsVisible && (
          <Ticker mode="chain">
            {({ index }) => (
              <>
                <span className="relative">
                  <div
                    className="rounded bg-white inline-block whitespace-nowrap absolute mt-3"
                    style={{ width: "6px", height: "6px" }}
                  />
                </span>
                <span className="pl-5 pr-5 whitespace-nowrap">
                  you <i className="font-semibold">cannot buy</i> your way into
                  this community
                </span>
              </>
            )}
          </Ticker>
        )}
      </div>
    </PageVisibility>
  );
};

export default TickerText;
