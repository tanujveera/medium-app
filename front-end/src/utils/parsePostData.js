export const parsePostData =(post) =>{
    let content = post;

  // Remove starting and ending brackets and quotes
  if (content?.startsWith('["') && content?.endsWith('"]')) {
    content = content?.slice(2, -2); // Removes the first 2 and last 2 characters
  }
  else{
    return content;
  }

  // Replace escaped quotes (if any) with regular quotes
  content = content?.replace(/\\"/g, '"');

  return content
} 