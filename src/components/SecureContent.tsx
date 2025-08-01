interface SecureContentProps {
  isAuthenticated: boolean
  user: any
}

export default function SecureContent({ isAuthenticated, user }: SecureContentProps) {
  return (
    <div style={{
      margin: '40px 0',
      padding: '40px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #f7fafc, #edf2f7)',
      border: '2px solid #e2e8f0',
      minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'all 0.5s ease',
      filter: !isAuthenticated ? 'blur(8px)' : 'none',
      opacity: !isAuthenticated ? '0.6' : '1'
    }}>
      {!isAuthenticated && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '18px',
          color: '#4a5568',
          fontWeight: '600',
          filter: 'none',
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '15px 25px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 10
        }}>
          Sign in to reveal content
        </div>
      )}
      
      {isAuthenticated ? (
        <>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)',
            overflow: 'hidden'
          }}>
            <img 
              src="/descope.png" 
              alt="Descope Logo"
              style={{
                width: '80px',
                height: 'auto'
              }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = '<div style="color: white; font-size: 24px; font-weight: bold;">descope</div>';
                }
              }}
            />
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '10px'
          }}>
            Welcome back!
          </div>
          <div style={{
            color: '#4a5568',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            You now have access to our logo!
          </div>
        </>
      ) : (
        <>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(135deg, #a0aec0, #718096)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>
            ?
          </div>
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '10px'
          }}>
            Hidden Content
          </div>
          <div style={{
            color: '#4a5568',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            Something amazing awaits behind this blur...
          </div>
        </>
      )}
    </div>
  )
}