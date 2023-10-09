'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
const dropdownValues = [
  'Default sorting',
  'Sort by popularity',
  'Sort by average rating',
  'Sort by latest',
  'Sort by price: low to high',
  'Sort by price: high to low'
];

const dropdownVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
};

const DefaultSortingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(dropdownValues[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: React.SetStateAction<string | undefined>) => {
    setSelectedValue(value);
    toggleDropdown();
  };
  return (
    <div>
      <div className="relative z-30">
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedValue}
        </button>
        {isOpen && (
          <motion.ul
            className="absolute mt-2 rounded-md border border-gray-200 bg-white py-1 shadow-lg"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
          >
            {dropdownValues.map((value, index) => (
              <motion.li
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                variants={itemVariants}
                onClick={() => handleSelect(value)}
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
      {/* <Select>
        <SelectTrigger className="w-[200px] lg:w-[220px]">
          <SelectValue>
            <motion.div initial="hidden" animate="visible" variants={list}>
              Default sorting
            </motion.div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <AnimatePresence initial={false}>
            <SelectItem value="default">
              <motion.div variants={item} exit="hidden">Default sorting</motion.div>
            </SelectItem>
            <SelectItem value="popularity">
              <motion.div variants={item} exit="hidden">Sort by popularity</motion.div>
            </SelectItem>
            <SelectItem value="average_rating">
              <motion.div variants={item} exit="hidden">Sort by average rating</motion.div>
            </SelectItem>
            <SelectItem value="latest">
              <motion.div variants={item} exit="hidden">Sort by latest</motion.div>
            </SelectItem>
            <SelectItem value="low_to_high">
              <motion.div variants={item} exit="hidden">
                Sort by price: low to high
              </motion.div>
            </SelectItem>
            <SelectItem value="high_to_low">
              <motion.div variants={item} exit="hidden">
                Sort by price: high to low
              </motion.div>
            </SelectItem>
          </AnimatePresence>
        </SelectContent>
      </Select> */}
    </div>
  );
};

export default DefaultSortingDropdown;
