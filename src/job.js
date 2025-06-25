import axios from 'axios'
import parser from './parser.js'
import renderPosts from './render_posts.js'

async function update(links, state) {
  for (const link of links) {
    const response = await axios.get('https://allorigins.hexlet.app/get?url=' + link)
    const contents = parser(response.data.contents)
    renderPosts(contents.posts, state.actualLinks)
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
