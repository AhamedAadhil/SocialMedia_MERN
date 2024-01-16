import Post from "../models/Post.js";
import User from "../models/User.js";
import Events from "../models/Event.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath, videoPath } = req.body;
    console.log("Received videoPath", videoPath);
    const user = await User.findById(userId);
    if (!user) {
      // Handle the case when the user is not found
      return res.status(404).json({ message: "User not found" });
    }
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      videoPath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* GET USER POSTS */
export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* DELETE POST */
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (userId !== post.userId) {
      return res.status(401).json({ message: "Access Denied!" });
    }
    const deletePost = await Post.findByIdAndDelete(post);
    if (!deletePost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* ADD COMMENTS */
export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, commentText } = req.body;

    const post = await Post.findById(id);
    const commentedUser = await User.findById(userId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const newComment = {
      userId,
      commentText,
      firstName: commentedUser.firstName,
      lastName: commentedUser.lastName,
    };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* CREATE EVENT */
export const createEvent = async (req, res) => {
  try {
    const { userId, title, description, startDate, time, venue } = req.body;
    const user = await User.findById(userId);
    //Checking for required fields
    if (!title || !description || !startDate || !time || !venue) {
      throw new Error("Please provide all the details");
    }
    //Creating an Event
    const newEvent = new Events({
      userId,
      title,
      description,
      startDate,
      time,
      venue,
    });
    await newEvent.save();
    const event = await Events.find();
    res.status(201).json(event);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/* GET EVENTS */
export const getEvents = async (req, res) => {
  try {
    const event = await Events.find();
    res.status(200).json(event);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* SHARE POST */
export const sharePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const originalPost = await Post.findById(id);

    if (!originalPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the post has already been shared by the current user
    const isShared = originalPost.shares.some(
      (share) => share.userId === userId
    );
    if (!isShared) {
      originalPost.shares.push({ userId });
      await originalPost.save();

      // Create a new post based on the shared post
      const newPost = new Post({
        userId,
        firstName: originalPost.firstName,
        lastName: originalPost.lastName,
        location: originalPost.location,
        description: originalPost.description,
        userPicturePath: originalPost.userPicturePath,
        picturePath: originalPost.picturePath,
        videoPath: originalPost.videoPath,
        likes: {},
        comments: [],
        shares: [], // Clear shares to avoid duplication
      });

      await newPost.save();
    }

    const post = await Post.find();
    res.status(201).json(post);
    // const updatedPost = await Post.findById(id);
    // res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* SAVE POST */
export const savePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const isSaved = post.saves && post.saves.get(userId);

    if (isSaved) {
      post.saves.delete(userId);
    } else {
      // Initialize 'saves' as an empty Map if it's undefined
      if (!post.saves) {
        post.saves = new Map();
      }
      post.saves.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { saves: post.saves },
      { new: true }
    );

    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
