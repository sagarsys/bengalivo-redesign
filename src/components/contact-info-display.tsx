// Reusable contact info display component
import { Mail, MapPin, type LucideIcon } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION } from "@/constants";

type ContactItem = {
  icon: LucideIcon;
  value: string;
  label?: string;
};

type Props = {
  showEmail?: boolean;
  showLocation?: boolean;
  iconSize?: string;
};

export function ContactInfoDisplay({ 
  showEmail = true, 
  showLocation = true,
  iconSize = "h-5 w-5"
}: Props) {
  const items: ContactItem[] = [];
  
  if (showEmail) {
    items.push({ icon: Mail, value: CONTACT_EMAIL });
  }
  
  if (showLocation) {
    items.push({ icon: MapPin, value: CONTACT_LOCATION });
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-center gap-3">
            <Icon className={`${iconSize} text-primary`} />
            <span className="text-muted-foreground">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}

