import * as React from 'react'
import { useSession, useDescope, Descope } from '@descope/react-sdk'
import LoadingScreen from './LoadingScreen'
import SecureContent from './SecureContent'
import AuthSection from './AuthSection'

export default function HomePage() {
  const [isClient, setIsClient] = React.useState(false)
  const [showSignIn, setShowSignIn] = React.useState(false)
  const { isAuthenticated, isSessionLoading, user } = useSession()
  const sdk = useDescope()

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingScreen message="Loading..." />
  }

  if (isSessionLoading) {
    return <LoadingScreen message="Checking authentication..." />
  }

  const handleSignInClick = () => {
    setShowSignIn(true)
  }

  const handleSignInSuccess = (e: CustomEvent) => {
    console.log('Signed in:', e.detail.user)
    setShowSignIn(false)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const handleLogout = async () => {
    try {
      await sdk.logout()
      console.log('Logged out successfully')
      window.location.reload()
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '38px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '10px',
          margin: '0 0 10px 0'
        }}>
          Welcome to TanStack + Descope
        </h1>

        <SecureContent isAuthenticated={isAuthenticated} user={user} />

        <AuthSection
          isAuthenticated={isAuthenticated}
          showSignIn={showSignIn}
          onSignInClick={handleSignInClick}
          onSignInSuccess={handleSignInSuccess}
          onLogout={handleLogout}
        />
      </div>
    </div>
  )
}