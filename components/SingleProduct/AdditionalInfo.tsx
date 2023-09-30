'use client';
import React from 'react';
import { motion } from 'framer-motion';
type AddInfoItem = {
  label: string;
  value: string | string[] | number;
};

const AdditionalInfo = ({ data }: { data: AddInfoItem[] }) => {
  return (
    <motion.div
      viewport={{ once: false }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.6 }}
      className="mt-10 w-full border-2 border-gray-200"
    >
      {data.map((e: AddInfoItem, i: number) => (
        <div key={i} className="grid-cols-table grid border-gray-200">
          <p className="border-b-2 border-r-2 border-gray-200 p-2">{e.label}</p>
          <p className="border-b-2 border-gray-200 p-2">
            {Array.isArray(e.value) ? e.value.join(', ') : e.value}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default AdditionalInfo;
