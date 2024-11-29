import React, { useState, useEffect } from 'react';

function Typewriter({ initialText, replacementText, speed = 100, delay = 2000 }) {
  const [text, setText] = useState(initialText);
  const [deleting, setDeleting] = useState(false);
  const [index, setIndex] = useState(initialText.length);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    let typingTimeout;

    if (deleting && index > 0) {
      // Backspacing the initial text
      typingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, speed);
    } else if (index === 0 && deleting) {
      // Start typing the replacement text
      setDeleting(false);
      setIndex(0);
    } else if (!deleting && index < replacementText.length) {
      // Typing the replacement text
      typingTimeout = setTimeout(() => {
        setText((prev) => prev + replacementText.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (index === replacementText.length) {
      // Finished typing the replacement text
      setFinished(true);
    } else if (index === initialText.length && !deleting) {
      // Start deleting after a delay
      setTimeout(() => setDeleting(true), delay);
    }

    return () => clearTimeout(typingTimeout);
  }, [index, deleting, initialText, replacementText, speed, delay, finished]);

  return <span className='cursor'>‎{text}</span>;
}

export default Typewriter;