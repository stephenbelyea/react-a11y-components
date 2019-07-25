import React from "react";
import { string, instanceOf } from "prop-types";
import utils from "../../utilities";
import "./Modal.css";

function Modal({ id, header, actions, className, children, ...props }) {
  const modalId = id || utils.generateId();
  const modalLabelId = header ? `${modalId}_label` : "";
  return (
    <div className={`rap-modal ${className}`} {...props}>
      <div className="overlay" aria-hidden="true" />
      <div
        id={modalId}
        role="dialog"
        tabIndex="-1"
        className="dialog"
        aria-labelledby={modalLabelId}
      >
        {header && (
          <div className="dialog-header">
            <h2 id={modalLabelId}>{header}</h2>
          </div>
        )}
        <div className="dialog-content">{children}</div>
        {actions && <div className="dialog-actions">{actions}</div>}
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: string,
  header: instanceOf(React.Children),
  actions: instanceOf(React.Children)
};

Modal.defaultProps = {
  id: "",
  header: null,
  actions: null
};

export default Modal;
