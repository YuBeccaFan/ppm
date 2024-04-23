import React from "react";

const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Project Lead</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.userId)?.name ||
                "Unknow"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
