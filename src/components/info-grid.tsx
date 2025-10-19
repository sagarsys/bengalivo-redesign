// Reusable info grid component for displaying key-value pairs

type InfoItem = {
  label: string;
  value: string | number;
};

type Props = {
  items: InfoItem[];
  className?: string;
};

export function InfoGrid({ items, className = "" }: Props) {
  return (
    <div className={`space-y-3 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-2 gap-2">
          <span className="text-muted-foreground">{item.label}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

