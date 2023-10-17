'use client';
import { motion } from 'framer-motion';
type AddInfoItem = {
  label: string;
  value: string | string[] | number;
};

const AdditionalInfo = ({ data }: { data: any }) => {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
      className="mt-10 w-full border-2 border-gray-200"
    >
      {data.map((e: any, i: number) => (
        <div key={i} className="grid grid-cols-table border-gray-200">
          <p className="border-b-2 border-r-2 border-gray-200 p-2">{e.name}</p>
          <p className="border-b-2 border-gray-200 p-2">
            {Array.isArray(e.values) ? e.values.join(', ') : e.values}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default AdditionalInfo;
