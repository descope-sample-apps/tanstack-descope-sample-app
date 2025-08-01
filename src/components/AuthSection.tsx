import * as React from 'react'
import { Descope } from '@descope/react-sdk'

interface AuthSectionProps {
  isAuthenticated: boolean
  showSignIn: boolean
  onSignInClick: () => void
  onSignInSuccess: (e: any) => void
  onLogout: () => void
}

export default function AuthSection({ 
  isAuthenticated, 
  showSignIn, 
  onSignInClick, 
  onSignInSuccess, 
  onLogout 
}: AuthSectionProps) {
  const [isSignInHovered, setIsSignInHovered] = React.useState(false)
  const [isLogoutHovered, setIsLogoutHovered] = React.useState(false)

  if (!isAuthenticated) {
    return (
      <div style={{
        background: '#f8fafc',
        borderRadius: '16px',
        padding: '30px',
        border: '1px solid #e2e8f0'
      }}>
        {!showSignIn ? (
          <>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '20px'
            }}>
              Ready to see what's inside?
            </h2>
            <button
              onClick={onSignInClick}
              onMouseEnter={() => setIsSignInHovered(true)}
              onMouseLeave={() => setIsSignInHovered(false)}
              style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: isSignInHovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: isSignInHovered 
                  ? '0 6px 20px rgba(102, 126, 234, 0.4)' 
                  : '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
            >
              Sign In to Unlock
            </button>
          </>
        ) : (
          <>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '20px'
            }}>
              Sign in to continue
            </h2>
            <div style={{ marginTop: '20px' }}>
              <Descope
                flowId="sign-up-or-in"
                onSuccess={onSignInSuccess}
                onError={(e) => console.log('Could not log in!', e)}
              />
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{
        background: 'linear-gradient(135deg, #48bb78, #38a169)',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '12px',
        fontWeight: '600'
      }}>
        Authentication successful!
      </div>
      <button
        onClick={onLogout}
        onMouseEnter={() => setIsLogoutHovered(true)}
        onMouseLeave={() => setIsLogoutHovered(false)}
        style={{
          background: 'linear-gradient(135deg, #e53e3e, #d53f8c)',
          color: 'white',
          border: 'none',
          padding: '12px 32px',
          fontSize: '16px',
          fontWeight: '600',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isLogoutHovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: isLogoutHovered 
            ? '0 6px 20px rgba(229, 62, 62, 0.4)' 
            : '0 4px 15px rgba(229, 62, 62, 0.3)'
        }}
      >
        Logout
      </button>
    </div>
  )
}