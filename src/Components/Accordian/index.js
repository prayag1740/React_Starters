import React, { useState } from "react";
import data from "./data";
import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = () => {
    setMultiSelect(!multiSelect);
  };

  const setMultipleItems = (currentId) => {
    console.log("yy")
    let cpyMultiple = [...multiple] ;
    let index = cpyMultiple.indexOf(currentId);
    if (index === -1) {
        cpyMultiple.push(currentId)
    } else {
        cpyMultiple.splice(index, 1)
    }

    setMultiple(cpyMultiple);

  };

  return (
    <div className="acc-wrapper">
      <button onClick={handleMultiSelection}>Enable MultiSelection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((di) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  multiSelect
                    ? () => setMultipleItems(di.id)
                    : () => handleSingleSelection(di.id)
                }
              >
                <h3>{di.question}</h3>
                <span>+</span>
              </div>
              <div>
              {multiSelect ? multiple.indexOf(di.id) !== -1 && <div className="content">{di.answer}</div> : selected === di.id && <div className="content">{di.answer}</div>}
              </div>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
