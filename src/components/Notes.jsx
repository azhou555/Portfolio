import React from "react";
import { notes } from "../lib/notes";

const Notes = () => {
  return (
    <section id="notes" className="notes">
      <div className="notes-container">
        <h2 className="section-title">Notes</h2>
        <div className="notes-list">
          {notes.map((note) => (
            <article key={note.slug} className="note-preview">
              <div className="note-preview-header">
                <h3 className="note-preview-title">
                  <a href={`#/notes/${note.slug}`}>{note.title}</a>
                </h3>
                <span className="note-preview-date">{note.date}</span>
              </div>
              <p className="note-preview-excerpt">{note.excerpt}</p>
              <a className="note-read-link" href={`#/notes/${note.slug}`}>
                Read →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
