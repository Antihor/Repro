import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const str = clsx(isOnline ? css.on : css.off);

  return (
    <div className={css.wrap}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={str}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
