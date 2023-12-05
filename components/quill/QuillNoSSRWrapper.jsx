import dynamic from "next/dynamic";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(
  async () => {
    // Import QuillComponent dynamically
    const QuillComponent = (await import("react-quill")).default;

    // Define the Quill functional component
    const Quill = ({ forwardedRef, ...props }) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );

    // Return the Quill functional component
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false }
);

export default QuillNoSSRWrapper;
