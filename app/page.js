import Image from "next/image";
import Navbar from '@/components/navbar/NavBar';
import UserBar from "@/components/userbar/UserBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <UserBar />
    </main>
  );
}
