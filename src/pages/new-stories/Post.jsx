import React from "react";

export default function Post({ author, mainContain }) {
  return (
    <section>
      <header>{author}</header>
      <div>{mainContain}</div>
    </section>
  );
}
