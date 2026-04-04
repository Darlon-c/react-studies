export default function BtnLink(props) {
  return (
    <>
      <a className={props.className} href={props.href} target="_blank">
        {props.children}
      </a>
    </>
  );
}
