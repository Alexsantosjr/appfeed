import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/alexsantosjr.png",
      name: "Alex Santos",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera aoba 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "Link", content: "ane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-11 08:13:10"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alexsantosjr.png",
      name: "Alex Santos",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "Link", content: "ane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-12 08:13:10"),
  },
];

export function App() {
  return (
    <div>
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
    </div>
  );
}
