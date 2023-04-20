function Box({ height, width, color, deleteBox, id, key }) {
  console.log("Behold the box");

  const mystyle = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
  };

  function handleClick(evt) {
    deleteBox(evt.target.id);
  }

  return (
    <div className="Box">
      <div style={mystyle} key={id} id={id}></div>
      <button id={id} onClick={handleClick}>
        Delete this box!
      </button>
    </div>
  );
}

export default Box;
