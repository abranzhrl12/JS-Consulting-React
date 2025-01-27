import "./RadioGroup.scss";

export const RadioGroup = ({ options, name, value, onChange }) => {
  return (
    <div className="radio-group">
      {options.map((option) => (
        <label key={option.value} className="radio-group__label">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="radio-group__input"
          />
          <span className="radio-group__text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
