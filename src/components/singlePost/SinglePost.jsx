import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/3369102/pexels-photo-3369102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>sfshk</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores ex
          nobis quasi! Magnam molestias quos natus incidunt nemo et unde
          dignissimos consequatur quis nulla fugiat, tenetur, quia quaerat.
          Aspernatur, sequi. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dolores ex nobis quasi! Magnam molestias quos natus incidunt
          nemo et unde dignissimos consequatur quis nulla fugiat, tenetur, quia
          quaerat. Aspernatur, sequi. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Dolores ex nobis quasi! Magnam molestias quos natus
          incidunt nemo et unde dignissimos consequatur quis nulla fugiat,
          tenetur, quia quaerat. Aspernatur, sequi. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dolores ex nobis quasi! Magnam molestias
          quos natus incidunt nemo et unde dignissimos consequatur quis nulla
          fugiat, tenetur, quia quaerat. Aspernatur, sequi. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Dolores ex nobis quasi! Magnam
          molestias quos natus incidunt nemo et unde dignissimos consequatur
          quis nulla fugiat, tenetur, quia quaerat. Aspernatur, sequi.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
