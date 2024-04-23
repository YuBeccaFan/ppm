import React from "react";
import { useEffect, useState } from "react";

const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.userId}
        onChange={(e) => setParam({ ...param, userId: e.target.value })}
      >
        <option value={""}>Lead</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SearchPanel;
