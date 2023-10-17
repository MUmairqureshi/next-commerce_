"use client"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import img1 from 'assets/images/NavImage1.png'
import img2 from 'assets/images/NavImage2.png'
import { motion } from "framer-motion"
import { Bird, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type Checked = DropdownMenuCheckboxItemProps["checked"]
const shpoMenu1=[
  {label:'Shop',href:"#"},
  {label:'New Arrivals',href:"#"},
  {label:'Suits & Blazzers',href:"#"},
  {label:'Vests',href:"#"},
  {label:'Dress Shirts',href:"#"},
  {label:'Dress Pants',href:"#"},
  {label:'Sweaters & Jacket',href:"#"},
]
const shpoMenu2=[
  {label:'Casual Shirts & Sets',href:"#"},
  {label:'Casual Pants & Shorts',href:"#"},
  {label:'Accessories',href:"#"},
  {label:'Gift Card',href:"#"},
]
export function DropdownMenuCheckboxes() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" pt-1 flex align-center">
        <Link href="#" className="group text-baseline  w-full flex   items-baseline text-neutral-500 underline-offset-4 hover:text-black gap-x-3 hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 " >Shop </Link>
        <ChevronDown/>
          </div>                      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-0 p-0" >
          <motion.div
          className="flex lg:h-[460px] h-[380px] mt-8 w-[98.6vw] border-0  justify-center rounded-none bg-[#003445]"
          viewport={{ once: false }}
          initial={{ opacity: 0,  }}
whileInView={{ opacity: 1, }}
    transition={{ duration: 0.6}}>
          <div
          className="grid w-full 2xl:w-5/6 grid-cols-5 p-12 ">
          <div className='flex items-center justify-end border-r-2 border-white pr-14 col-span-2'>
            <div>
            {shpoMenu1.length ? (
              <ul className=" ml-14 hidden w-full gap-6   text-sm md:flex md:flex-col  ">
                {shpoMenu1.map((item) => (
                  <li>
                    <Link
                      href={`/${item.href}`}
                      className="text-baseline  w-full    items-baseline text-white underline-offset-4 hover:text-white/70 hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                    >
                      {item.label}
                    </Link>
                  </li>                    
                ))}
              </ul>
            ) : null}
            </div>
            <div >
            {shpoMenu2.length ? (
              <ul className=" ml-14 hidden w-full gap-6  text-sm md:flex md:flex-col ">
                {shpoMenu2.map((item) => (
                  <li>
                    <Link
                      href={`/${item.href}`}
                      className="text-baseline  items-baseline text-white underline-offset-4 hover:text-white/70  hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 "
                    >
                      {item.label}
                    </Link>
                  </li>                    
                ))}
              </ul>
            ) : null}
            </div>
          </div>
          <div className='pl-12 col-span-3 flex gap-x-8 justify-start'>
            <div className='border-[1px] text-center items-center flex flex-col justify-center text-white p-4 text-sm border-white w-44 h-2/3'>
            <Bird size="40" className='mb-3'/>
                  <h1 className='font-bold text-base'>Our Design</h1>

                  <p >We pride ourselves on our menswear-inspired cut & details. Learn More about our designs.</p>
            </div>
            <div className=' text-center items-center flex flex-col justify-center text-white text-sm border-white w-48 h-4/5'>
                  <Image alt="image" className="h-full w-full" width="100" height="100" src={img1}/>
                  <h1 className='font-bold mt-3 mb-1' >Shop fresh new arrivals!</h1>
                  <Link href="#" className='hover:text-white/70 hover:underline'><p>Shop New Arrivals</p></Link>

            </div>
            <div className=' text-center items-center flex flex-col justify-center text-white text-sm border-white w-48 h-4/5'>
                  <Image alt="image" className="h-full w-full" width="100" height="100" src={img2}/>
                  <h1 className='font-bold  mt-3 mb-1'>Shop fresh new arrivals!</h1>
                  <Link href="#" className='hover:text-white/70 hover:underline'><p>Shop New Arrivals</p></Link>
            </div>
          </div>
          </div>
        
          </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
