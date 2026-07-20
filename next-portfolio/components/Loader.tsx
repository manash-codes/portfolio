const Loader = () => {
  return (
    <div className="flex items-center justify-center" role="status" aria-live="polite" aria-label="Loading content">
      <div className="loader min-h-screen" aria-hidden="true">
        <div className="loader__circle" />
        <div className="loader__circle" />
        <div className="loader__circle" />
        <div className="loader__circle" />
        <div className="loader__circle" />
      </div>
    </div>
  );
};

export default Loader;
