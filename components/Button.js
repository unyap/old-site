import clasnames from 'classnames'
import Link from './Link'

import style from './Button.module.css'

function Button(props) {
  const classes = clasnames(
    style.root,
    props.className
  );
  return(
    <Link href={props.href} className={classes}>
      {props.children}
    </Link>
  )
}

export default Button