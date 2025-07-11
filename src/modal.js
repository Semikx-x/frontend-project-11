import { Modal } from 'bootstrap'

export default (btn, receivePost) => {
  const modalEl = document.getElementById('modal')
  const modal = new Modal(modalEl)

  const xBtn = modalEl.querySelector('#X')
  const h5 = modalEl.querySelector('h5')
  const modalBody = modalEl.querySelector('.modal-body')
  const a = modalEl.querySelector('#a')
  const modalFooter = modalEl.querySelector('.modal-footer')
  const closeBtn = modalFooter.querySelector('#clsBtn')

  btn.addEventListener('click', () => {
    h5.textContent = receivePost.title
    modalBody.textContent = receivePost.description
    a.href = receivePost.link
    const aPost = document.getElementById(`${btn.id}`)
    aPost.classList.remove('fw-bold', 'fw-normal')
    modal.show()
  })

  closeBtn.addEventListener('click', () => {
    modal.hide()
  })

  xBtn.addEventListener('click', () => {
    modal.hide()
  })
}
