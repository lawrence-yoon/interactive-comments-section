function TextArea({ handleTextChange, text }) {
  return (
    <textarea
      cols="64"
      rows="3"
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
