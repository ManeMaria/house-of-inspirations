import s from './styles.module.css';

export const Element_1: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        Uma forma fácil de manipular apenas a primeira letra do seu texto usando o seletor css
        first-letter 🤩👨‍💻
      </div>
    </div>
  );
};
