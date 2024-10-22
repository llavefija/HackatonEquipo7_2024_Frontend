export const Button = ({ content, handleClick }) => {
  return (
    <button className="btn btn-accent text-slate-50 m-10" onClick={handleClick}>
      {content}
    </button>
  );
};
