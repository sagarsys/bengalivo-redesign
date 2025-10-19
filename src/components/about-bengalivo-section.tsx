// Reusable About Bengalivo section component
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

type AboutBengalivoSectionProps = {
  title: string;
  content: string;
};

export function AboutBengalivoSection({ title, content }: AboutBengalivoSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <Card className="bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}

