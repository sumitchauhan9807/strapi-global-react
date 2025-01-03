import { Link as Linkk } from "react-router-dom";
import { useSelector } from "react-redux";

function Link({style,className,to,children}) {
  const language = useSelector((state) => state.language);
  if(to == '/') {
    to = ''
  }
  return (
    <Linkk style={style} className={className} to={`${to}/${language.language}`}>{children}</Linkk>
  )
}
export default Link;
