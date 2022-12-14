import { ChangeEvent } from 'react';
import { CustomInputCheckbox } from '../custom-input-checkbox/custom-input-checkbox';
import styles from './search-door-form.module.scss';

type SearchDoorFormProps = {
  getSearchValue: (evt: ChangeEvent<HTMLInputElement>) => void,
  toggleMaterialDoors: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: string
}

export function SearchDoorForm({getSearchValue, toggleMaterialDoors, value}: SearchDoorFormProps): JSX.Element {
  const {searchForm, doorParameters, searchField, doorTypesField} = styles;

  const typeDoorList = [
    { id: 1, name: 'type-door', label: 'межкомнатная', checked: true },
    { id: 2, name: 'type-door', label: 'входная', checked: false },
  ]

  return (
    <div className={searchForm}>
      <h3>Модель двери</h3>

      <label htmlFor="" className={searchField}>
        <input type="search" value={value} onChange={getSearchValue}/>
        <span>Введите название или код</span>
      </label>


      <fieldset className={doorParameters}>
        <label htmlFor="">
          <input type="number" name="height"/>
          <span>высота</span>
        </label>

        <label htmlFor="">
          <input type="number" name="width"/>
          <span>ширина</span>
        </label>

        <label htmlFor="">
          <input type="number" name="depth" />
          <span>толщина <br/>стен</span>
        </label>
      </fieldset>

      <fieldset className={doorTypesField}>
        {
          typeDoorList.map((type) => (
            <CustomInputCheckbox
              toggleMaterialDoors={toggleMaterialDoors}
              key={type.id}
              name={type.name}
              label={type.label}
              size='little'
              value={type.checked}
            />
          ))
        }
      </fieldset>
    </div>
  );
}
