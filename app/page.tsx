"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'


export default function Home() {
    const router = useRouter();

    return (
      <Button  onClick={() => router.push('/test')}>Go to /test</Button>
    );
}
