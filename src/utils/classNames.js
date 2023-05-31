export function classNames(cn = []) {
  cn.filter((className) => !className).join(" ");
}
