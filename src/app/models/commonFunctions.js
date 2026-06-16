export const getPeriodText = (billingCycle) => {
    switch(billingCycle) {
        case 'yearly': return 'per year';
        case 'quarterly': return 'per quarter';
        case 'monthly': return 'per month';
        default: return '';
    }
};

export const cardColors = [
    { bg: '#4399fa', hover: '#2e8dfa', text: '#4399fa', name: 'Free' },
    { bg: '#14b8a6', hover: '#0d9488', text: '#14b8a6', name: 'Plus' },
    { bg: '#8b5cf6', hover: '#7c3aed', text: '#8b5cf6', name: 'Standard' },
    { bg: '#f59e0b', hover: '#d97706', text: '#f59e0b', name: 'Business' },
];