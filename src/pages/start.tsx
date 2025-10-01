import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About BioBlog">
      <main style={{ padding: '3rem', textAlign: 'center' }}>
        <h1>About BioBlog</h1>
        <p>This is a custom page with navbar and footer!</p>
      </main>
    </Layout>
  );
}