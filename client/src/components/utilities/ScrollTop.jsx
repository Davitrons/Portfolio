import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-secondary position-fixed"
      style={{
        bottom: '30px',
        right: '30px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        zIndex: 999,
      }}
      title="Volver arriba"
    >
      ⬆️
    </button>
  );
}
