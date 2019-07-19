(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types'], factory) :
  (global = global || self, factory(global['react-a11y-patterns'] = {}, global.React, global.PropTypes));
}(this, function (exports, React, propTypes) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function Button({
    children,
    ...props
  }) {
    return React.createElement("button", props, children);
  }

  Button.propTypes = {
    type: propTypes.string
  };
  Button.defaultProps = {
    type: "button"
  };

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
