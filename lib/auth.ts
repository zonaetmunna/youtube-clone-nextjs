// Helper functions for authentication

// Check if user is authenticated (client-side)
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false

  // Check for auth token in cookies
  const cookies = document.cookie.split(";")
  const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth-token="))

  return !!authCookie
}

// Get current user (client-side)
export const getCurrentUser = () => {
  if (typeof window === "undefined") return null

  try {
    const userJson = localStorage.getItem("user")
    if (!userJson) return null

    return JSON.parse(userJson)
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}

// Logout user (client-side)
export const logout = () => {
  if (typeof window === "undefined") return

  // Clear auth cookie
  document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

  // Clear user from localStorage
  localStorage.removeItem("user")

  // Reload page to apply changes
  window.location.href = "/login"
}
