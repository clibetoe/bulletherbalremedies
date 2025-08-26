import React from 'react'

const reviews = [
  { id: 1, name: 'Ava', text: 'Love the chamomile tea — so calming.' },
  { id: 2, name: 'Noah', text: 'Fast shipping and great service.' },
]

export default function Reviews() {
  return (
    <section className="page reviews">
      <h2>Customer Reviews</h2>
      <ul className="review-list">
        {reviews.map(r => (
          <li key={r.id} className="review-item">
            <strong>{r.name}</strong>
            <p>{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
