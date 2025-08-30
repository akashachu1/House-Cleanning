import './Button.css';

function Button({ variant = "hybrid", children }) {
  let className = "";

  if (variant === "hybrid") className = "hybrid-btn";
  if (variant === "book") className = "book-btn";
  if (variant === "view") className = "view-btn";

  return (
    <button className={className}>
      {children}
    </button>
  );
}

export default Button;
