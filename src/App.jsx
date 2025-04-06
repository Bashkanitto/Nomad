import { Collapse } from 'react-collapse'
import Header from './components/Header'

function App() {
  return (
    <div className="container container-xl my-4 mx-auto">
      <Header />
      <h1 className="text-[228px]/40 mt-[120px] tracking-tighter ">Делаем </h1>
      <h1 className="text-[228px]/0 mt-[120px] ml-[40%] tracking-tighter">дизайн.</h1>
      <div className="flex justify-between pb-7 border-b border-gray-500 mt-[150px]">
        <p>
          Мы - Nomad Engineers, <br /> Диджитал агенство из Астаны
        </p>
        <p className="text-right">
          Создаем цифровые продукты, <br /> которые покоряют с первого клика
        </p>
      </div>

      <img src="" alt="" className="mt-[200px] w-full h-[500px] bg-neutral-300 " />
      <h2 className="text-[84px]/0 leading-[90%] text-right mt-10">Современные технологии,</h2>
      <h2 className="text-[84px]/0 leading-[90%]">
        отлаженные процессы и умение быстро <br /> решать сложные задачи
      </h2>
      <div className="flex justify-between border-t border-neutral-300 mt-10 ml-[35%] py-6">
        <div>
          <span>Проектов выполнено</span>
          <p className="text-[84px]">3</p>
        </div>
        <div>
          <span>Работаем с июня 2024 года</span>
          <p className="text-[84px]">10 месяцев</p>
        </div>
      </div>
      <div className="ml-[35%] border-t border-neutral-300 py-6">
        <span>Специалистов в штате</span>
        <p className="text-[84px]">14</p>
      </div>

      <div className="flex justify-between gap-5">
        <img src="" alt="" className="w-full h-[450px] bg-neutral-300" />
        <img src="" alt="" className="w-full h-[300px] bg-neutral-300" />
        <img src="" alt="" className="w-full h-[450px] bg-neutral-300" />
        <img src="" alt="" className="w-full h-[450px] bg-neutral-300" />
      </div>

      {/* our directories */}
      <div className="border-t border-neutral-300 flex mt-[180px] py-5">
        <h2 className="text-4xl text-neutral-400 ">Наши Направления</h2>
        <div className="ml-[265px] w-full">
          <div href="#" className="flex justify-between py-10 border-b border-neutral-300">
            <div className="flex flex-col">
              <p className="text-[30px]">Разработка сайтов и сервисов</p>
              <Collapse isOpened={false}>
                <p>Paragraph of text</p>
              </Collapse>
            </div>
            <button>+</button>
          </div>
          <a href="#" className="flex justify-between py-10 border-b border-neutral-300">
            <div className="flex flex-col">
              <p className="text-[30px]">Поддержка и развитие</p>
              <Collapse isOpened={false}>
                <p>Paragraph of text</p>
              </Collapse>
            </div>
            <button>+</button>
          </a>
          <a href="#" className="flex justify-between py-10 border-b border-neutral-300">
            <div className="flex flex-col">
              <p className="text-[30px]">Ui/Ux дизаин</p>
              <Collapse isOpened={false}>
                <p>Paragraph of text</p>
              </Collapse>
            </div>
            <button>+</button>
          </a>
          <a href="#" className="flex justify-between py-10 border-b border-neutral-300">
            <div className="flex flex-col">
              <p className="text-[30px]">Разработка мобильных приложении</p>
              <Collapse isOpened={false}>
                <p>Paragraph of text</p>
              </Collapse>
            </div>
            <button>+</button>
          </a>
          <a href="#" className="flex justify-between py-10 border-b border-neutral-300">
            <div className="flex flex-col">
              <p className="text-[30px]">Все услуги </p>
              <Collapse isOpened={false}>
                <p>Paragraph of text</p>
              </Collapse>
            </div>
            <button>+</button>
          </a>
        </div>
      </div>

      {/* filter */}
      <div className="mt-[180px] border-t border-neutral-300 ">
        <div className="flex gap-[80px] mt-8 items-center">
          <a href="#" className="bg-black px-4 py-2 rounded-full text-white">
            Все
          </a>
          <a href="#" className="px-4 py-2 rounded-full">
            Сайты
          </a>
          <a href="#" className="px-4 py-2 rounded-full">
            UI/UX
          </a>
          <a href="#" className="">
            Мобильные приложения
          </a>
        </div>
        <div className="w-[85%] mt-15">
          <img src="" alt="" className="w-full h-[600px] rounded-2xl bg-neutral-300" />
          <div className="flex justify-between w-full mt-5">
            <button className="py-2 px-4 bg-black rounded-full text-white">ARBR +</button>
            <p className="text-neutral-300 text-right w-1/4">
              CRM решения для автоматизации управления тендерами
            </p>
          </div>
        </div>
        <div className="w-[45%] my-15 float-end">
          <img src="" alt="" className="w-full h-[400px] rounded-2xl bg-neutral-300" />
          <div className="flex justify-between w-full mt-5">
            <button className="py-2 px-4 bg-black rounded-full text-white">Sira +</button>
            <p className="text-neutral-300 text-right w-1/2">
              CRM решения для автоматизации управления тендерами
            </p>
          </div>
        </div>
        <div className="w-[65%] ">
          <img src="" alt="" className="w-full h-[600px] rounded-2xl bg-neutral-300" />
          <div className="flex justify-between w-full mt-5">
            <button className="py-2 px-4 bg-black rounded-full text-white">RozaCoach Bot +</button>
            <p className="text-neutral-300 text-right w-1/3">
              CRM решения для автоматизации управления тендерами
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <h2 className="mt-[200px] text-[208px]/40">Услуги & </h2>
      <h2 className="text-[208px]/40 ml-[40%]">решения.</h2>
      <div className="w-[85%] mt-15">
        <img src="" alt="" className="w-full h-[600px] rounded-2xl bg-neutral-300" />
        <div className="flex justify-between w-full mt-5">
          <button className="py-2 px-4 bg-black rounded-full text-white">ARBR +</button>
          <p className="text-neutral-300 text-right w-1/4">
            CRM решения для автоматизации управления тендерами
          </p>
        </div>
      </div>

      {/* Процесс */}
      <h2 className="mt-[200px] text-[208px]/40">Процесс.</h2>
      <div className="grid grid-cols-4 gap-2 mt-15">
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Звонок и первичный брифинг <span className="px-6 py-2 bg-white rounded-full">1</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Коммерческое предложение <span className="px-6 py-2 bg-white rounded-full">2</span>
          </h2>
          <p>Готовим по вашему тз или формулируем задачу вместе</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Договор <span className="px-6 py-2 bg-white rounded-full">3</span>
          </h2>
          <p>У нас есть проверенные шаблоны на все случаи жизни</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Вводный знак <span className="px-6 py-2 bg-white rounded-full">4</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Презентация спринтов <span className="px-6 py-2 bg-white rounded-full">5</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Согласовывание <span className="px-6 py-2 bg-white rounded-full">6</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Подписка акта <span className="px-6 py-2 bg-white rounded-full">7</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
        <div className="p-4 rounded-2xl bg-[#EEEFF3] h-[330px] w-full">
          <h2 className="text-[26px] flex justify-between items-center">
            Пересдача материалов <span className="px-6 py-2 bg-white rounded-full">8</span>
          </h2>
          <p>Узнаем о вашей проблеме</p>
          <p>В день обращения</p>
        </div>
      </div>

      {/* end */}
      <h2 className="mt-[200px] text-[108px]/40">NOMAD ENGINEERS.</h2>
      <footer className="flex justify-between items-center mt-10">
        <p>ООО ИП ИИН:040728500880</p>
        <p>2024-2025</p>
        <button className="bg-black text-white rounded-2xl px-4 py-2">Связатся</button>
      </footer>
    </div>
  )
}

export default App
