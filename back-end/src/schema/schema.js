import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create user
export const createUser = async (userName, password, firstName, lastName) => {
  const user = await prisma.user.create({
    data: {
      username: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};
//get user
export const getUser = async (userName) => {
  const user = await prisma.user.findUnique({
    where: {
      username: userName,
    },
  });
  return user;
};
// get all users
export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers;
};
// update a user
export const updateUser = async (userName, updatedData) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        username: userName,
      },
      data: updatedData,
    });

    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

//Delete user
export const deleteUser = async (userName) => {
  const user = await prisma.user.delete({
    where: {
      username: userName,
    },
  });
  return user;
};

//Delete all users
export const deleteAllUsers = async () => {
  const user = await prisma.user.deleteMany();
  return user;
};

//---------------------------------------------------------------

// Add Post
export const addPost = async (title, content, published, authorId) => {
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
      published: published,
      authorId: authorId,
    },
  });
  return post;
};

// Get All posts of that user
export const allUserPosts = async (emailId) => {
  const posts = await prisma.post.findMany({
    where:{
      authorId:emailId
    }
  });
  return posts;
};

// Get All posts
export const allPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

// Get post
export const getPost = async (id,authorId) => {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
      authorId:authorId
    },
  });
  return post;
};

// Delete post
export const deletePost = async (id,authorId)=>{
  const post = await prisma.post.delete({
    where: {
      id: id,
      authorId:authorId
    },
  })
}

//Update post
export const updatePost = async (id,authorId,updatedData) => {
  const post = prisma.post.update({
    where:{
      id:id,
      authorId:authorId
    },
    data: updatedData
  })
}