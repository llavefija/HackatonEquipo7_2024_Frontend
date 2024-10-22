export const Button = ({ content, handleClick, styles}) => {
  return (
    <button className={`btn btn-accent text-slate-50 m-10 ${styles}`} onClick={handleClick}>
      {content}
    </button>
  );
};
