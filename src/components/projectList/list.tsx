import React from "react";
import { User } from "./searchPanel";


interface Project {
  id: string;
  name: string;
  userId: string;
  pin: boolean;
  org: string;
}
interface ListProps {
  list: Project[],
  users: User[]
}
const List = ({ list, users }: ListProps) => {
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
