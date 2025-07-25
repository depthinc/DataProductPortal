import { BarChart, Database, FileText, GitBranch, ShieldCheck, ToyBrick } from 'lucide-react';

export type DataProduct = {
  id: string;
  name: string;
  description: string;
  domain: 'Finance' | 'Marketing' | 'Sales' | 'Engineering';
  type: 'Dataset' | 'Report' | 'Dashboard' | 'API';
  owner: {
    name: string;
    avatarUrl: string;
  };
  lastUpdated: string;
  tags: string[];
  lifecycle: 'Development' | 'Production' | 'Deprecated';
};

export const domains = ['Finance', 'Marketing', 'Sales', 'Engineering'];

export const dataProducts: DataProduct[] = [
  {
    id: 'dp001',
    name: 'Q3 Financial Performance',
    description: 'Consolidated financial statements and key performance indicators for the third quarter.',
    domain: 'Finance',
    type: 'Report',
    owner: { name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=alice' },
    lastUpdated: '2023-10-05',
    tags: ['quarterly', 'finance', 'kpi'],
    lifecycle: 'Production',
  },
  {
    id: 'dp002',
    name: 'Customer Segmentation',
    description: 'Dataset of customers segmented by purchasing behavior and demographics.',
    domain: 'Marketing',
    type: 'Dataset',
    owner: { name: 'Bob Williams', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
    lastUpdated: '2023-11-12',
    tags: ['customers', 'segmentation', 'analytics'],
    lifecycle: 'Production',
  },
  {
    id: 'dp003',
    name: 'Sales Pipeline Dashboard',
    description: 'Real-time visualization of the current sales pipeline, from lead to close.',
    domain: 'Sales',
    type: 'Dashboard',
    owner: { name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?u=charlie' },
    lastUpdated: '2023-11-20',
    tags: ['sales', 'pipeline', 'real-time'],
    lifecycle: 'Production',
  },
  {
    id: 'dp004',
    name: 'User Authentication API',
    description: 'REST API for managing user authentication, including sign-up, login, and token management.',
    domain: 'Engineering',
    type: 'API',
    owner: { name: 'Diana Prince', avatarUrl: 'https://i.pravatar.cc/150?u=diana' },
    lastUpdated: '2023-09-30',
    tags: ['users', 'auth', 'security'],
    lifecycle: 'Deprecated',
  },
  {
    id: 'dp005',
    name: 'Marketing Campaign ROI',
    description: 'Analysis of return on investment for recent marketing campaigns.',
    domain: 'Marketing',
    type: 'Report',
    owner: { name: 'Bob Williams', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
    lastUpdated: '2023-11-18',
    tags: ['marketing', 'roi', 'campaign'],
    lifecycle: 'Production',
  },
  {
    id: 'dp006',
    name: 'Product Usage Logs',
    description: 'Raw dataset containing user interaction logs with the main product.',
    domain: 'Engineering',
    type: 'Dataset',
    owner: { name: 'Eve Adams', avatarUrl: 'https://i.pravatar.cc/150?u=eve' },
    lastUpdated: '2023-11-21',
    tags: ['logs', 'usage', 'raw-data'],
    lifecycle: 'Development',
  },
];

export const getIconForType = (type: DataProduct['type']) => {
  switch (type) {
    case 'Dataset':
      return Database;
    case 'Report':
      return FileText;
    case 'Dashboard':
      return BarChart;
    case 'API':
      return GitBranch;
    default:
      return FileText;
  }
};

export const getIconForLifecycle = (lifecycle: DataProduct['lifecycle']) => {
    switch (lifecycle) {
        case 'Development':
            return ToyBrick;
        case 'Production':
            return ShieldCheck;
        case 'Deprecated':
            return GitBranch;
        default:
            return ToyBrick;
    }
}
