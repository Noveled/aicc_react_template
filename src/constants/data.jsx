import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

import ddi01 from '../assets/features-pictures/ddi01.gif';
import ddi02 from '../assets/features-pictures/ddi02.PNG';

import mpc01 from '../assets/features-pictures/mpc01.jpg';
import mpc02 from '../assets/features-pictures/mpc02.PNG';
import mpc03 from '../assets/features-pictures/mpc03.PNG';

import bt01 from '../assets/features-pictures/bt01.png';
import bt02 from '../assets/features-pictures/bt02.png';

import rtp01 from '../assets/features-pictures/rtp01.gif';
import rtp02 from '../assets/features-pictures/rtp02.png';

import ct01 from '../assets/features-pictures/ct01.gif';
import ct02 from '../assets/features-pictures/ct02.PNG';

import ad01 from '../assets/features-pictures/ad01.png';
import ad02 from '../assets/features-pictures/ad02.png';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  // { label: 'Workflow', to: '/workflow' },
  // { label: 'Pricing', to: 'pricing' },
  // { label: 'Testimonials', to: 'testimonials' },
];

export const authLink = [
  { label: 'Sign In', to: '/signin' },
  { label: 'Sign Up', to: '/signup' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: '편리한 사용자 인터페이스',
    description:
      'Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.',
  },
  {
    icon: <Fingerprint />,
    text: '멀티 플랫폼 확장성',
    description:
      'Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.',
  },
  {
    icon: <ShieldHalf />,
    text: '깔맞춤 탬플릿',
    description:
      'Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.',
  },
  {
    icon: <BatteryCharging />,
    text: '실시간 리뷰',
    description:
      'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.',
  },
  {
    icon: <PlugZap />,
    text: '견고한 협업 툴',
    description:
      'Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.',
  },
  {
    icon: <GlobeLock />,
    text: '분석을 위한 대시보드',
    description:
      'Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.',
  },
];

export const checklistItems = [
  {
    title: '쉬운 코드 병합',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: '안전한 코드 검토',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: 'AI로 시간 절약',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
  {
    title: '최단시간 코드 공유',
    description:
      'Track the performance of your VR apps and gain insights into user behavior.',
  },
];

export const pricingOptions = [
  {
    title: 'Free',
    price: '$0',
    features: [
      'Private board sharing',
      '5 Gb Storage',
      'Web Analytics',
      'Private Mode',
    ],
    link: 'free',
  },
  {
    title: 'Pro',
    price: '$10',
    features: [
      'Private board sharing',
      '10 Gb Storage',
      'Web Analytics (Advance)',
      'Private Mode',
    ],
    link: 'Pro',
  },
  {
    title: 'Enterprise',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
    link: 'enterprise',
  },
];


export const resourcesLinks = [
  { to: '/Getting-Started', text: 'Getting Started' },
  { to: '/Documentation', text: 'Documentation' },
  { to: '/Tutorials', text: 'Tutorials' },
  { to: '/API-Reference', text: 'API Reference' },
  { to: '/Community-Forums', text: 'Community Forums' },
];

export const platformLinks = [
  { to: 'Features', text: 'Features' },
  { to: 'Supported-Devices', text: 'Supported Devices' },
  { to: 'System-Requirements', text: 'System Requirements' },
  { to: 'Downloads', text: 'Downloads' },
  { to: 'Release-Notes', text: 'Release Notes' },
];

export const communityLinks = [
  { to: 'Events', text: 'Events' },
  { to: 'Meetups', text: 'Meetups' },
  { to: 'Conferences', text: 'Conferences' },
  { to: 'Hackathons', text: 'Hackathons' },
  { to: 'Jobs', text: 'Jobs' },
];

export const heroLinks = [
  { to: 'start-for-free', text: 'start for free' },
  { to: 'documentation', text: 'documentation' },
];


export const ddiDetails = [
  { 
    title: '• What is Drag-and-Drop Interface', 
    image: ddi01,
    alt: 'Drag-and-Drop Interface',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: ddi02,
    alt: 'Useful Interface',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
];

export const mpcDetails = [
  { 
    title: '• What is Multi-Platform Compatibility', 
    image: mpc01,
    alt: 'Multi-Platform Compatibility',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: mpc02,
    alt: 'Useful Development Tools',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
  { 
    title: '• Where can I get some?', 
    image: mpc03,
    alt: 'Useful Interface',
    description: "- There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", 
  },
];

export const btDetails = [
  { 
    title: '• Built-in Templates', 
    image: bt01,
    alt: 'Multi-Platform Compatibility',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: bt02,
    alt: 'Useful Development Tools',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
];

export const rtpDetails = [
  { 
    title: '• Real-Time Preview', 
    image: rtp01,
    alt: 'Real-Time Preview',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: rtp02,
    alt: 'Useful Development Tools',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
];

export const ctDetails = [
  { 
    title: '• Collaboration Tools', 
    image: ct01,
    alt: 'Collaboration Tools',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: ct02,
    alt: 'Useful Development Tools',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
];

export const adDetails = [
  { 
    title: '• Analytics Dashboard', 
    image: ad01,
    alt: 'Collaboration Tools',
    description: "- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 
  },
  { 
    title: '• Why do we use it?', 
    image: ad02,
    alt: 'Useful Development Tools',
    description: "- It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", 
  },
];