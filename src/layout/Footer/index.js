import React from 'react';

import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      Yasmin Modas &copy; {new Date().getFullYear()}
    </footer>
  );
}
