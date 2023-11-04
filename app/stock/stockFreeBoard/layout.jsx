const layout = ({ children }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow-sm h-full">
      <div>{children}</div>
    </div>
  );
};

export default layout;
