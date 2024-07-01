import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create user
export const createUser = async (userName, password, firstName, lastName) =>{
  const user = await prisma.user.create({
    data:{
      username:userName,
      password:password,
      firstName: firstName,
      lastName: lastName
    }
  })
  return user
}
//get user
export const getUser = async (userName) =>{
  const user = await prisma.user.findUnique({
    where:{
      username:userName
    }
  })
  return user
}
// get all users
export const getAllUsers = async () => {
  const allUsers = await prisma.user.findMany();
  return allUsers
}
// update a user
export const updateUser = async (userName,updatedData) => {
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
}

//Delete user
export const deleteUser = async (userName) =>{
  const user = await prisma.user.delete({
    where:{
      username:userName
    }
  })
  return user
}

//Delete all users
export const deleteAllUsers = async () =>{
  const user = await prisma.user.deleteMany();
  return user
}