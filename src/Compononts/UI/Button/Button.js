const button = (props) => (
  <button
    className={[
      "w-fit py-1 mt-3 text-center rounded-lg px-5",
      props.buttonClass,
    ].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
