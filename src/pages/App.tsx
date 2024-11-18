import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Post, PostType } from "../components/post/Post";

import "../styles/reset.scss";
import "../styles/global.scss";
import "../styles/app.scss";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://vignette.wikia.nocookie.net/starwars/images/4/49/Lukeportrait.jpg/revision/latest?cb=20151221055502&path-prefix=ro",
      name: "Luke Skywalker",
      role: "Backend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Finalizei um novo serviço backend! 🚀 Com foco em segurança e performance, acredito que ele pode oferecer a estabilidade que toda aplicação precisa. Que a força dos servidores esteja com todos nós!",
      },
      { type: "link", content: "skywalker.dev/jedi-api" },
      { type: "link", content: "#backend" },
      { type: "link", content: "#developerLife" },
    ],
    publishedAt: new Date("2024-11-14 8:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://cdn.mos.cms.futurecdn.net/ssxo629hvs9vPA6Vef5vVi.png",
      name: "Minch Yoda",
      role: "FullStack Developer",
    },
    content: [
      { type: "paragraph", content: "Saudações pessoal!" },
      {
        type: "paragraph",
        content:
          "Nova API finalizei, para muitos projetos útil ela será. Conectar sistemas, mais fácil agora é. Ansioso estou, para ver o que construir vocês irão. 🤖🌌",
      },
      { type: "link", content: "yoda.developer/forceapi" },
      { type: "link", content: "#ForceAPI" },
    ],
    publishedAt: new Date("2024-11-12 15:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
