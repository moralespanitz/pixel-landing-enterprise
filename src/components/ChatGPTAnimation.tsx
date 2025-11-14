import { useEffect, useRef, useState } from 'react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  badge?: string;
}

const messages: Message[] = [
  {
    id: 1,
    type: 'user',
    content: 'Write a LinkedIn post about our new API feature that helps developers ship faster'
  },
  {
    id: 2,
    type: 'ai',
    content: '🚀 Exciting News! 🚀\n\nWe\'re thrilled to announce our new API feature that will revolutionize the way developers work!\n\n✨ Key Benefits:\n• Faster deployment times\n• Improved efficiency\n• Better developer experience\n• Seamless integration\n\nReady to take your development to the next level? Check out our latest innovation!\n\n#API #Innovation #DeveloperTools #TechNews',
    badge: 'GENERIC'
  },
  {
    id: 3,
    type: 'user',
    content: 'This sounds like every other tech post. Can you make it more specific to our product?'
  },
  {
    id: 4,
    type: 'ai',
    content: '🎯 Big News for Developers! 🎯\n\nIntroducing our game-changing API feature designed specifically for modern development teams!\n\n💡 Why it matters:\n→ Reduce deployment time significantly\n→ Streamline your workflow\n→ Built for scale\n→ Developer-first approach\n\nJoin thousands of developers already benefiting from this innovation!\n\nLearn more: [link]\n\n#SoftwareDevelopment #DevTools #TechInnovation',
    badge: 'STILL GENERIC'
  },
  {
    id: 5,
    type: 'user',
    content: 'This still doesn\'t explain WHAT our API does or WHY it\'s different. It could be any product.'
  },
  {
    id: 6,
    type: 'ai',
    content: 'I apologize for the generic approach. To create truly specific content, I would need more details about:\n\n• The exact technical implementation of your API\n• Specific use cases and customer pain points\n• What makes it unique compared to competitors\n• Your company\'s voice and positioning\n• Recent customer wins or testimonials\n\nCould you provide these details so I can create more targeted content?',
    badge: 'NEEDS YOUR INPUT'
  }
];

interface AnimatedMessageProps {
  message: Message;
  delay: number;
  onComplete: () => void;
  showTypingFirst?: boolean;
}

function AnimatedMessage({ message, delay, onComplete, showTypingFirst }: AnimatedMessageProps) {
  const [visible, setVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(showTypingFirst || false);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (showTypingFirst) {
        setShowTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setShowTyping(false);
      }

      setVisible(true);
      setTimeout(() => {
        setShowCursor(true);
        typeText();
      }, 400);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, showTypingFirst]);

  const typeText = () => {
    let i = 0;
    const speed = 30;
    const fullText = message.content;

    const type = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else {
        setShowCursor(false);
        setTimeout(onComplete, message.type === 'user' ? 800 : 1200);
      }
    };

    type();
  };

  const getBadgeClass = () => {
    if (!message.badge) return '';
    if (message.badge.includes('GENERIC') || message.badge.includes('STILL')) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-red-100 text-red-800';
  };

  return (
    <>
      {showTyping && (
        <div className="mb-4 flex flex-col gap-2 opacity-100">
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[#10a37f] to-[#1a7f64] flex items-center justify-center text-white text-sm flex-shrink-0">
              ✨
            </div>
            <div className="flex gap-1 py-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-[typing_1.4s_infinite]" />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-[typing_1.4s_infinite_0.2s]" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-[typing_1.4s_infinite_0.4s]" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}

      <div
        className={`mb-4 flex flex-col gap-2 transition-all duration-500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="flex gap-3 items-start">
          {message.type === 'user' ? (
            <div className="w-7 h-7 rounded bg-[#19c37d] flex items-center justify-center text-white text-sm flex-shrink-0">
              👤
            </div>
          ) : (
            <div className="w-7 h-7 rounded bg-gradient-to-br from-[#10a37f] to-[#1a7f64] flex items-center justify-center text-white text-sm flex-shrink-0">
              ✨
            </div>
          )}
          <div className="flex-1 text-gray-900 text-sm leading-relaxed whitespace-pre-line">
            {text}
            {showCursor && (
              <span className="inline-block w-0.5 h-5 bg-gray-900 ml-0.5 align-text-bottom animate-blink" />
            )}
          </div>
        </div>

        {message.badge && !showCursor && (
          <div className="ml-10">
            <span className={`inline-block ${getBadgeClass()} px-2 py-1 rounded-full text-xs font-semibold`}>
              {message.badge}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default function ChatGPTAnimation() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleMessageComplete = () => {
    if (currentMessage < messages.length - 1) {
      setTimeout(() => {
        setCurrentMessage(prev => prev + 1);

        // Scroll to bottom
        if (messagesContainerRef.current) {
          setTimeout(() => {
            messagesContainerRef.current?.scrollTo({
              top: messagesContainerRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, 0);
    }
  };

  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-gray-900 rounded" />
            <div className="w-5 h-0.5 bg-gray-900 rounded" />
            <div className="w-5 h-0.5 bg-gray-900 rounded" />
          </div>
          <div className="text-sm font-medium text-gray-900">Content Marketing</div>
        </div>
        <button className="text-gray-900 text-lg p-1">✏️</button>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 bg-white px-4 py-3 overflow-y-auto min-h-0"
        style={{ maxHeight: '100%' }}
      >
        {messages.slice(0, currentMessage + 1).map((msg, index) => (
          <AnimatedMessage
            key={msg.id}
            message={msg}
            delay={index === currentMessage ? 0 : 0}
            onComplete={index === currentMessage ? handleMessageComplete : () => {}}
            showTypingFirst={index === currentMessage && msg.type === 'ai'}
          />
        ))}
      </div>

      {/* Input */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 flex-shrink-0">
        <div className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 flex items-center gap-2">
          <div className="flex gap-2 text-base text-gray-500">
            <span>➕</span>
            <span>⚙️</span>
          </div>
          <div className="flex-1 text-sm text-gray-500">Ask anything</div>
          <div className="flex gap-2 text-base text-gray-500">
            <span>🎤</span>
            <span>🎵</span>
          </div>
        </div>
      </div>
    </div>
  );
}
