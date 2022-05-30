import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCatg">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde aut
        assumenda animi error quas harum facere numquam! Hic, repellendus, velit
        saepe quidem fugit, iste ratione voluptatem corrupti adipisci porro
        minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
        aut assumenda animi error quas harum facere numquam! Hic, repellendus,
        velit saepe quidem fugit, iste ratione voluptatem corrupti adipisci
        porro minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Unde aut assumenda animi error quas harum facere numquam! Hic,
        repellendus, velit saepe quidem fugit, iste ratione voluptatem corrupti
        adipisci porro minima.
      </p>
    </div>
  );
};

export default Post;
