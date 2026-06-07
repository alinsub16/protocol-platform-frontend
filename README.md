# Protocol Discussion Platform Frontend

A modern discussion platform frontend built with React, TypeScript, Vite, React Router, and TanStack Query.

Users can browse protocols, read reviews, participate in discussion threads, comment on conversations, and vote on content.


## Developed with:

* React
* TypeScript
* Vite
* TanStack Query
* Tailwind CSS
* React Router

---

## Features

### Protocols

* Browse available protocols
* View protocol details
* Search protocols
* Explore protocol-related discussions

### Reviews

* View protocol reviews
* Display reviewer information
* Show ratings and feedback
* Paginated review listing

### Threads

* Browse threads by protocol
* View thread details
* Participate in discussions
* Thread voting support

### Comments

* Create comments
* Reply to comments
* Nested comment structure
* Threaded discussions

### Voting

* Vote on threads
* Vote on comments
* Live vote count updates

### Search

* Search protocols
* Fast search experience powered by Typesense

---

## Tech Stack

### Core

* React
* TypeScript
* Vite

### Routing

* React Router DOM

### Data Fetching

* TanStack Query (React Query)
* Axios

### Styling

* Tailwind CSS

### Development Tools

* ESLint
* TypeScript

---

## Project Structure

```text
src/
├── api/
│
├── components/
│
├── features/
│   ├── protocols/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── types/
│   │
│   ├── reviews/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types/
│   │
│   ├── threads/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── types/
│   │
│   ├── comments/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types/
│   │
│   └── votes/
│       ├── api/
│       ├── components/
│       └── hooks/
│
├── layouts/
├── pages/
├── routes/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/alinsub16/protocol-platform-frontend.git
```

### Navigate to the Project

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_URL=http://localhost:8000/api
```

Example Axios configuration:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

---

## Routing

Example routes used in the application:

```text
/
├── /protocols
├── /protocols/:id
├── /threads/:id
```

---

## API Integration

The frontend communicates with the backend through feature-specific API modules.

Examples:

### Protocols

```ts
ProtocolApi.getAll();
ProtocolApi.getById(id);
```

### Reviews

```ts
ReviewApi.getByProtocol(protocolId);
```

### Threads

```ts
ThreadApi.getByProtocol(protocolId);
ThreadApi.getById(threadId);
```

### Comments

```ts
CommentApi.getByThread(threadId);
CommentApi.create(payload);
```

### Votes

```ts
VoteApi.vote(payload);
VoteApi.unvote(payload);
```

---

## State Management

Server state is managed using TanStack Query.

Example:

```ts
const { data, isLoading } = useQuery({
  queryKey: ["thread", threadId],
  queryFn: () => ThreadApi.getById(threadId),
});
```

Benefits:

* Automatic caching
* Background refetching
* Loading and error states
* Query invalidation
* Optimistic update support

---

## Key Components

### Protocol Components

* ProtocolCard
* ProtocolList
* ProtocolDetailPage

### Review Components

* ReviewCard
* ReviewList

### Thread Components

* ThreadCard
* ThreadDetailPage

### Comment Components

* CommentItem
* CommentReplyForm

### Vote Components

* VoteButtons

---

## Development Practices

### Feature-Based Architecture

The application follows a feature-based folder structure:

```text
features/
├── protocols/
├── reviews/
├── threads/
├── comments/
└── votes/
```

Benefits:

* Better scalability
* Easier maintenance
* Clear separation of concerns
* Improved developer experience

---


## Author

Christopher Alinsub
