import parser from './parser.js'
import renderPosts from './render_posts.js'
import zapros from './zapros.js'

async function update(links, state, i18n) {
  for (const link of links) {
    const response = await zapros(link)
    const contents = parser(response.data.contents)
    renderPosts(contents.posts, state.actualLinks, i18n)
    contents.posts.forEach(post => state.actualLinks.add(post.link))
  }
}

const timer = async () => new Promise(res => setTimeout(res, 5001))

export default async (links, state) => {
  while (true) {
    await timer()
    update(links, state)
  }
}
