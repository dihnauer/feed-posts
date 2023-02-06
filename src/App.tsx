import './global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dihnauer.png',
      name: 'Diogo Hanauer',
      role: 'Front-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portfolio. 🚀',
      },
      { type: 'link', content: 'dihnauer.github.com' },
    ],
    publishedAt: new Date('2023-01-23 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/dihnauer.png',
      name: 'Diogo H.',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Opaaaa, fala pessoal' },
      {
        type: 'paragraph',
        content: 'Este é outro exemplo de post',
      },
      { type: 'link', content: 'teste-do-app.com' },
    ],
    publishedAt: new Date('2023-01-23 08:13:30'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
