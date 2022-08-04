import styles from './search-door-form.module.scss';

export function SearchDoorForm(): JSX.Element {
  const {searchForm, doorParameters, searchField, doorTypesField} = styles;
  return (
    <div className={searchForm}>
      <h3>Модель двери</h3>


      <label htmlFor="" className={searchField}>
        <input type="search" />
        <span>Введите название, бренд или код</span>
      </label>


      <fieldset className={doorParameters}>
        <label htmlFor="">
          <input type="number" name="height" />
          <span>высота</span>
        </label>

        <label htmlFor="">
          <input type="number" name="width" />
          <span>ширина</span>
        </label>

        <label htmlFor="">
          <input type="number" name="depth" />
          <span>толщина <br/>стен</span>
        </label>
      </fieldset>

      <fieldset className={doorTypesField}>
        <label htmlFor="">
          <input type="radio" name="type-door" />
          <span><b>межкомнатная</b></span>
        </label>

        <label htmlFor="">
          <input type="radio" name="type-door" />
          <span><b>входная</b></span>
        </label>
      </fieldset>
    </div>
  );
}
