import { MessageProps, ChatMessageProps } from './types';

export const inboxMessages: MessageProps[] = [
  {
    sender: "Alice Smith",
    time: "1 min ago",
    subject: "Re: Project Update",
    content: "A SaaS (Software as a Service) platform offers cloud-based software solutions, accessible via the internet. Businesses and individuals can use it without managing underlying infrastructure, making it cost-effective and easy to deploy. SaaS services cover various applications like customer relationship management, project management, and data analytics, providing flexibility, scalability, and automatic updates.",
    tags: [
      { text: "Project", variant: "primary" },
      { text: "Work", variant: "secondary" }
    ],
    lastMessage: '',
    hasUnread: false
  },
  {
    sender: "William Smith",
    time: "2 days ago",
    subject: "Meeting Tomorrow",
    content: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
    tags: [
      { text: "Meeting", variant: "primary" },
      { text: "Work", variant: "secondary" }
    ],
    lastMessage: '',
    hasUnread: false
  },
  {
    sender: "Bob Johnson",
    time: "2 days ago",
    subject: "Weekend Plans",
    content: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.",
    tags: [
      { text: "Weekend", variant: "primary" },
      { text: "Work", variant: "tertiary" }
    ],
    lastMessage: '',
    hasUnread: false
  },
  {
    sender: "Emily Davis",
    time: "3 days ago",
    subject: "Re: Question about Budget",
    content: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources. I've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.",
    tags: [
      { text: "Budget", variant: "primary" },
      { text: "About", variant: "secondary" },
      { text: "Work", variant: "tertiary" }
    ],
    hasUnread: true,
    lastMessage: ''
  }
];

export const chatMessages: ChatMessageProps[] = [
  {
    sender: "alice",
    message: "hjdk khkkjd kefjq kqfjql kqhhqkj\nqlmjf",
    time: "19:23",
    isUser: false
  },
  {
    sender: "You",
    message: "hjdk khkkjd kefjq kqfjql kqhhqkj\nqlmjf",
    time: "19:23",
    isUser: true
  },
  {
    sender: "alice",
    message: "hjdk khkkjd kefjq kqfjql kqhhqkj\nqlmjf",
    time: "19:23",
    isUser: false
  },
  {
    sender: "You",
    message: "hjdk khkkjd kefjq kqfjql kqhhqkj\nqlmjf",
    time: "19:23",
    isUser: true
  }
];