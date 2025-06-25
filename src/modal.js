import { Modal } from 'bootstrap'

export default (btn, receivePost) => {
  const modalEl = document.getElementById('modal')
  const modal = new Modal(modalEl)

  const h5 = modalEl.querySelector('h5')
  const modalBody = modalEl.querySelector('.modal-body')
  const a = modalEl.querySelector('a')
  const modalFooter = modalEl.querySelector('.modal-footer')
  const closeBtn = modalFooter.querySelector('button')

  btn.addEventListener('click', () => {
    h5.textContent = receivePost.title
    modalBody.textContent = receivePost.description
    a.href = receivePost.link
    console.log(btn.id)
    const aPost = document.getElementById(`${btn.id}`)
    aPost.classList.remove('fw-bold', 'fw-normal')
    modal.show()
  })

  closeBtn.addEventListener('click', () => {
    modal.hide()
  })
}
