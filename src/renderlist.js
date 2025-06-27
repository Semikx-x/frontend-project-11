export default (obj) => {
  const container1 = document.querySelector('#posts')
  const container2 = document.querySelector('#feeds')
  if (container2.hasChildNodes()) {
    return
  }
  const ulPosts = document.createElement('ul')
  const ulFeeds = document.createElement('ul')
  ulFeeds.classList.add('list-group', 'border-0', 'rounded-0')
  ulPosts.id = 'postUl'
  ulPosts.classList.add('list-group', 'border-0', 'rounded-0')
  container1.prepend(ulPosts)
  container2.prepend(ulFeeds)
  const li = document.createElement('li')
  li.classList.add('list-group-item', 'border-0', 'border-end-0')
  const p = document.createElement('p')
  p.classList.add('m-0', 'small', 'text-black-50')
  p.textContent = obj.description
  const h = document.createElement('h3')
  h.classList.add('h6', 'm-0')
  h.textContent = obj.feed
  ulFeeds.prepend(li)
  li.prepend(h)
  li.append(p)
}
