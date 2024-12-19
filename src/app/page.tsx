// import Image from "next/image";
// import RootLayout from "./layout";
// import { Dashboard } from "./(screens)/dashboard/page";
// import { Provider } from "@/components/ui/provider";

// export default function Home() {
//   return (
//       <Dashboard />
//   );
// }

import Link from 'next/link'
import { Dashboard } from './pages/dashboard/page'


export default function Page() {
  return (
    <>
      <Dashboard />
    </>
  )
}