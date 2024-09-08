"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter();

    return (
      <Button  onClick={() => router.push('/')}>Go to /</Button>
    );
}
