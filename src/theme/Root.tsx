import React from 'react';
import { useLocation } from '@docusaurus/router';
import ChatbotWidget from '@site/src/components/ChatbotWidget';

export default function RootLayout({ children }) {
    const location = useLocation();

    // Optionally exclude chatbot from specific pages
    const excludePaths = ['/404.html'];
    const shouldShowChatbot = !excludePaths.some(path => location.pathname.includes(path));

    return (
        <>
            {children}
            {shouldShowChatbot && <ChatbotWidget />}
        </>
    );
}
