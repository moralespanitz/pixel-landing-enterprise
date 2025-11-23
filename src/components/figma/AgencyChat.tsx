import React, { useState, useEffect, useRef } from "react";
import { Search, Smile, Paperclip, AtSign, Hash, Info } from "lucide-react";

interface Message {
  id: number;
  author: string;
  time: string;
  avatar: string;
  avatarColor: string;
  content: string;
  reactions?: { emoji: string; count: number }[];
}

const MESSAGES: Message[] = [
  {
    id: 1,
    author: "Alexander",
    time: "9:15 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "Morning team! Just reviewed this week's LinkedIn posts. They're... fine, but they don't sound like me at all.",
  },
  {
    id: 2,
    author: "Jessica (Content Lead)",
    time: "9:18 AM",
    avatar: "J",
    avatarColor: "#e01e5a",
    content:
      "Hi Alexander! I understand your concern. Can you give me more specific feedback on what doesn't feel right?",
  },
  {
    id: 3,
    author: "Alexander",
    time: "9:20 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "It's too generic. \"5 ways to improve your workflow\" — everyone posts that. I need content that shows we actually understand enterprise API architecture.",
  },
  {
    id: 4,
    author: "Jessica (Content Lead)",
    time: "9:25 AM",
    avatar: "J",
    avatarColor: "#e01e5a",
    content:
      "Got it! Could you hop on a quick call to walk me through the technical details? Or maybe share some of your recent customer conversations?",
  },
  {
    id: 5,
    author: "Alexander",
    time: "9:28 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "I don't have time for another call. That's literally why I hired you. We've been over this 3 times already.",
  },
  {
    id: 6,
    author: "Jessica (Content Lead)",
    time: "9:35 AM",
    avatar: "J",
    avatarColor: "#e01e5a",
    content:
      "I completely understand. Let me revise based on our previous conversations. I'll have new drafts by EOD.",
  },
  {
    id: 7,
    author: "Alexander",
    time: "Tue 8:45 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "Still waiting on those revised drafts. We're supposed to post today.",
  },
  {
    id: 8,
    author: "Jessica (Content Lead)",
    time: "8:52 AM",
    avatar: "J",
    avatarColor: "#e01e5a",
    content:
      "I sent them at 6pm yesterday! Let me resend. *[Resends 4 LinkedIn posts]*",
  },
  {
    id: 9,
    author: "Alexander",
    time: "10:15 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "These are better but still not quite right. The technical depth isn't there. Can you add more about our caching strategy?",
  },
  {
    id: 10,
    author: "Jessica (Content Lead)",
    time: "10:18 AM",
    avatar: "J",
    avatarColor: "#e01e5a",
    content:
      "Absolutely. Would you be able to spend 10 minutes explaining your caching approach? Just so I can capture the technical nuance correctly.",
  },
  {
    id: 11,
    author: "Alexander",
    time: "10:22 AM",
    avatar: "A",
    avatarColor: "#36c5f0",
    content:
      "This is taking more time than if I just wrote it myself. I'm paying $15K/month and I'm still the bottleneck.",
    reactions: [{ emoji: "😔", count: 2 }],
  },
];

export default function AgencyChat() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    let isCancelled = false;

    const playSequence = async () => {
      for (let i = 0; i < MESSAGES.length; i++) {
        if (isCancelled) break;
        const msg = MESSAGES[i];

        // Simulate "reading/waiting" time before this message appears
        // If it's the first message, wait a bit. Otherwise wait based on who sent previous.
        const waitTime = i === 0 ? 500 : 1500;
        await new Promise((resolve) => setTimeout(resolve, waitTime));

        if (isCancelled) break;

        // Add message with empty content first to simulate typing if we want, 
        // but for this specific request, the user's HTML used a typewriter effect on the content.
        // We'll use a sub-component to handle the typing effect to keep the main loop clean.
        setVisibleMessages((prev) => [...prev, msg]);
        
        // We need to wait for the typing to finish roughly before moving to next?
        // The HTML implementation had `await typeWriter` inside the loop.
        // Here, we can just estimate or rely on the sub-component.
        // To keep it simple and strictly sequential like the HTML:
        // We will calculate duration based on length.
        const typingDuration = msg.content.length * 20 + 500; 
        await new Promise((resolve) => setTimeout(resolve, typingDuration));
        
        scrollToBottom();
      }
    };

    playSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Auto scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [visibleMessages.length]);

  return (
    <div className="w-full h-full max-h-[400px] aspect-[4/5] mx-auto bg-white rounded-xl shadow-sm flex flex-col overflow-hidden relative text-xs font-['Lato',sans-serif] border border-gray-200">
      {/* Slack Header */}
      <div className="bg-[#350d36] text-white px-3 py-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1 overflow-hidden">
          <Hash className="w-3 h-3 text-white/70 shrink-0" />
          <span className="font-bold truncate text-[13px]">marketing-agency</span>
        </div>
        <Info className="w-3 h-3 text-white/70 shrink-0" />
      </div>

      {/* Messages Area */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-3 space-y-4 bg-white scroll-smooth"
      >
        {visibleMessages.map((msg) => (
          <SlackMessage key={msg.id} message={msg} />
        ))}
        <div className="h-2" />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-gray-200 shrink-0">
        <div className="border border-gray-300 rounded-md p-2 flex flex-col gap-2">
            <input 
                type="text"
                placeholder="Message #marketing-agency"
                disabled
                className="w-full text-[11px] outline-none bg-transparent text-gray-600 placeholder-gray-400"
            />
            <div className="flex items-center justify-between text-gray-400">
                <div className="flex gap-2">
                    <Smile className="w-3 h-3" />
                    <AtSign className="w-3 h-3" />
                </div>
                <Paperclip className="w-3 h-3" />
            </div>
        </div>
      </div>
    </div>
  );
}

function SlackMessage({ message }: { message: Message }) {
  const [displayedContent, setDisplayedContent] = useState("");
  const hasFinishedTyping = displayedContent.length === message.content.length;

  useEffect(() => {
    let currentIndex = 0;
    const fullText = message.content;
    
    // Typing effect
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedContent((prev) => fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Speed in ms

    return () => clearInterval(interval);
  }, [message.content]);

  return (
    <div className="flex gap-2 items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div
        className="w-8 h-8 rounded bg-gray-200 shrink-0 flex items-center justify-center text-white font-bold text-[10px]"
        style={{ backgroundColor: message.avatarColor }}
      >
        {message.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-0.5">
          <span className="font-bold text-zinc-900 text-[11px]">
            {message.author}
          </span>
          <span className="text-[10px] text-zinc-500">{message.time}</span>
        </div>
        <div className="text-zinc-800 leading-relaxed text-[12px]">
          {displayedContent}
          {!hasFinishedTyping && (
            <span className="inline-block w-[2px] h-[12px] bg-black ml-0.5 animate-pulse align-middle" />
          )}
        </div>
        {message.reactions && message.reactions.length > 0 && hasFinishedTyping && (
            <div className="flex gap-1 mt-1">
                {message.reactions.map((reaction, idx) => (
                    <div key={idx} className="bg-gray-100 border border-gray-200 rounded-xl px-1.5 py-0.5 flex items-center gap-1 text-[10px]">
                        <span>{reaction.emoji}</span>
                        <span className="text-xs font-medium text-gray-600">{reaction.count}</span>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
