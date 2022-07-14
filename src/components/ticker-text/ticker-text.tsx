import Ticker from "react-ticker";

const TickerText = () => (
  <div
    style={{
      padding: "10px 0",
      fontSize: "16px",
      background:
        "linear-gradient(90deg, rgba(5, 190, 254, 0.1755) 8.8%, rgba(41, 46, 69, 0.198) 49.1%), rgba(41, 46, 69, 0.8)",
    }}
  >
    <Ticker>
      {({ index }) => (
        <>
          <span
            className="rounded bg-white inline-block"
            style={{ width: "6px", height: "6px", marginTop: "-2px" }}
          />
          <span className="pl-5 pr-5">
            only <i className="font-semibold">contributing</i>
          </span>
          <span
            className="rounded bg-white inline-block"
            style={{ width: "6px", height: "6px" }}
          />
          <span className="pl-5 pr-5">
            you <i className="font-semibold">can’t buy</i> your way into this
            community
          </span>
        </>
      )}
    </Ticker>
  </div>
);

export default TickerText;
