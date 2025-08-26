const sampleProducts = [
  { id: 'p1', name: 'Chamomile Tea', desc: 'Calming herbal tea.' },
  { id: 'p2', name: 'Echinacea Tincture', desc: 'Immune support.' },
  { id: 'p3', name: 'Lavender Salve', desc: 'Soothing topical salve.' },
]

export default function Products() {
  return (
    <section className="page products">
      <h2>Our Products</h2>
      <ul className="product-list">
        {sampleProducts.map((p) => (
          <li key={p.id} className="product-item">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
