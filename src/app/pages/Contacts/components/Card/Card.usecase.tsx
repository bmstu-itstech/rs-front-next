import ArrowSocial from '@/app/components/icons/ArrowSocial';
import type {FC, HTMLAttributes} from 'react';

export const photoCard_usecase = (
  <>
    <p className='font-normal text-4xl z-10'>Бизиков Валерий</p>
    <p className='font-bold text-3xl z-10'>Руководитель ЦМР</p>
    <p className='font-bold text-2xl z-10'>+7 (999) 999-99-99</p>
    <p className='font-normal text-2xl z-10'>1234567@mail.ru</p>
  </>
);

const socials = [
  {
    label: 'ВКонтакте',
    url: '/',
  },
  {
    label: 'Телеграм',
    url: '/',
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  val: string;
  href?: string;
}

const Row: FC<Props> = ({name, val, href, className, ...props}) => {
  return (
    <p className={`flex gap-4 text-3xl font-medium ${className}`} {...props}>
      {name && <span className='text-gray '>{name}: </span>}
      {href ? (
        <a href={href} className='flex gap-1'>
          {val} <ArrowSocial className='self-start' />
        </a>
      ) : (
        <>{val}</>
      )}
    </p>
  );
};

export const textCard_usecase = (
  <div className='flex flex-col w-full gap-7'>
    <div className='flex flex-col gap-4'>
      <Row name='Телефон' val='+7 (800) 555-35-35' />
      <Row name='Email' val='cmr@bmstu.ru' />
    </div>
    <div>
      <Row val='Политика перс. данных' href='/' />
    </div>
    <div>
      <Row val='Сайт Университета' href='/' />
    </div>
    <div className='flex flex-col gap-4'>
      <Row name='Адрес' val='Схема проезда' href='/' />
      <Row val='105005, г. Москва,' />
      <Row val='2-ая Бауманская, д.5, стр.1' />
    </div>
    <div className='flex flex-col gap-2'>
      <span className='text-3xl font-medium text-gray'>Соцсети: </span>
      <div className='flex justify-between'>
        {socials.map((social, index) => {
          return <Row key={index} href={social.url} val={social.label} />;
        })}
      </div>
    </div>
  </div>
);
