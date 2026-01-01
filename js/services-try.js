const observerOptions = {
  root: null,
  // Adjust these values: Top -150px, Bottom -50%
  // This ensures only one section is "active" at a time
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id')
    const sidebarLink = document.querySelector(
      `.sidebar-service-title[href="#${id}"]`
    )

    if (entry.isIntersecting && sidebarLink) {
      // Remove active class from all
      document.querySelectorAll('.sidebar-service-title').forEach(link => {
        link.classList.remove('active')
      })
      // Add to the one currently intersecting the "window"
      sidebarLink.classList.add('active')
    }
  })
}, observerOptions)

document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card)
})

// view JS

// view Data (converted from your constants)
const viewItems = document.querySelectorAll('.view-item')

viewItems.forEach(item => {
  const button = item.querySelector('.view-button')

  button.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open')

    // 1. Close all items (removes 'open' from everything)
    viewItems.forEach(i => i.classList.remove('open'))

    // 2. If the clicked item wasn't open before, open it now
    if (!wasOpen) {
      item.classList.add('open')
    }
  })
})
