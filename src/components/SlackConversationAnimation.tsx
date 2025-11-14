import { useEffect, useRef, useState } from 'react';

interface Reaction {
  emoji: string;
  count: number;
}

interface Message {
  id: number;
  author: string;
  time: string;
  avatar: string;
  avatarColor: string;
  content: string;
  reactions?: Reaction[];
}

const messages: Message[] = [
  {
    id: 1,
    author: 'Alexander',
    time: 'Monday 9:15 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'Morning team! Just reviewed this week\'s LinkedIn posts. They\'re... fine, but they don\'t sound like me at all.',
    reactions: []
  },
  {
    id: 2,
    author: 'Jessica (Content Lead)',
    time: '9:18 AM',
    avatar: 'J',
    avatarColor: '#e01e5a',
    content: 'Hi Alexander! I understand your concern. Can you give me more specific feedback on what doesn\'t feel right?',
    reactions: []
  },
  {
    id: 3,
    author: 'Alexander',
    time: '9:20 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'It\'s too generic. "5 ways to improve your workflow" — everyone posts that. I need content that shows we actually understand enterprise API architecture.',
    reactions: []
  },
  {
    id: 4,
    author: 'Jessica (Content Lead)',
    time: '9:25 AM',
    avatar: 'J',
    avatarColor: '#e01e5a',
    content: 'Got it! Could you hop on a quick call to walk me through the technical details? Or maybe share some of your recent customer conversations?',
    reactions: []
  },
  {
    id: 5,
    author: 'Alexander',
    time: '9:28 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'I don\'t have time for another call. That\'s literally why I hired you. We\'ve been over this 3 times already.',
    reactions: []
  },
  {
    id: 6,
    author: 'Jessica (Content Lead)',
    time: '9:35 AM',
    avatar: 'J',
    avatarColor: '#e01e5a',
    content: 'I completely understand. Let me revise based on our previous conversations. I\'ll have new drafts by EOD.',
    reactions: []
  },
  {
    id: 7,
    author: 'Alexander',
    time: 'Tuesday 8:45 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'Still waiting on those revised drafts. We\'re supposed to post today.',
    reactions: []
  },
  {
    id: 8,
    author: 'Jessica (Content Lead)',
    time: '8:52 AM',
    avatar: 'J',
    avatarColor: '#e01e5a',
    content: 'I sent them at 6pm yesterday! Let me resend. [Resends 4 LinkedIn posts]',
    reactions: []
  },
  {
    id: 9,
    author: 'Alexander',
    time: '10:15 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'These are better but still not quite right. The technical depth isn\'t there. Can you add more about our caching strategy?',
    reactions: []
  },
  {
    id: 10,
    author: 'Jessica (Content Lead)',
    time: '10:18 AM',
    avatar: 'J',
    avatarColor: '#e01e5a',
    content: 'Absolutely. Would you be able to spend 10 minutes explaining your caching approach? Just so I can capture the technical nuance correctly.',
    reactions: []
  },
  {
    id: 11,
    author: 'Alexander',
    time: '10:22 AM',
    avatar: 'A',
    avatarColor: '#36c5f0',
    content: 'This is taking more time than if I just wrote it myself. I\'m paying $15K/month and I\'m still the bottleneck.',
    reactions: [
      { emoji: '😔', count: 2 }
    ]
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => {
        setShowCursor(true);
        typeText();
      }, 350);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const typeText = () => {
    let i = 0;
    const speed = 15;
    const fullText = message.content;

    const type = () => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else {
        setShowCursor(false);
        setTimeout(onComplete, 200);
      }
    };

    type();
  };

  return (
    <div
      ref={containerRef}
      className={`flex gap-3 mb-4 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div
        className={`w-8 h-8 rounded flex items-center justify-center text-white text-base font-bold flex-shrink-0 transition-all duration-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
        style={{
          backgroundColor: message.avatarColor,
          transitionDelay: '100ms'
        }}
      >
        {message.avatar}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-sm font-bold text-gray-900">{message.author}</span>
          <span className="text-xs text-gray-600">{message.time}</span>
        </div>

        <div className="text-sm text-gray-900 leading-relaxed">
          {text}
          {showCursor && (
            <span className="inline-block w-0.5 h-4 bg-gray-900 ml-0.5 align-text-bottom animate-blink" />
          )}
        </div>

        {message.reactions && message.reactions.length > 0 && !showCursor && (
          <div className="flex gap-1.5 mt-1.5">
            {message.reactions.map((reaction, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl px-2 py-0.5 flex items-center gap-1 text-xs hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-all"
              >
                <span>{reaction.emoji}</span>
                <span>{reaction.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SlackConversationAnimation() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleMessageComplete = () => {
    if (currentMessage < messages.length - 1) {
      const nextMsg = messages[currentMessage + 1];
      const currentMsg = messages[currentMessage];
      const waitTime = nextMsg.author === currentMsg.author ? 600 : 1000;

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
      }, waitTime);
    }
  };

  return (
    <div className="w-full h-full bg-white overflow-hidden flex flex-col">
      {/* Channel Header */}
      <div className="bg-[#522653] px-4 py-2 border-b border-[#3d1a3e] flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-white"># marketing-agency</span>
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-white/70 hover:text-white text-base p-1">🔍</button>
        </div>
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
          />
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="bg-white border border-gray-400 rounded-lg px-3 py-2 flex items-center gap-2">
          <div className="flex-1 text-sm text-gray-600">Message #client-alexander</div>
          <div className="flex gap-2 text-base text-gray-600">
            <span className="cursor-pointer">😊</span>
            <span className="cursor-pointer">📎</span>
            <span className="cursor-pointer">@</span>
          </div>
        </div>
      </div>
    </div>
  );
}
