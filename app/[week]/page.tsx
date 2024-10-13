'use client';

import { First, Second } from "@/src/widget/scene";
import { usePathname } from "next/navigation";

const Week = () => {
  const path = usePathname();
  
  const Component = {
    '/first' : <First />,
    '/second' : <Second />
  }
  return (
    Component[path]
  )
}

export default Week