import { Routes, Route } from 'react-router-dom';
import { ProtocolsPage } from '@/features/protocols/pages/ProtocolsPage';
import { ProtocolDetailPage } from '@/features/protocols/pages/ProtocolDetailPage';
import { ThreadDetailPage } from '@/features/threads/pages/ThreadDetailPage';

function AppRoutes() {
  return (
        <Routes>
            <Route path="/" element={<ProtocolsPage />} />
            <Route path="/protocols/:id" element={<ProtocolDetailPage />} />
            <Route path="/threads/:id" element={<ThreadDetailPage />} />
        </Routes>
  );
}

export default AppRoutes;