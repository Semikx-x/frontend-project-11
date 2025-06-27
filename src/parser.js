export default (data, i18n) => {
  try {
    const parser = new DOMParser()
    let i = 1
    const doc = parser.parseFromString(data, 'application/xml')
    const docTitle = doc.querySelector('title')
    const description = doc.querySelector('description')
    const descText = description.textContent
    const feed = docTitle.textContent
    const news = {
      feed: feed,
      description: descText,
      posts: [],
    }
    const items = doc.querySelectorAll('item')
    for (const item of items) {
      const title = item.querySelector('title')
      const link = item.querySelector('link')
      const description = item.querySelector('description')
      const post = {
        id: i,
        title: title.textContent,
        link: link.textContent,
        description: description.textContent,
      }
      news.posts.push(post)
      i += 1
    }
    return news
  }
  // eslint-disable-next-line no-unused-vars
  catch (_) {
    throw new Error(i18n.t('RssNull'))
  }
}
