const ListItem = props => {
  const {details} = props
  const {word, length} = details
  return (
    <li>
      <p>
        {word}: {length}
      </p>
    </li>
  )
}

export default ListItem
