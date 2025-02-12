import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card";
import { LazyImage } from "./LazyImage";

interface RulesCardProps {
  title: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  ruleDescription: string;
}

export function RuleCard({
  title,
  imgSrc,
  imgAlt,
  ruleDescription
}: RulesCardProps) {
  return (
    <motion.div
      initial={{ scale: 1, y: 300 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Card className="w-full md:w-[90%] lg:w-[500px] mt-4 hover:scale-105 transition-transform ease-in-out">
        <CardHeader className="bg-primary text-white rounded-t-lg py-2">
          <CardTitle>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex-col justify-center items-center p-0">
          <LazyImage
            src={imgSrc}
            className="bg-cover h-full"
            alt={imgAlt}
          />
        </CardContent>
        <CardFooter className="text-center flex flex-col justify-center items-center py-2">
          <p className="text-center text-lg">
            {ruleDescription}
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
