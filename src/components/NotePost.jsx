import React, { useMemo } from "react";
import { marked } from "marked";
import { notes } from "../lib/notes";

const NotePost = ({ slug }) => {
  const note = notes.find((n) => n.slug === slug);
  const html = useMemo(() => (note ? marked.parse(note.body) : ""), [note]);

  if (!note) {
    return (
      <section className="note-post">
        <a className="note-back-link" href="#notes">
          ← Back to notes
        </a>
        <p>Note not found.</p>
      </section>
    );
  }

  return (
    <section className="note-post">
      <a
        className="note-back-link"
        href="#notes"
        onClick={(e) => {
          e.preventDefault()
          window.history.back()
        }}
      >
        ← Back to notes
      </a>
      <h1 className="note-post-title">{note.title}</h1>
      <p className="note-post-date">{note.date}</p>
      <div
        className="note-post-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
};

export default NotePost;
