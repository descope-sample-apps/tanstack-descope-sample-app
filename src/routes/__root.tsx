import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [homeHovered, setHomeHovered] = React.useState(false)
  const [aboutHovered, setAboutHovered] = React.useState(false)

  return (
    <>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '10',
        padding: '16px',
        display: 'flex',
        gap: '16px',
        justifyContent: 'center'
      }}>
        <Link 
          to="/" 
          onMouseEnter={() => setHomeHovered(true)}
          onMouseLeave={() => setHomeHovered(false)}
          style={{
            padding: '8px 16px',
            background: homeHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          onMouseEnter={() => setAboutHovered(true)}
          onMouseLeave={() => setAboutHovered(false)}
          style={{
            padding: '8px 16px',
            background: aboutHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}