'use client';

import MessageSidebar from "@/app/components/messages/MessageSidebar";

export default function MessageLayout({ children }){
    return (
        <div className="flex gap-6">
            <MessageSidebar />

            <div className="flex-1">
                {children}
                {/* <MessageToolbar />
                <MessageTable /> */}
            </div>
        </div>
    );
}