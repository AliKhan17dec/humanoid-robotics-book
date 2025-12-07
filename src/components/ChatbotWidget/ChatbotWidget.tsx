import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatbotWidget.module.css';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
    sources?: Array<{
        title: string;
        content: string;
        similarity_score: number;
    }>;
}

export default function ChatbotWidget(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const sessionIdRef = useRef(Math.random().toString(36).substring(7));

    // Note: resolve the runtime API URL at send time so that `static/chatbot-config.js`
    // can be loaded asynchronously and still be picked up by the widget.
    // Scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Add welcome message on first open
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const welcomeMessage: Message = {
                id: 'welcome',
                text: 'Hello! I\'m your Humanoid Robotics Book Assistant. Ask me anything about the course content!',
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages([welcomeMessage]);
        }
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Resolve runtime-configurable API URL here to avoid relying on it
            // being available during initial render.
            const runtimeApiUrl = (typeof window !== 'undefined' && (window as any).CHATBOT_API_URL) || 'http://localhost:8000';

            // Call the chatbot backend
            const response = await fetch(`https://giaic-q3-hackathon-1-production.up.railway.app/chat/query`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: input,
                    session_id: `user-${sessionIdRef.current}`,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: data.answer,
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString(),
                sources: data.sources,
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Sorry, I encountered an error. Please make sure the backend server is running.',
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className={styles.chatbotContainer}>
            {/* Chat Button */}
            <button
                className={styles.chatButton}
                onClick={() => setIsOpen(!isOpen)}
                title="Chat with our Robotics Assistant"
                aria-label="Open chatbot"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

            {/* Chat Dialog */}
            {isOpen && (
                <div className={styles.chatDialog}>
                    {/* Header */}
                    <div className={styles.chatHeader}>
                        <h3>Robotics Assistant</h3>
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chatbot"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.chatMessages}>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`${styles.message} ${styles[message.sender]}`}
                            >
                                <div className={styles.messageContent}>
                                    <p>{message.text}</p>
                                    {message.sources && message.sources.length > 0 && (
                                        <div className={styles.sources}>
                                            <details>
                                                <summary>📚 Sources ({message.sources.length})</summary>
                                                <div className={styles.sourcesList}>
                                                    {message.sources.map((source, idx) => (
                                                        <div key={idx} className={styles.sourceItem}>
                                                            <strong>{source.title}</strong>
                                                            <p>{source.content.substring(0, 150)}...</p>
                                                            <small>
                                                                Relevance: {(source.similarity_score * 100).toFixed(1)}%
                                                            </small>
                                                        </div>
                                                    ))}
                                                </div>
                                            </details>
                                        </div>
                                    )}
                                    <small className={styles.timestamp}>{message.timestamp}</small>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.bot}`}>
                                <div className={styles.messageContent}>
                                    <div className={styles.typingIndicator}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            placeholder="Ask about ROS 2, Gazebo, VLA..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading || !input.trim()}
                            className={styles.sendButton}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
