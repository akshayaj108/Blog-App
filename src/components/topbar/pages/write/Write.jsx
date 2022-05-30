import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/11740343/pexels-photo-11740343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="writeImage"
      />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Description"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Post</button>
      </form>
    </div>
  );
};

export default Write;
