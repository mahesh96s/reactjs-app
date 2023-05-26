import "./ToggleButton.scss";

function ToggleButton({ id, name, optionLabels, checked, onChange }) {
  return (
    <div>
      <h2>{name}</h2>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <label className="toggle-switch-label" htmlFor={id}>
          <span className="toggle-switch-inner" data-no={optionLabels && optionLabels[1] ? optionLabels[1] : 'No'} data-yes={optionLabels && optionLabels[0] ? optionLabels[0] : 'Yes'}></span>
          <span className="toggle-switch-switch"></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleButton;
