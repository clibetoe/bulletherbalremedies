export default function Contact() {
  return (
    <section className="page contact">
      <h2>Contact Us</h2>
      <p>If you have questions, send us a message.</p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input name="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Message
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
