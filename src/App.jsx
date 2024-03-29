import "./App.css";
import { Article } from "./Components/Article";
import { Navbar } from "./Components/Navbar/Navbar";
import { ArticleId } from "./assets/ArticleListArray";
import { Counter, Searchfield } from "./Components/Counter";

const articles = [
  {
    id: "1234",
    name: "Jaya",
    degree: "bachelor in computers",
  },
  {
    id: "1235",
    name: "JC",
    degree: "Phd in cloud",
  },
];
const articleObject = {
  slug: "Try-to-transmit-the-HTTP-card-maybe-it-will-override-the-multi-byte-hard-drive!-120863",
  title:
    "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
  description:
    "Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel quo. Earum odit rem natus totam atque cumque. Sint dolorem facere non.",
  body: "Sunt excepturi ut dolore fuga.\\nAutem eum maiores aut nihil magnam corporis consectetur sit. Voluptate et quasi optio eos et eveniet culpa et nobis.\\nSint aut sint sequi possimus reiciendis nisi.\\nRerum et omnis et sit doloribus corporis voluptas error.\\nIusto molestiae tenetur necessitatibus dolorem omnis. Libero sed ut architecto.\\nEx itaque et modi aut voluptatem alias quae.\\nModi dolor cupiditate sit.\\nDelectus consectetur nobis aliquid deserunt sint ut et voluptas.\\nCorrupti in labore laborum quod. Ipsa laudantium deserunt. Ut atque harum inventore natus facere sed molestiae.\\nQuia aliquid ut.\\nAnimi sunt rem et sit ullam dolorem ab consequatur modi. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et. Et fuga repellendus magnam dignissimos eius aspernatur rerum. Quo perferendis nesciunt.\\nDolore dolorem porro omnis voluptatibus consequuntur et expedita suscipit et.\\nTempora facere ipsa.\\nDolore accusamus soluta officiis eligendi.\\nEum quaerat neque eum beatae odio. Ad voluptate vel.\\nAut aut dolor. Cupiditate officia voluptatum.\\nTenetur facere eum distinctio animi qui laboriosam.\\nQuod sed voluptatem et cumque est eos.\\nSint id provident suscipit harum odio et.",
  tagList: ["voluptate", "rerum", "ducimus", "hic"],
  createdAt: "2022-12-09T13:46:24.264Z",
  updatedAt: "2022-12-09T13:46:24.264Z",
  favorited: false,
  favoritesCount: 1041,
  author: {
    username: "Anah Benešová",
    bio: "hello bio",
    image: "https://api.realworld.io/images/demo-avatar.png",
    following: false,
  },
};
export default function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Article {...articleObject} />
        <ArticleId />
        <Counter />
        <Searchfield />
      </main>
      <footer>
        <h1> footer</h1>
      </footer>
    </div>
  );
}
