import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.google.com)
  \`code\`
  \`\`\`
  {
    "firstName": "Ruhit",
    "lastName": "Abdul-Qahhar"
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  return (
    <div className="App">
      <textarea
        rows="40"
        cols="40"
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}
      ></div>
    </div>
  );
}

export default App;
