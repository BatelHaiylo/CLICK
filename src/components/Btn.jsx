import { Button } from '@mui/material'

export default function Btn( {clickHandler, title} ) {

  return (
    <Button variant="contained" onClick={clickHandler}>{title}</Button>
  )
};