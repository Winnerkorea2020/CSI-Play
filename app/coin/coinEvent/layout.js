const layout = ({ children }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full container mx-auto max-w-3xl">
      <div>{children}</div>
    </div>
  );
};

export default layout;
