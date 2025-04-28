import React from "react"
import { useFetch } from "./Datastore";

type Post = {
    id:number,
    firstName: string;
    lastName: string;
    email: string;
    cardNumber: number;
    country: string;
    bank:number;
    address:string;
};
type APIResponse = {
    users: Post[];
  };
const Posts: React.FC = () => {
  const { data, loading, error } = useFetch<APIResponse>("https://dummyjson.com/users");
    console.log(data);
    
  if (loading) {
    return <h2>Loading posts...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div style={{ padding: "20px", display:"flex", justifyContent:"start", flexDirection:'column', alignItems:'start' }}>
      <h1>This is Users Data</h1>
      { data?.users.slice(0, 10).map((post) => (
        <div key={post.id} style={{ marginBottom: "20px", borderBottom: "1px solid gray" }}>
          <h3>{post.firstName}{post.lastName}</h3>
          <p>{post.email}</p>
          <p>{post.bank.cardNumber}</p>
          <p>{post.address.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
