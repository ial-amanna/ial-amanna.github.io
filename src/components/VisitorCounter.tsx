import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VisitorData {
  country: string;
  count: number;
}

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/visitors');
        const data = await response.json();
        setVisitors(data);
      } catch (error) {
        console.error('Error fetching visitor data:', error);
        // Fallback to mock data if the backend is not available
        const mockData: VisitorData[] = [
          { country: 'CH', count: 45 }, // Switzerland
          { country: 'IN', count: 32 }, // India
          { country: 'US', count: 28 }, // United States
          { country: 'DE', count: 15 }, // Germany
          { country: 'GB', count: 12 }, // United Kingdom
        ];
        setVisitors(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, []);

  if (loading) {
    return <div className="animate-pulse h-8 bg-gray-200 rounded"></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg p-4 shadow-sm"
    >
      <h3 className="text-sm font-medium mb-3">Recent Visitors</h3>
      <div className="flex flex-wrap gap-3">
        {visitors.map((visitor) => (
          <div
            key={visitor.country}
            className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full"
          >
            <img
              src={`https://flagcdn.com/w20/${visitor.country.toLowerCase()}.png`}
              alt={`${visitor.country} flag`}
              className="w-4 h-3 object-cover rounded-sm"
            />
            <span className="text-sm text-gray-600">{visitor.count}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default VisitorCounter; 