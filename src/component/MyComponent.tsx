// import { useEffect, useState } from "react";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// const MyComponent = () => {
//   const [data, setData] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchPosts = async () => {
//     try {
//       const response = await api.get<Post[]>("/posts");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError("Failed to fetch posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addPost = async (newPost: Omit<Post, "id">) => {
//     try {
//       const response = await api.post<Post>("/posts", newPost);
//       setData((prevData) => [...prevData, response.data]);
//     } catch (error) {
//       console.error("Error adding post:", error);
//       setError("Failed to add post");
//     }
//   };

//   const updatePost = async (postId: number, updatedPost: Omit<Post, "id">) => {
//     try {
//       const response = await api.put<Post>(`/posts/${postId}`, updatedPost);
//       setData((prevData) =>
//         prevData.map((item) => (item.id === postId ? response.data : item))
//       );
//     } catch (error) {
//       console.error("Error updating post:", error);
//       setError("Failed to update post");
//     }
//   };

//   const deletePost = async (postId: number) => {
//     try {
//       await api.delete(`/posts/${postId}`);
//       setData((prevData) => prevData.filter((item) => item.id !== postId));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       setError("Failed to delete post");
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <h2>{item.title}</h2>
//             <p>{item.body}</p>
//             <button onClick={() => deletePost(item.id)}>Delete</button>
//             <button
//               onClick={() =>
//                 updatePost(item.id, {
//                   title: "Updated Title",
//                   body: "Updated Body",
//                 })
//               }
//             >
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => addPost({ title: "New Post", body: "Post content" })}
//       >
//         Add Post
//       </button>
//     </div>
//   );
// };

// export default MyComponent;
