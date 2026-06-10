const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const schedule = [
  {
    type: 'talk',
    time: '10:00 AM - 11:00 AM',
    title: 'The Future of AI in Web Development',
    speakers: ['Sarah Chen'],
    categories: ['AI', 'Frontend'],
    duration: '60 min',
    description: 'Explore how generative AI is reshaping the way we build and maintain modern web applications.'
  },
  {
    type: 'transition',
    time: '11:00 AM - 11:10 AM',
    title: 'Transition Break',
    duration: '10 min'
  },
  {
    type: 'talk',
    time: '11:10 AM - 12:10 PM',
    title: 'Mastering Rust for System Tools',
    speakers: ['Alex Rivers'],
    categories: ['Rust', 'Systems'],
    duration: '60 min',
    description: 'A deep dive into building high-performance, memory-safe CLI tools using the Rust programming language.'
  },
  {
    type: 'transition',
    time: '12:10 PM - 12:20 PM',
    title: 'Transition Break',
    duration: '10 min'
  },
  {
    type: 'talk',
    time: '12:20 PM - 1:20 PM',
    title: 'Scalable Microservices with Go',
    speakers: ['Jordan Smith', 'Maria Garcia'],
    categories: ['Go', 'Backend', 'Microservices'],
    duration: '60 min',
    description: 'Learn best practices for designing and deploying resilient microservices at scale using Go and Kubernetes.'
  },
  {
    type: 'lunch',
    time: '1:20 PM - 2:20 PM',
    title: 'Lunch Break',
    duration: '60 min'
  },
  {
    type: 'talk',
    time: '2:20 PM - 3:20 PM',
    title: 'Modern CSS Architectures',
    speakers: ['Elena Frost'],
    categories: ['CSS', 'Design Systems'],
    duration: '60 min',
    description: 'Moving beyond Tailwind: how to use Container Queries, Layers, and Scope to build maintainable styles.'
  },
  {
    type: 'transition',
    time: '3:20 PM - 3:30 PM',
    title: 'Transition Break',
    duration: '10 min'
  },
  {
    type: 'talk',
    time: '3:30 PM - 4:30 PM',
    title: 'PostgreSQL Performance Tuning',
    speakers: ['David Miller'],
    categories: ['Database', 'SQL'],
    duration: '60 min',
    description: 'Understand query planning, indexing strategies, and locking mechanisms to speed up your database workloads.'
  },
  {
    type: 'transition',
    time: '4:30 PM - 4:40 PM',
    title: 'Transition Break',
    duration: '10 min'
  },
  {
    type: 'talk',
    time: '4:40 PM - 5:40 PM',
    title: 'Securing the Software Supply Chain',
    speakers: ['Kim Nguyen'],
    categories: ['Security', 'DevOps'],
    duration: '60 min',
    description: 'Strategies for protecting your dependencies and build pipelines against modern cyber threats.'
  }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/schedule', (req, res) => {
  res.json(schedule);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
