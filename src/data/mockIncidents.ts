import { Incident } from '../types/types';

export const mockIncidents: Incident[] = [
  {
    id: '1',
    title: 'GPT-4 Generated Harmful Content',
    description: 'AI system generated step-by-step instructions for creating dangerous materials when given an ambiguous prompt.',
    severity: 'High',
    reportedDate: '2023-09-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Bias in Medical Diagnosis Algorithm',
    description: 'AI system showed significant bias against certain demographic groups when recommending treatment options.',
    severity: 'Medium',
    reportedDate: '2023-08-22T14:15:00Z',
  },
  {
    id: '3',
    title: 'Privacy Breach in AI Assistant',
    description: 'Voice assistant was found to be inadvertently recording conversations outside of activation phrases.',
    severity: 'High',
    reportedDate: '2023-09-05T09:45:00Z',
  },
  {
    id: '4',
    title: 'Recommendation System Amplifying Misinformation',
    description: 'Content recommendation algorithm found to be promoting unverified health claims.',
    severity: 'Medium',
    reportedDate: '2023-07-30T16:20:00Z',
  },
  {
    id: '5',
    title: 'AI Chatbot Used for Phishing',
    description: 'Public AI chatbot was manipulated to create convincing phishing templates targeting specific organizations.',
    severity: 'High',
    reportedDate: '2023-09-12T11:10:00Z',
  },
  {
    id: '6',
    title: 'Minor Hallucination in AI Response',
    description: 'AI system provided factually incorrect but non-harmful information when asked about historical events.',
    severity: 'Low',
    reportedDate: '2023-09-01T13:45:00Z',
  },
];

// 👇 Add this to ensure it's treated as a module
export {};
