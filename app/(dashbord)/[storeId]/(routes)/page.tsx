import React from 'react';


interface DashboardPageProps {
    params: { storedId: string }
}

const DashboardPage: React.FC<DashboardPageProps> = async () => {
    return (
        <div>
            DashboardPage
        </div>
    );
};

export default DashboardPage;