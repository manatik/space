export const useProgramEng = () => {
  const handleClick = (e) => {
    localStorage.setItem('lvl', e.target.id)
  }
  return { handleClick }
}
