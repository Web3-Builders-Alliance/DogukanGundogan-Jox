// 'use client'

// import * as React from 'react'
// import { ConnectKitProvider } from 'connectkit'
// import { WagmiConfig } from 'wagmi'

// import { config } from '../../wagmi'

// type ProvidersProps = Readonly<{
//   children: React.ReactNode
// }>

// export function Providers({ children }: ProvidersProps) {
//   const [mounted, setMounted] = React.useState(false)
//   React.useEffect(() => setMounted(true), [])
//   return (
//     <WagmiConfig config={config}>
//       <ConnectKitProvider theme="retro">
//         {mounted && children}
//       </ConnectKitProvider>
//     </WagmiConfig>
//   )
// }
