import { FC } from "react";
import "./Textarea.scss";

interface ITextarea {
  value: string;
  title: string;
  placeholder?: string;
  handleChange: (newValue: string) => void;
}

export const Textarea: FC<ITextarea> = ({
  title,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="textarea__wrapper">
      <label htmlFor="textarea-text" className="label">
        {title}
      </label>
      <textarea
      className="textarea"
        placeholder={placeholder}
        value={value}
        id="textarea-text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
