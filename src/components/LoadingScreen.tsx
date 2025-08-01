interface LoadingScreenProps {
  message: string
}

export default function LoadingScreen({ message }: LoadingScreenProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ color: '#ffffff', fontSize: '20px' }}>{message}</div>
    </div>
  )
}