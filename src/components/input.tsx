import { useState, InputHTMLAttributes, forwardRef, ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError("");
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (type === "email" && value && !value.includes("@")) {
      setError("Can't be empty");
    }
  };

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${className} flex w-full bg-transparent px-4 pb-4 border-b text-body-m font-light focus:outline-none outline-none cursor-pointer ${error ? "border-primary text-primary" : isFocused ? "border-white" : "border-greyish-blue"}`}
        {...props}
        ref={ref}
      />
      {isFocused && (
        <span className="absolute right-0 top-3 transform -translate-y-3 w-0.5 h-5 bg-primary animate-blink"></span>
      )}
      {error && (
        <p className="absolute right-0 top-1 text-primary text-body-s font-light">{error}</p>
      )}
    </div>
  );
});

export { Input };
