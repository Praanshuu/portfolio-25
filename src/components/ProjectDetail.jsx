import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import LifeOSDetail from './projects/LifeOSDetail';
import AIAssemblyDetail from './projects/AIAssemblyDetail';
import VerifyAuraDetail from './projects/VerifyAuraDetail';
import CollexDetail from './projects/CollexDetail';
import './ProjectDetail.css';

const pages = {
  lifeos: LifeOSDetail,
  'ai-assembly': AIAssemblyDetail,
  'verify-aura': VerifyAuraDetail,
  collex: CollexDetail,
};

const ProjectDetail = () => {
    const { id } = useParams();
    const Page = pages[id];
    if (!Page) return <Navigate to="/" replace />;
    return <div className="detail-wrapper"><Page /></div>;
};

export default ProjectDetail;
