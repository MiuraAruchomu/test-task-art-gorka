import { NextResponse } from 'next/server';

export async function GET() {
  const projects = [
    {
      imgPath: '/img/project-1.jpg',
      title: 'Цифровая стоматология «ДоДоктор»',
      filters: ['разработка сайта', 'контекстная реклама', 'SMM'],
      linkName: 'dodoktor.com',
      linkPath: 'https://dodoktor.com/',
    },
    {
      imgPath: '/img/project-2.jpg',
      title: '«Адепт Модуль» — строительство модульных домов',
      filters: ['разработка сайта', 'контекстная реклама'],
      linkName: 'adeptmodul.ru',
      linkPath: 'https://adeptmodul.ru/',
    },
    {
      imgPath: '/img/project-3.jpg',
      title: 'Якутская топливно-энергетическая компания (ЯТЭК)',
      filters: ['разработка сайта', 'обслуживание'],
      linkName: 'yatec.ru',
      linkPath: 'https://yatec.ru/',
    },
    {
      imgPath: '/img/project-4.jpg',
      title: 'Сеть медицинских клиник «ОДОНТ» в Санкт-Петербурге',
      filters: ['разработка сайта', 'обслуживание'],
      linkName: 'odont.ru',
      linkPath: 'https://odont.ru/',
    },
  ];

  return NextResponse.json(projects);
}
