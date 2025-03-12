import styles from "./Link.module.css";

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  path: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  return (
    <a className={styles["StyloUI-Link"]} {...props} href={props.path}>
      {props.children}
    </a>
  );
};

export default Link;
