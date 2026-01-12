import React from 'react';

export type ContentType = 'FRAGMENT' | 'POEM' | 'EVENT' | 'WORK' | 'ORACLE' | 'MUSE' | 'LOCATION';

export enum SectionType {
  BIOGRAPHY = 'BIOGRAPHY',
  POETRY = 'POETRY',
  FIUME = 'FIUME',
  VITTORIALE = 'VITTORIALE',
  ORACLE = 'ORACLE'
}

export interface Fragment {
  id: string;
  label: string;
  type: ContentType;
  x: number; // 0-100%
  y: number; // 0-100%
  scale: number;
  rotation: number;
  era?: string; // New: Chronological Era label
  // Rich content support
  content?: string | string[]; // String for fragments, array for stanzas
  meta?: string; // Year, Location, or Subtitle
  image?: string;
  details?: {
    date?: string;
    location?: string;
    context?: string;
  };
  // Critical Analysis / Exegesis
  analysis?: {
    title: string;
    paragraphs: string[];
  };
  // Specific for LOCATION type
  gallery?: {
    title: string;
    description: string;
    image: string;
  }[];
}

export interface ManifestoLayer {
  title: string;
  subtitle: string;
  textBlocks: string[];
  visualElement?: React.ReactNode;
}