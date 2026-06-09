import React from 'react'
import Head from '@/components/layout/Head'
import { ProtocolsPage } from '@/features/protocols/pages/ProtocolsPage'

const MainLayout:React.FC = () => {
  return (
    <div>
        <Head />
        <ProtocolsPage />
    </div>
  )
}

export default MainLayout