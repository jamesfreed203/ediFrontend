import IntegrationSidebar from '@/app/components/integrations/IntegrationSidebar';

export default function IntegrationsLayout({
    children,
}) {
    return (
        <div className="flex gap-6">
            <IntegrationSidebar />

            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}