import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Mic, AudioLines, PanelLeft, SquarePen } from "lucide-react";
import chatgptLogo from "figma:asset/33e06e724e233b6c6f3c9f194f54fd72e8cc94bb.png";

// Types
type MessageType = "user" | "ai";

interface Message {
  id: number;
  type: MessageType;
  content: string;
  isTyping?: boolean;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    type: "user",
    content: "Write a LinkedIn post about our new API feature that helps developers ship faster",
  },
  {
    id: 2,
    type: "ai",
    content:
      "🚀 Exciting News! 🚀\n\nWe're thrilled to announce our new API feature that will revolutionize the way developers work!\n\n✨ Key Benefits:\n• Faster deployment times\n• Improved efficiency\n• Better developer experience\n• Seamless integration\n\nReady to take your development to the next level? Check out our latest innovation!\n\n#API #Innovation #DeveloperTools #TechNews",
  },
  {
    id: 3,
    type: "user",
    content:
      "This sounds like every other tech post. Can you make it more specific to our product?",
  },
  {
    id: 4,
    type: "ai",
    content:
      "You're absolutely right! Let me make it more specific:\n\n🎯 Big News for Developers! 🎯\n\nIntroducing our game-changing API feature designed specifically for modern development teams!\n\n💡 Why it matters:\n→ Reduce deployment time significantly\n→ Streamline your workflow\n→ Built for scale\n→ Developer-first approach\n\nJoin thousands of developers already benefiting from this innovation!\n\nLearn more: [link]\n\n#SoftwareDevelopment #DevTools #TechInnovation",
  },
  {
    id: 5,
    type: "user",
    content:
      "This still doesn't explain WHAT our API does or WHY it's different. It could be any product.",
  },
  {
    id: 6,
    type: "ai",
    content:
      "I apologize for the generic approach. To create truly specific content, I would need more details about:\n\n• The exact technical implementation of your API\n• Specific use cases and customer pain points\n• What makes it unique compared to competitors\n• Your company's voice and positioning\n• Recent customer wins or testimonials\n\nCould you provide these details so I can create more targeted content?",
  },
];

