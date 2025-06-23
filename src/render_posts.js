export default (obj) => {
  const ul = document.querySelector('#postUl')
  for (const post of obj.posts) {
    const li = document.createElement('li')
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0')
    const a = document.createElement('a')
    a.href = post.link
    a.textContent = post.title
    ul.prepend(li)
    li.prepend(a)
  }
}
