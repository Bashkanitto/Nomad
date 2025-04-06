const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <img src="logo.jpg" alt="" />
      <ul className="menu flex gap-10">
        <a className="mr-20" href="#">
          Наши услуги
        </a>
        <a href="#">О нас</a>
        <a href="#">Кейсы</a>
        <a href="#">Услуги</a>
        <a href="#">Процессы</a>
        <a href="#">Контакты</a>
      </ul>
      <button className="rounded-full bg-black text-white px-4 py-2">Работать с нами</button>
    </header>
  )
}

export default Header