export default function ChatInterface() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false); // For the initial pause before typing starts
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom helper
  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const maxScroll = scrollHeight - clientHeight;
      scrollContainerRef.current.scrollTo({
        top: maxScroll,
        behavior: "smooth",
      });
    }
  };

  // Force scroll when messages change
  useEffect(() => {
    // Use a small timeout to ensure DOM has updated
    const timeoutId = setTimeout(scrollToBottom, 10);
    return () => clearTimeout(timeoutId);
  }, [visibleMessages, isThinking]);

  // Simulation Logic
  useEffect(() => {
    let isCancelled = false;

    const runSimulation = async () => {
      for (let i = 0; i < INITIAL_MESSAGES.length; i++) {
        if (isCancelled) break;
        const msg = INITIAL_MESSAGES[i];

        if (msg.type === "ai") {
          // 1. Thinking state (no text yet)
          setIsThinking(true);
          await new Promise((resolve) => setTimeout(resolve, 800)); 
          if (isCancelled) break;
          setIsThinking(false);

          // 2. Start typing - Add message with empty content
          setVisibleMessages((prev) => [
            ...prev,
            { ...msg, content: "", isTyping: true },
          ]);

          // 3. Stream content
          const content = msg.content;
          let currentText = "";
          
          // Type characters
          for (let j = 0; j < content.length; j++) {
             if (isCancelled) break;
             currentText += content[j];
             
             setVisibleMessages((prev) => {
               const newMsgs = [...prev];
               const lastMsg = newMsgs[newMsgs.length - 1];
               if (lastMsg && lastMsg.id === msg.id) {
                   lastMsg.content = currentText;
               }
               return newMsgs;
             });

             // Random typing speed
             const speed = Math.random() * 10 + 10;
             await new Promise((resolve) => setTimeout(resolve, speed));
          }
          
          // 4. Finish typing
          setVisibleMessages((prev) => {
             const newMsgs = [...prev];
             const lastMsg = newMsgs[newMsgs.length - 1];
             if (lastMsg) lastMsg.isTyping = false;
             return newMsgs;
          });

        } else {
          // User message - Pause before showing
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (isCancelled) break;
          setVisibleMessages((prev) => [...prev, msg]);
        }
      }
    };

    // Initial delay
    const timer = setTimeout(() => {
      runSimulation();
    }, 500);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
      <div className="w-full h-full max-h-[400px] aspect-[4/5] mx-auto bg-white rounded-xl shadow-sm flex flex-col overflow-hidden relative text-xs font-['Sora',sans-serif]">
        
        {/* Header */}
        <header className="flex items-center justify-between px-3 py-2 bg-white z-10 sticky top-0 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
               <PanelLeft className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
            </button>
            <h1 className="text-xs font-medium text-zinc-700">Content Marketing</h1>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <SquarePen className="w-4 h-4 text-zinc-500" strokeWidth={1.5} />
          </button>
        </header>

        {/* Messages Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-3 space-y-4 scroll-smooth"
        >
          {visibleMessages.map((msg) => (
            <MessageItem key={msg.id} message={msg} />
          ))}
          
          {isThinking && (
             <div className="flex items-start gap-2 pr-4">
               <div className="w-6 h-6 flex-shrink-0 mt-0.5 rounded-full overflow-hidden border border-gray-100 p-[2px]">
                  <img src={chatgptLogo} alt="ChatGPT" className="w-full h-full object-contain" />
               </div>
               <div className="flex gap-1 pt-2">
                 <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} className="h-2" />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white">
          <div className="flex items-center gap-2">
             <div className="flex-1 bg-[#f4f4f4] rounded-full h-[36px] flex items-center px-2 relative border border-transparent focus-within:border-gray-300 transition-colors">
                <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-gray-200 rounded-full transition-colors" aria-label="Add attachment">
                   <Plus className="w-4 h-4" strokeWidth={2} />
                </button>
                <div className="flex-1 px-2 text-zinc-800 text-[12px]">
                  Message ChatGPT...
                </div>
                <button className="p-1.5 bg-black text-white rounded-full transition-colors ml-auto" aria-label="Send">
                   <Mic className="w-3 h-3" strokeWidth={2} />
                </button>
             </div>
          </div>
          <div className="text-center text-[8px] text-zinc-400 mt-2 leading-tight">
             ChatGPT can make mistakes. Check important info.
          </div>
        </div>

      </div>
  );
}

function MessageItem({ message }: { message: Message }) {
  const isUser = message.type === "user";

  if (isUser) {
    return (
      <div className="flex justify-end w-full">
        <div className="bg-[#f4f4f4] text-zinc-900 px-3 py-2 rounded-[16px] max-w-[90%] text-[12px] leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 w-full">
      <div className="w-6 h-6 flex-shrink-0 mt-0.5 rounded-full overflow-hidden border border-gray-100 p-[2px]">
        <img src={chatgptLogo} alt="ChatGPT" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1 text-zinc-900 leading-5 text-[12px]">
        <FormatContent content={message.content} isTyping={message.isTyping} />
      </div>
    </div>
  );
}

function FormatContent({ content, isTyping }: { content: string, isTyping?: boolean }) {
  if (!content && isTyping) {
    return <span className="inline-block w-1.5 h-1.5 bg-black rounded-full" />;
  }
  
  // Handle newlines
  const paragraphs = content.split('\n\n');
  
  return (
    <>
      {paragraphs.map((paragraph, idx) => {
        const isLastParagraph = idx === paragraphs.length - 1;
        
        return (
          <p key={idx} className="mb-2 last:mb-0">
            {paragraph.split('\n').map((line, lineIdx) => (
              <React.Fragment key={lineIdx}>
                {lineIdx > 0 && <br />}
                <span dangerouslySetInnerHTML={{ 
                   // Bold formatting with minimal parser
                   __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                }} />
              </React.Fragment>
            ))}
            {/* Show the circle cursor only at the very end of the streaming message */}
            {isLastParagraph && isTyping && (
               <span className="inline-block w-1.5 h-1.5 bg-black rounded-full ml-1 align-middle" />
            )}
          </p>
        );
      })}
    </>
  );
}
