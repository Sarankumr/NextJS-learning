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
import { Contact } from './block/contact/page'
import { RequestForService } from './block/career/block/requestForService/page'
import { Dashboard } from './block/dashboard/page'

export default function Page() {
  return <Dashboard />
}