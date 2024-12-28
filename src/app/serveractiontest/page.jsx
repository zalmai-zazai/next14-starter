import { addPost, deletePost } from "@/lib/action";
import React from "react";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        {/* <input type="text" placeholder="userId" name="userId" /> */}
        <label>Choose a User</label>
        <select name="userId">
          <option value="6760dfa95f335f2ea3f564e1">Jhon</option>
          <option value="6760e0245f335f2ea3f564e2">Ahmad</option>
        </select>

        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
