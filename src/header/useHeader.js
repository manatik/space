const useHeader = () => {
  const routes = [
    {
      id: 1,
      name: 'Главная',
      to: '/'
    },
    {
      id: 2,
      name: 'Выбрать уровень',
      to: '/programEng'
    },
    {
      id: 3,
      name: 'О нас',
      to: '/about'
    }
  ]

  return {
    routes
  }
}

export default useHeader
