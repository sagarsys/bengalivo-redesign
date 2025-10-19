// Reusable newsletter section component
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SCROLL_ANIMATION } from "@/constants";

type NewsletterSectionProps = {
  title: string;
  subtitle: string;
  placeholder: string;
  buttonText: string;
};

export function NewsletterSection({ title, subtitle, placeholder, buttonText }: NewsletterSectionProps) {
  return (
    <motion.section
      {...SCROLL_ANIMATION}
      className="mb-16"
    >
      <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
        <CardContent className="p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            {subtitle}
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={placeholder}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
              />
              <Button className="px-6">{buttonText}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}

