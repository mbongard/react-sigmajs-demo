import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

import './Checkbox.scss';

type CheckboxProps = {
  name: string;
  label: string;
  isChecked: boolean;
  onChange: () => void;
};

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { name, label, isChecked, onChange } = props;

  const handleOnClick = (event: any): void => {
    onChange();
    event.target.blur();
    event.preventDefault();
  };

  const handleKeyDown = (event: any): void => {
    // Number 13 is the "Enter" key on the keyboard, 32 is the space bar
    if (event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      onChange();
    }
  };

  return (
    <div
      className="Checkbox"
      onMouseDown={handleOnClick}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {isChecked ? (
        <FontAwesomeIcon className="Checkbox-Icon check" icon={faCheck} />
      ) : (
        <FontAwesomeIcon className="Checkbox-Icon cross" icon={faXmark} />
      )}
      <div className="Checkbox-Label">{label}</div>
    </div>
  );
};

export default Checkbox;
