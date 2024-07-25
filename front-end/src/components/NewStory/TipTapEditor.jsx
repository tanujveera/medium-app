// EditorComponent.jsx
import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
// import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
// import { createLowlight } from 'lowlight';
import 'highlight.js/styles/default.css';

// const lowlight = createLowlight();

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        Code Block
      </button>
      <button
        onClick={() => {
          const url = window.prompt('Enter image URL');
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      >
        Add Image
      </button>
    </div>
  );
};

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      // CodeBlockLowlight.configure({
      //   lowlight,
      // }),
    ],
    content: `
      <p>Hello World! 🌍</p>
      <p>This is a <strong>TipTap</strong> editor with <em>text</em>, <code>code blocks</code>, and images.</p>
    `,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
