 "use client";

export default function APSHub() {

  const section = {
    background: "#ffffff",
    padding: "24px",
    borderRadius: "16px",
    marginBottom: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
  };

  const title = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "16px"
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fb",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>
        APS Awareness & Support Hub
      </h1>

      <p style={{ fontSize: "16px", color: "#555", marginBottom: "30px" }}>
        Helping families understand Antiphospholipid Syndrome (APS),
        recognise symptoms, and access support.
      </p>

      <div style={section}>
        <div style={title}>What Is APS?</div>

        <p style={{ lineHeight: "1.7", color: "#444" }}>
          APS (Antiphospholipid Syndrome) is a condition that can cause blood clots,
          strokes, pregnancy complications, and other serious health issues.
          Many people live with APS for years before diagnosis.
        </p>
      </div>

      <div style={section}>
        <div style={title}>Common Warning Signs</div>

        <ul style={{ lineHeight: "2", color: "#444", paddingLeft: "20px" }}>
          <li>Blood clots</li>
          <li>Stroke at a young age</li>
          <li>Recurrent miscarriages</li>
          <li>Migraines</li>
          <li>Extreme fatigue</li>
          <li>Circulation issues</li>
        </ul>
      </div>

      <div style={section}>
        <div style={title}>Share Awareness</div>

        <button
          onClick={() =>
            navigator.clipboard.writeText(window.location.href)
          }
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Copy Website Link
        </button>
      </div>

      <div style={section}>
        <div style={title}>Join The Support List</div>

        <input
          placeholder="Your name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <input
          placeholder="Email address"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <button
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "#111827",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}
