# Meeting AI — Case Study

## SEO

| Field | Value |
| --- | --- |
| Target title | Meeting AI \| Mohammad Haroon Portfolio |
| Meta description | Meeting AI by Mohammad Haroon: WebRTC meetings, Whisper transcription, GPT notes, task extraction, and org-scoped collaboration with React, Node.js, and Supabase. |
| Canonical | https://www.haroon.live/projects/meeting-ai |
| Primary keywords | Meeting AI, Mohammad Haroon, AI meeting transcription, WebRTC meeting app |
| Secondary keywords | Whisper transcription, GPT meeting notes, Socket.io signaling, Supabase multi-tenant |

## Overview

Meeting AI is a production-grade full-stack platform that automates the end-to-end meeting workflow for remote and hybrid teams. It combines live WebRTC peer-to-peer conferencing, high-fidelity audio recording, OpenAI Whisper transcription with English translation, GPT-powered structured notes, automated task assignment, and a contextual AI chatbot — all behind organization-based access control. Teams can upload pre-recorded audio, run live collaborative meetings with automatic post-meeting processing, or capture Google Meet audio through a Chrome extension, building a searchable repository of meeting insights without manual note-taking.

## Frontend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| React 19 | Confirmed | Owner case study on digowl.me |
| Vite | Observed + confirmed | Live `meetingai.dev` serves `/assets/index-*.js`; digowl lists Vite |
| Tailwind CSS | Confirmed | digowl.me |
| Socket.io Client | Confirmed | Live rooms + signaling |
| RecordRTC | Confirmed | Host/tab audio capture |
| Framer Motion, Three.js | Confirmed | digowl.me |
| Axios | Confirmed | digowl.me |
| Chrome MV3 extension | Confirmed | Google Meet tab capture via offscreen document |

## Backend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| Node.js + Express 5 | Confirmed | digowl.me |
| Socket.io | Confirmed | WebRTC signaling (SDP/ICE) |
| OpenAI Whisper (`whisper-1`) | Confirmed | Transcription + translation |
| GPT-4o mini | Confirmed | Notes, tasks, contextual chat |
| Supabase Auth + PostgreSQL + RLS | Confirmed | Multi-tenant access |
| Supabase Storage | Confirmed | Audio uploads |
| Multer, Nodemailer, Nanoid | Confirmed | digowl.me |
| Vercel (frontend) / Render (backend) | Confirmed | Deployment |

## Challenges and solutions

1. **WebRTC peer connection management** — Reliable P2P across NATs and multi-participant rooms. Solution: room-based Socket.io signaling with offer/answer/ICE routing, RNNoise WASM noise suppression, and a Web Audio mixer for host-side recording.
2. **Chrome MV3 recording limits** — Service workers cannot capture Meet tab audio directly. Solution: `getMediaStreamId` in the service worker plus an offscreen document running RecordRTC, with base64 transfer for upload.
3. **Multi-language meetings** — Mixed languages (e.g. Urdu + English) need readable English output. Solution: Whisper translations API followed by GPT-4o mini sentence correction.
4. **Contextual chat without hallucination** — LLM answers must stay grounded in the meeting. Solution: `chatWithContext()` passes transcript, notes, tasks, and prior chat history before each GPT call.

## Role / contribution

Full Stack Developer — React frontend, Node.js/Express APIs, WebRTC signaling, Chrome extension, Supabase multi-tenancy, and LLM pipeline integration.

## Links

- Live: https://meetingai.dev
- digowl case study: https://www.devowl.me/project/meet-ai
- Portfolio: https://www.haroon.live/projects/meeting-ai

## Sources and confidence

Primary narrative and stack from digowl.me Meeting AI case study (captured Oct 2026). Live host observed on Vercel with Vite asset paths. Groq was listed on an earlier portfolio draft and is **not** used in the digowl source of truth.
