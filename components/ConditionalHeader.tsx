"use client"
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  if (pathname && pathname.startsWith('/projects')) {
    return null
  }
  return <Header />
}


