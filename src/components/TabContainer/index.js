import { useState } from "react";
import "./style.css";

const TabContainer = ({ tabs = [], children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="TabContainer">
      <ul className="Tabs">
        {tabs.map((tab, index) => (
          <li
            className={`Tab ${activeTabIndex === index ? "Selected" : ""}`}
            onClick={() => {
              setActiveTabIndex(index);
            }}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="TabContent">{children(activeTabIndex)}</div>
    </div>
  );
};
export default TabContainer;
