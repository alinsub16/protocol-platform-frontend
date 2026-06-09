import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import { ProtocolDetailPage } from '@/features/protocols/pages/ProtocolDetailPage';
import { ThreadDetailPage } from '@/features/threads/pages/ThreadDetailPage';

function AppRoutes() {
  return (
        <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/protocols/:id" element={<ProtocolDetailPage />} />
            <Route path="/threads/:id" element={<ThreadDetailPage />} />
        </Routes>
  );
}

export default AppRoutes;