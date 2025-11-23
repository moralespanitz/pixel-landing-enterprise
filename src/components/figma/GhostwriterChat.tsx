import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Star, Archive, Trash2, Mail, MoreVertical, Reply, Forward, MoreHorizontal, CornerUpLeft } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  avatar: string;
  avatarColor: string;
  date: string;
  to: string;
  content: string;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    sender: "Sarah (Ghostwriter)",
    avatar: "S",
    avatarColor: "#10B981",
    date: "15 Jan",
    to: "to me",
    content: "Hi Alex! Here are this week's LinkedIn posts. Let me know what you think 😊"
  },
  {
    id: 2,
    sender: "me",
    avatar: "A",
    avatarColor: "#3B82F6",
    date: "15 Jan",
    to: "to Sarah",
    content: "These are... generic. This doesn't sound like me at all. We've talked about our API architecture 3 times now."
  },
  {
    id: 3,
    sender: "Sarah (Ghostwriter)",
    avatar: "S",
    avatarColor: "#10B981",
    date: "16 Jan",
    to: "to me",
    content: "Got it! I'll revise. Can you send me more context on the technical details?"
  },
  {
    id: 4,
    sender: "me",
    avatar: "A",
    avatarColor: "#3B82F6",
    date: "16 Jan",
    to: "to Sarah",
    content: "I don't have time to explain this again. That's why I hired you. This is taking more time than writing it myself."
  }
];

export default function GhostwriterChat() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;

    const runAnimation = async () => {
      for (let i = 0; i < MESSAGES.length; i++) {
        if (isCancelled) break;
        const msg = MESSAGES[i];

        // Add message
        setVisibleMessages((prev) => [...prev, msg]);

        // Wait for typing duration + pause
        // We can approximate typing duration based on length to sync with the child component
        const typingDuration = msg.content.length * 20; 
        const pause = 1500; // Pause between messages
        
        await new Promise((resolve) => setTimeout(resolve, typingDuration + pause));
      }
    };

    // Initial delay
    const timer = setTimeout(() => {
      runAnimation();
    }, 500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  return (
    <div className="w-full h-full max-h-[400px] aspect-[4/5] mx-auto bg-white rounded-xl shadow-sm flex flex-col overflow-hidden relative text-xs font-sans border border-gray-200">
      {/* Toolbar */}
      <div className="bg-white p-3 flex justify-between items-center border-b border-gray-100 shrink-0 z-10">
        <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-3">
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <Star className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <Archive className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <Mail className="w-4 h-4" />
          </button>
          <button className="text-gray-500 hover:bg-gray-100 p-1 rounded-full">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email Thread */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-0 scroll-smooth bg-white"
      >
        {visibleMessages.map((msg, index) => (
           <EmailMessage 
             key={msg.id} 
             message={msg} 
             isLast={index === visibleMessages.length - 1}
             onHeightChange={() => {
                if (scrollContainerRef.current) {
                   scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
                }
             }}
           />
        ))}
        
        {/* Action Buttons (Only show when at least one message) */}
        {visibleMessages.length > 0 && (
          <div className="p-4 flex gap-3 border-t border-gray-100 bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards">
            <button className="flex-1 border border-gray-300 rounded-full py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 transition-colors text-[11px] font-medium">
              <Reply className="w-3 h-3" />
              Reply
            </button>
            <button className="flex-1 border border-gray-300 rounded-full py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50 transition-colors text-[11px] font-medium">
              <Forward className="w-3 h-3" />
              Forward
            </button>
          </div>
        )}
      </div>

      {/* Home Indicator */}
      <div className="bg-white pb-2 flex justify-center shrink-0">
        <div className="w-24 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
}

function EmailMessage({ message, isLast, onHeightChange }: { message: Message; isLast: boolean; onHeightChange: () => void }) {
  const [displayedContent, setDisplayedContent] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    const fullText = message.content;
    
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedContent((prev) => fullText.slice(0, currentIndex + 1));
        currentIndex++;
        onHeightChange(); // Request scroll update as content grows
      } else {
        clearInterval(interval);
      }
    }, 20); 

    return () => clearInterval(interval);
  }, [message.content]);

  const isTyping = displayedContent.length < message.content.length;

  return (
    <div className="px-4 py-4 border-b border-gray-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="shrink-0">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm"
            style={{ backgroundColor: message.avatarColor }}
          >
            {message.avatar}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="text-[13px] font-semibold text-gray-900 leading-tight">{message.sender}</h3>
              <p className="text-[11px] text-gray-500 leading-tight flex items-center gap-1">
                {message.to} <span className="text-[8px]">▼</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
               <span className="text-[10px]">{message.date}</span>
               <CornerUpLeft className="w-3 h-3" />
               <MoreHorizontal className="w-3 h-3" />
            </div>
          </div>

          {/* Text */}
          <div className="text-[12px] text-gray-800 leading-relaxed whitespace-pre-line break-words mt-2">
            {displayedContent}
            {isTyping && (
               <span className="inline-block w-[2px] h-[12px] bg-gray-900 ml-0.5 animate-pulse align-middle" />
            )}
          </div>
          
          {!isTyping && (
             <button className="mt-2 text-gray-400 hover:text-gray-600 transition-colors">
               <MoreHorizontal className="w-4 h-4" />
             </button>
          )}
        </div>
      </div>
    </div>
  );
}
