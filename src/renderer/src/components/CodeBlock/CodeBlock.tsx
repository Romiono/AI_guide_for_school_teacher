import React, { ReactNode, useEffect, useRef } from 'react'
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';
import styles from './CodeBlock.module.scss';

interface CodeBlockProps {
  language?: string;
  children: ReactNode;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
                                               language = 'python',
                                               children,
                                               className = ''
                                             }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children, language]);

  return (
    <div className={`${styles.codeBlock} ${className}`}>
      <div className={styles.codeHeader}>
        <span className={styles.languageTag}>{language}</span>
      </div>
      <pre className={styles.pre}>
        <code
          ref={codeRef}
          className={`language-${language}`}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
