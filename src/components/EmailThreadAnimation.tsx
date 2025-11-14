import { useEffect, useRef, useState } from 'react';

interface Message {
  id: number;
  sender: string;
  avatar: string;
  avatarColor: string;
  date: string;
  to: string;
  content: string;
}

const messages: Message[] = [
  {
    id: 1,
    sender: 'Sarah (Ghostwriter)',
    avatar: 'S',
    avatarColor: '#10B981',
    date: '15 Jan',
    to: 'to me',
    content: 'Hi Alex! Here are this week\'s LinkedIn posts. Let me know what you think 😊'
  },
  {
    id: 2,
    sender: 'me',
    avatar: 'A',
    avatarColor: '#3B82F6',
    date: '15 Jan',
    to: 'to Sarah',
    content: 'These are... generic. This doesn\'t sound like me at all. We\'ve talked about our API architecture 3 times now.'
  },
  {
    id: 3,
    sender: 'Sarah (Ghostwriter)',
    avatar: 'S',
    avatarColor: '#10B981',
    date: '16 Jan',
    to: 'to me',
    content: 'Got it! I\'ll revise. Can you send me more context on the technical details?'
  },
  {
    id: 4,
    sender: 'me',
    avatar: 'A',
    avatarColor: '#3B82F6',
    date: '16 Jan',
    to: 'to Sarah',
    content: 'I don\'t have time to explain this again. That\'s why I hired you. This is taking more time than writing it myself.'
  }
];

interface AnimatedMessageProps {
  message: Message;
  delay: number;
  onComplete: () => void;
}

function AnimatedMessage({ message, delay, onComplete }: AnimatedMessageProps) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        setShowCursor(true);
        typeText();
      }, 500);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const typeText = () => {
    let i = 0;
    const speed = 20;
    const fullText = message.content;

    const type = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else {
        setShowCursor(false);
        setTimeout(onComplete, 300);
      }
    };

    type();
  };

  return (
    <div
      className={`border-b border-gray-100 py-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
      }`}
    >
      <div className="flex gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-semibold flex-shrink-0 transition-all duration-300 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            backgroundColor: message.avatarColor,
            transitionDelay: '200ms'
          }}
        >
          {message.avatar}
        </div>

        <div className="flex-1">
          <div
            className={`flex justify-between items-start mb-1 transition-all duration-400 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{message.sender}</h3>
              <p className="text-xs text-gray-500">{message.to} ▼</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{message.date}</span>
              <button className="p-0.5 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                </svg>
              </button>
              <button className="p-0.5 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="1.5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <circle cx="12" cy="19" r="1.5"/>
                </svg>
              </button>
            </div>
          </div>

          <div ref={contentRef} className="text-gray-900 text-sm leading-relaxed whitespace-pre-line">
            {text}
            {showCursor && (
              <span className="inline-block w-0.5 h-5 bg-gray-900 ml-1 animate-blink" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmailThreadAnimation() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  const handleMessageComplete = () => {
    if (currentMessage < messages.length - 1) {
      setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
      }, 900);
    } else {
      setTimeout(() => {
        setShowButtons(true);
      }, 500);
    }
  };

  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="bg-white px-3 py-2 flex justify-between items-center border-b border-gray-200 flex-shrink-0">
        <button className="p-1 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="1.5"/>
              <circle cx="12" cy="12" r="1.5"/>
              <circle cx="12" cy="19" r="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Email Thread */}
      <div className="flex-1 overflow-y-auto bg-white px-3 py-2 min-h-0">
        {messages.slice(0, currentMessage + 1).map((msg, index) => (
          <AnimatedMessage
            key={msg.id}
            message={msg}
            delay={index === currentMessage ? 0 : 0}
            onComplete={index === currentMessage ? handleMessageComplete : () => {}}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div
        className={`bg-white px-3 py-2 flex gap-2 border-t border-gray-200 transition-all duration-500 flex-shrink-0 ${
          showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button className="flex-1 border-2 border-gray-300 rounded-full py-2 px-3 flex items-center justify-center gap-1 text-sm font-medium hover:bg-gray-50">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
          </svg>
          Reply
        </button>
        <button className="flex-1 border-2 border-gray-300 rounded-full py-2 px-3 flex items-center justify-center gap-1 text-sm font-medium hover:bg-gray-50">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"/>
          </svg>
          Forward
        </button>
      </div>

      {/* Home Indicator */}
      <div className="bg-white pb-1 flex justify-center flex-shrink-0">
        <div className="w-28 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
}
