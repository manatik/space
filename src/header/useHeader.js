const useHeader = () => {
  // это тело хука, тут можно писать его логику, получение даных, хранить информацию и все что угодно

  const routes = [
    {
      id: 1,
      name: 'Главная',
      to: '/'
    },
    {
      id: 2,
      name: 'Программа и методика',
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
