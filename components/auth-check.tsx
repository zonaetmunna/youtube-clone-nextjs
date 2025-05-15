"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/login")
    } else {
      setChecked(true)
    }
  }, [router])

  // Don't render children until authentication check is complete
  if (!checked) {
    return null
  }

  return <>{children}</>
}
