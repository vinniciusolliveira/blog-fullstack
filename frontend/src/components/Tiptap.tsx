'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap: React.FC = () => {
  // Inicializa o editor com as extensões desejadas
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  });

  // Renderiza o conteúdo do editor
  return <EditorContent editor={editor} />;
};

export default Tiptap;
