// 예시: Button.jsx (클래스 기반으로 수정할 경우)
export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
}
