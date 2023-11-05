import Widget from './components/Widget';
import css from './App.module.scss';

export const App = () => {
  return (
    <div className={css.bodyWrapper}>
      <Widget title="Phonebook widget">hello</Widget>
    </div>
  );
};
