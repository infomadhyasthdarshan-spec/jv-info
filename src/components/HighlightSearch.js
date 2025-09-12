'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function HighlightSearch() {
  const searchParams = useSearchParams()
  const searchTerm = decodeURIComponent(searchParams.get('search') || '')
  console.log('Search Term:', searchTerm)

  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  useEffect(() => {
    if (!searchTerm) return

    const highlightText = (container) => {
      // Remove previous highlights
      const oldMarks = container.querySelectorAll('mark')
      oldMarks.forEach((mark) => {
        const parent = mark.parentNode
        if (parent) {
          parent.replaceChild(document.createTextNode(mark.textContent), mark)
          parent.normalize()
        }
      })

      const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi')

      const walk = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const match = node.nodeValue.match(regex)
          if (match) {
            const span = document.createElement('span')
            const parts = node.nodeValue.split(regex)

            parts.forEach((part) => {
              if (regex.test(part)) {
                const markNode = document.createElement('mark')
                markNode.textContent = part
                markNode.style.transition = 'background-color 1s ease, color 1s ease'
                span.appendChild(markNode)
              } else {
                span.appendChild(document.createTextNode(part))
              }
            })

            node.replaceWith(...span.childNodes)
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.childNodes.forEach(walk)
        }
      }

      walk(container)

      // Scroll to first highlight
      const firstMark = container.querySelector('mark')
      if (firstMark) firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' })

      // Fade out after 3 seconds
      setTimeout(() => {
        const marks = container.querySelectorAll('mark')
        marks.forEach((mark) => {
          mark.style.backgroundColor = 'transparent'
          mark.style.color = 'inherit'
        })
      }, 3000)
    }

    // Wait for the container to appear
    const container = document.getElementById('content-container')
    if (container) {
      highlightText(container)
    } else {
      // Observe DOM changes
      const observer = new MutationObserver((mutations, obs) => {
        const container = document.getElementById('content-container')
        if (container) {
          highlightText(container)
          obs.disconnect() // stop observing once found
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }, [searchTerm])

  return null
}







// 'use client'
// import { useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'

// export default function HighlightSearch() {
//   const searchParams = useSearchParams()
//   const searchTerm = decodeURIComponent(searchParams.get('search') || '')
//   console.log('Search Term:', searchTerm)

//   const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

//   useEffect(() => {
//     if (!searchTerm) return

//     const container = document.getElementById('content-container')
//     if (!container) return

//     // Remove previous highlights
//     const oldMarks = container.querySelectorAll('mark')
//     oldMarks.forEach((mark) => {
//       const parent = mark.parentNode
//       if (parent) {
//         parent.replaceChild(document.createTextNode(mark.textContent), mark)
//         parent.normalize()
//       }
//     })

//     const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi')

//     const walk = (node) => {
//       if (node.nodeType === Node.TEXT_NODE) {
//         const match = node.nodeValue.match(regex)
//         if (match) {
//           const span = document.createElement('span')
//           const parts = node.nodeValue.split(regex)

//           parts.forEach((part) => {
//             if (regex.test(part)) {
//               const markNode = document.createElement('mark')
//               markNode.textContent = part
//               markNode.style.transition = 'background-color 1s ease, color 1s ease'
//               span.appendChild(markNode)
//             } else {
//               span.appendChild(document.createTextNode(part))
//             }
//           })

//           node.replaceWith(...span.childNodes)
//         }
//       } else if (node.nodeType === Node.ELEMENT_NODE) {
//         node.childNodes.forEach(walk)
//       }
//     }

//     walk(container)

//     // Scroll to first highlight
//     const firstMark = container.querySelector('mark')
//     if (firstMark) firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' })

//     // Fade out after 3 seconds
//     setTimeout(() => {
//       const marks = container.querySelectorAll('mark')
//       marks.forEach((mark) => {
//         mark.style.backgroundColor = 'transparent'
//         mark.style.color = 'inherit'
//       })
//     }, 3000) // 3000ms = 3 seconds
//   }, [searchTerm])

//   return null
// }







// 'use client'
// import { useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'

// export default function HighlightSearch() {
//   const searchParams = useSearchParams()
//   const searchTerm = decodeURIComponent(searchParams.get('search') || '')
//   console.log('Search Term:', searchTerm)

//   const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

//   useEffect(() => {
//     if (!searchTerm) return

//     const container = document.getElementById('content-container')
//     if (!container) return

//     // Remove any previous highlights
//     const marks = container.querySelectorAll('mark')
//     marks.forEach((mark) => {
//       const parent = mark.parentNode
//       if (parent) {
//         parent.replaceChild(document.createTextNode(mark.textContent), mark)
//         parent.normalize() // merge adjacent text nodes
//       }
//     })

//     if (!searchTerm) return

//     const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi')

//     const walk = (node) => {
//       if (node.nodeType === Node.TEXT_NODE) {
//         const match = node.nodeValue.match(regex)
//         if (match) {
//           const span = document.createElement('mark')
//           const matchedText = node.nodeValue.match(regex)[0]
//           const parts = node.nodeValue.split(regex)

//           parts.forEach((part, index) => {
//             if (regex.test(part)) {
//               const markNode = document.createElement('mark')
//               markNode.textContent = part
//               span.appendChild(markNode)
//             } else {
//               span.appendChild(document.createTextNode(part))
//             }
//           })

//           node.replaceWith(...span.childNodes)
//         }
//       } else if (node.nodeType === Node.ELEMENT_NODE) {
//         node.childNodes.forEach(walk)
//       }
//     }

//     walk(container)

//     const firstMark = container.querySelector('mark')
//     if (firstMark) firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' })
//   }, [searchTerm])

//   return null
// }
