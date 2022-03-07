import React from 'react';

import Checkbox from '../Checkbox/Checkbox';
import './Controls.scss';

type ControlsProps = {
  pathHighlighted: boolean;
  onPathHighlightingChanged: () => void;
};

const Controls = (props: ControlsProps): JSX.Element => {
  const { pathHighlighted, onPathHighlightingChanged } = props;

  return (
    <div className="Controls">
      <Checkbox
        name="highlight-path"
        label="Highlight Path"
        isChecked={pathHighlighted}
        onChange={onPathHighlightingChanged}
      />
    </div>
  );
};

export default Controls;
