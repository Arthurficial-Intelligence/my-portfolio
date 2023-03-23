import * as React from 'react';
import { Link } from 'gatsby';

const HomePage = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <main
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4) var(--size-gutter)',
      }}
    >
      <h1>Welcome to my site</h1>
      <p>
      This site is a curated hub showcasing my academic research and professional resume, featuring insightful blog articles on a wide array of subjects and in-depth journal entries that delve into specific topics. Immerse yourself in a world of knowledge, innovation, and inspiration – thanks for stoping by.
      </p>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <button
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
          }}
        >
          Learn More about Me
        </button>
      </Link>
    </main>
  </div>
);

export default HomePage;
