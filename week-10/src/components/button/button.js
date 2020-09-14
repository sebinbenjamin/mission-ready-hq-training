import React from 'react';
import './button.css';
function Button({ label }) {
  return (
    <div data-testid="testButton" className="button-style">
      {label}
    </div>
  );
}

export default Button;
