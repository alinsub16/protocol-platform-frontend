interface Props {
  label: string;
}

export const TagBadge = ({ label }: Props) => {
  return (
    <span
      className="
        bg-slate-100
        text-slate-700
        text-xs
        px-2
        py-1
        rounded-full
      "
    >
      {label}
    </span>
  );
};