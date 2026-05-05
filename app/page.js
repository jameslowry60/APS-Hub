"use client";
import React, { useState, useEffect } from "react";

const save = (k, d) => localStorage.setItem(k, JSON.stringify(d));
const load = (k, f) => JSON.parse(localStorage.getItem(k)) || f;

export default function APSHub() {
  const [users, setUsers] = useState(load("users", []));
  const [symptoms, setSymptoms] = useState(load("symptoms", []));
  const [currentUser, setCurrentUser] = useState(null);

  const [registerForm, setRegisterForm] = useState({ name: "", email: "" });
  const [symptomForm, setSymptomForm] = useState({ symptom: "", severity: "" });

  useEffect(() => save("users", users), [users]);
  useEffect(() => save("symptoms", symptoms), [symptoms]);

  const register = () => {
    if (!registerForm.name || !registerForm.email) return;
    const u = { ...registerForm, id: Date.now() };
    setUsers([...users, u]);
    setCurrentUser(u);
    setRegisterForm({ name: "", email: "" });
  };

  const addSymptom = () => {
    if (!symptomForm.symptom || !symptomForm.severity) return;
    const entry = {
      ...symptomForm,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    setSymptoms([entry, ...symptoms]);
    setSymptomForm({ symptom: "", severity: "" });
  };

  const generateReport = () => {
    const report = `APS REPORT\n\nSymptoms:\n${symptoms
      .map(s => `${s.date} - ${s.symptom} (Severity ${s.severity})`)
      .join("\n")}`;
    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "APS_Report.txt";
    a.click();
  };

  const section = {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginBottom: "20px"
  };

  const title = { fontSize: "22px", fontWeight: "600", marginBottom: "10px" };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
        APS Awareness & Support Hub
      </h1>

      <p style={{ fontSize: "13px", color: "#666" }}>
        This platform is for awareness only and does not replace medical advice. Always consult your GP.
      </p>

      <div style={section}>
        <div style={title}>Share With Your Family</div>
        <button onClick={() => navigator.clipboard.writeText(window.location.href)}>
          Copy Link
        </button>
      </div>

      <div style={section}>
        <div style={title}>Know the Signs</div>
        <ul>
          <li>Blood clots</li>
          <li>Stroke at a young age</li>
          <li>Recurrent miscarriages</li>
        </ul>
      </div>

      {!currentUser && (
        <div style={section}>
          <div style={title}>Join</div>
          <input placeholder="Name" value={registerForm.name}
            onChange={e=>setRegisterForm({...registerForm,name:e.target.value})}/>
          <input placeholder="Email" value={registerForm.email}
            onChange={e=>setRegisterForm({...registerForm,email:e.target.value})}/>
          <button onClick={register}>Join</button>
        </div>
      )}

      {currentUser && (
        <div style={section}>
          <div style={title}>Symptom Tracker</div>
          <input placeholder="Symptom" value={symptomForm.symptom}
            onChange={e=>setSymptomForm({...symptomForm,symptom:e.target.value})}/>
          <input placeholder="Severity" value={symptomForm.severity}
            onChange={e=>setSymptomForm({...symptomForm,severity:e.target.value})}/>
          <button onClick={addSymptom}>Log</button>

          {symptoms.map(s => (
            <p key={s.id}>{s.date} - {s.symptom}</p>
          ))}

          <button onClick={generateReport}>Download Report</button>
        </div>
      )}
    </div>
  );
}
