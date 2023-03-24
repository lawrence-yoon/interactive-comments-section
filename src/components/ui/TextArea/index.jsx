function TextArea({ handleTextChange, text }) {
  return (
    <textarea
      autoFocus
      name="content"
      id=""
      placeholder="Add a comment..."
      onChange={(e) => handleTextChange(e)}
      value={text}
    ></textarea>
  );
}

export default TextArea;
