// Reusable status badge component

type Props = {
  items: string[];
  variant?: 'primary' | 'muted';
};

export function StatusBadges({ items, variant = 'muted' }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <span
          key={index}
          className={`text-sm px-3 py-1 rounded-full ${
            variant === 'primary' && index === 0
              ? 'bg-primary/10 text-primary'
              : 'bg-muted'
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

