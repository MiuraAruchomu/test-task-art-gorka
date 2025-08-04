import styles from './styles/list.module.scss';
import StagesListItem from './Item';

export default function StagesList({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={styles['stages-list']}>
      <StagesListItem
        index={1}
        title={'Знакомимся и обсуждаем проект'}
        becameVisible={isVisible}
      >
        <>
          Оставляйте заявку 
          <a
            href={'#'}
            className={`${styles['stages-list__link']} under-line-link`}
          >
            на сайте
          </a>
          , 
          <a
            href={'#'}
            className={`${styles['stages-list__link']} under-line-link`}
          >
            на почту
          </a>
           или звоните по 
          <a
            href={'#'}
            className={`${styles['stages-list__link']} under-line-link`}
          >
            8 (921) 0 250 250
          </a>
          .
          <br />
          <br />
          Наш менеджер ответит вам, предварительно обсудим, какие задачи нужно
          решить. После этого предложим заполнить бриф, где вы сможете подробно
          рассказать о проекте.
        </>
      </StagesListItem>
      <StagesListItem
        index={2}
        title={'Организуем встречу'}
        becameVisible={isVisible}
      >
        <>
          Онлайн или оффлайн. Погрузимся в детали проекта, уточним все пожелания
          и ожидания. Пройдёмся по ключевым моментам из брифа. Обсудим варианты
          решения задачи.
        </>
      </StagesListItem>
      <StagesListItem
        index={3}
        title={'Оцениваем и отправляем КП'}
        becameVisible={isVisible}
      >
        <>
          После встречи собираем все требования и приступаем к оценке проекта.
          <br />
          <br />
          По итогу отправляем вам детальное коммерческое предложение с описанием
          всех этапов работы, сроками и стоимостью проекта.
        </>
      </StagesListItem>
      <StagesListItem
        index={4}
        title={'Заключаем договор и приступаем к работе'}
        becameVisible={isVisible}
      >
        <>
          Обсуждаем условия сотрудничества, составляем договор и начинаем
          работу.
        </>
      </StagesListItem>
    </div>
  );
}
