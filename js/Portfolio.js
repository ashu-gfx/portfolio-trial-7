const portfolioItems = [
  {
    id: 'p1',
    title: 'MAGAZINE DESIGN',
    category: 'Prints design Case Study',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292180/p1_vomkzy.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291734/p1_fuze5a.mp4', // Example video
    tags: ['Figma', 'Photoshop', 'Illustrator', 'Adobe Indesign'],
    link: 'https://www.imagesmaller.com/' // Added link
  },
  ,
  {
    id: 'p2',
    title: '3D Product Animation Commercial',
    category: 'Blender 3D',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292187/p2_adncpq.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291704/p2_wrli6k.mp4',
    tags: ['Blender', 'Illustrator']
  },
  {
    id: 'p3',
    title: '3D CAR Animated Landing Page',
    category: 'UI UX Case Study',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292179/p3_z7fld1.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291705/p3_x9trul.mp4',
    tags: ['Figma', 'Photoshop', 'Illustrator', 'Spline']
  },
  {
    id: 'p4',
    title: '3D CHARACTER HEAD MODELING',
    category: 'Blender 3D',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292181/p4_y51ecy.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291743/p4_fwubwp.mp4',
    tags: ['Figma']
  },
  {
    id: 'p5',
    title: '3d GLASS BOTTLE MODEL DESIGN | ',
    category: 'Blender 3D',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292178/p5_ied3nw.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291782/p5_lkacjw.mp4',
    tags: ['Figma', 'Adobe dimension', 'Illustrator']
  },
  {
    id: 'p6',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292184/p6_ktc82x.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291675/food_app_UI_byixyk.mp4',
    tags: ['Figma']
  },
  {
    id: 'p7',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767295887/Group_28_mwhp4w.png',
    videoUrl: '',
    tags: ['Figma']
  },
  {
    id: 'p8',
    title: 'Fly way',
    category: 'Travel Agency Website Design',
    imageUrl:
      'https://res.cloudinary.com/dumon96kf/image/upload/v1767292184/p6_ktc82x.png',
    videoUrl:
      'https://res.cloudinary.com/dumon96kf/video/upload/v1767291675/food_app_UI_byixyk.mp4',
    tags: ['Figma']
  }
  // {
  //   id: 'p7',
  //   title: 'HEED',
  //   category: 'UI UX Case Study',
  //   imageUrl: 'https://picsum.photos/seed/food/800/600',
  //   videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   tags: ['Figma', 'Photoshop', 'Illustrator']
  // },
  // {
  //   id: 'p8',
  //   title: 'Fly way',
  //   category: 'Travel Agency Website Design',
  //   imageUrl: 'https://picsum.photos/seed/3dchar/800/600',
  //   videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  //   tags: ['Figma']
  // }
  // Add videoUrl to other items...
]

const grid = document.getElementById('portfolioGrid')

portfolioItems.forEach(item => {
  // Check if item exists (to handle that extra comma in your array)
  if (!item) return

  const div = document.createElement('div')
  div.className = 'portfolio-item'
  div.style.cursor = 'pointer' // Make it look clickable

  div.innerHTML = `
      <div class="portfolio-image-box">
        <button class="sound-toggle" aria-label="Toggle Sound">
          <svg class="speaker-on" fill="currentColor" viewBox="0 0 24 24" style="display: none;"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          <svg class="speaker-off" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.41.32-.85.59-1.32.82v2.05c1.02-.27 1.97-.74 2.8-1.39L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
        </button>

        <video class="portfolio-video" src="${
          item.videoUrl
        }" loop playsinline preload="auto" muted></video>
        <img src="${item.imageUrl}" alt="${item.title}" class="portfolio-img" />

        <div class="tag-container">
          ${item.tags.map(tag => `<span class="badge2">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="portfolio-info">
        <div>
          <h3 class="item-title">${item.title}</h3>
          <p class="item-category">${item.category}</p>
        </div>
        <div class="arrow-btn">
          <svg class="arrow-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    `

  // --- NEW: REDIRECT LOGIC ---
  div.addEventListener('click', () => {
    if (item.link) {
      // window.location.href = item.link; // Opens in same tab
      window.open(item.link, '_blank') // Use this if you want a new tab
    }
  })

  // Keep your existing hover and sound logic
  // --- VIDEO & HOVER LOGIC ---
  const video = div.querySelector('.portfolio-video')
  const soundBtn = div.querySelector('.sound-toggle')
  const portfolioImg = div.querySelector('.portfolio-img')

  // Check if videoUrl exists and is not blank
  const hasVideo = item.videoUrl && item.videoUrl.trim() !== ''

  if (hasVideo) {
    portfolioImg.style.transition = 'none !important'
    const onIcon = soundBtn.querySelector('.speaker-on')
    const offIcon = soundBtn.querySelector('.speaker-off')

    div.addEventListener('mouseenter', () => {
      video.play().catch(() => {})
      // Optional: Hide image when video plays to ensure no "ghosting"
      portfolioImg.style.opacity = '0'
    })

    div.addEventListener('mouseleave', () => {
      video.pause()
      video.currentTime = 0
      portfolioImg.style.opacity = '1'
    })

    soundBtn.addEventListener('click', e => {
      e.stopPropagation()
      video.muted = !video.muted
      onIcon.style.display = video.muted ? 'none' : 'block'
      offIcon.style.display = video.muted ? 'block' : 'none'
    })
  } else {
    // 1. Add 'no-video' class to the main container div
    // div.classList.add('no-video')
    // portfolioImg.style.transform = 'scale(1.5)'

    div.addEventListener('mouseenter', () => {
      portfolioImg.style.transition = 'transform 0.3s ease-in-out'
      portfolioImg.style.transform = 'scale(1.1)'
    })

    div.addEventListener('mouseleave', () => {
      portfolioImg.style.transform = 'scale(1)'
    })
    // 2. Remove the pointer cursor (if you set it via JS earlier)
    div.style.cursor = 'default'

    // 3. Clean up the DOM
    if (video) video.remove()
    if (soundBtn) soundBtn.remove()
  }

  grid.appendChild(div)
})
