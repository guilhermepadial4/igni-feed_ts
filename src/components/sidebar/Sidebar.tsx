import { PencilLine } from "phosphor-react";

import { Avatar } from "../avatar/Avatar";
import "./sidebar.scss";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="profile">
        <Avatar src="https://github.com/guilhermepadial4.png" />

        <strong>Guilherme Padial</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
