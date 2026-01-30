function Docs() {
  return (
    <div className="docs-container">
      <div className="card docs-card">

      <h2>Technical Documentation</h2>

      <p>
        NeoBot is a question–answer web application built using a modern,
        minimal, and optimized frontend architecture.
      </p>

      <h3>Frontend</h3>
      <p>
        The frontend is developed using React with Vite for fast development and
        optimized builds. Component-based architecture is used to keep the code
        modular and maintainable.
      </p>

      <h3>Styling</h3>
      <p>
        Styling is handled using plain CSS with CSS custom properties
        (variables). Themes are applied dynamically using React Context, allowing
        runtime theme switching without reloading the page.
      </p>

      <h3>Backend & Database</h3>
      <p>
        Firebase Firestore is used as a NoSQL database in test mode. Questions and
        answers are stored in a dedicated collection and fetched on application
        load.
      </p>

      <h3>Authentication</h3>
      <p>
        Firebase Authentication is used for admin access. Only authenticated
        admins can add new questions through a protected admin panel.
      </p>

      <h3>Security</h3>
      <p>
        Admin routes are protected using route guards. Firestore write access is
        restricted to authenticated admin users only.
      </p>

      <h3>Design Philosophy</h3>
      <p>
        The UI follows a futuristic yet professional design approach with no
        animations or neon colors. The focus is on clarity, readability, and user
        experience.
      </p>
      </div>
    </div>
  );
}

export default Docs;
