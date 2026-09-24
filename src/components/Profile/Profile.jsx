import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <img
          className={css.img}
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="User avatar"
        />
        <p className={css.user}> {username} </p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.card}>
          <span>Followers</span>
          <span className={css.num}>{followers}</span>
        </li>
        <li className={css.card}>
          <span>Views</span>
          <span className={css.num}>{views}</span>
        </li>
        <li className={css.card}>
          <span>Likes</span>
          <span className={css.num}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
