import { useState, useEffect } from "react";

export const SearchInput = ({ onSearch, placeholder = "Search...", delay = 300, }: {
  onSearch: (value: string) => void;
  placeholder?: string;
  delay?: number;
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay, onSearch]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-lg px-4 py-2 mb-4"
    />
  );
};