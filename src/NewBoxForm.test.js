/**
 * @param {addBox}  A property passed down from BoxList
 * @state {formData} Shows the current state of the data on the form.
 * @returns A form that allows a user to add a new box to the page.
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: "",
  });

  console.log(boxData, "BoxData State");
  console.log(formData, "formData State");

  function handleChange(evt) {
    const { height, width, color } = evt.target;
    setFormData((fData) => ({
      ...fData,
      height,
      width,
      color,
    }));
    console.log(formData, "State during handleChange evt");
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const height = evt.target.height;
    const width = evt.target.width;
    const color = evt.target.color;

    setFormData({
      height: "",
      width: "",
      color: "",
    });
    addBox(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
