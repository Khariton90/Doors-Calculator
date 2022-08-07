import { CustomInputCheckbox } from '../custom-input-checkbox/custom-input-checkbox';
import { InputField } from '../input-field/input-field';
import styles from './door-installation.module.scss';
import cn from 'classnames';

export function DoorInstallation(): JSX.Element {

  const installationTypeList = [
    { id: 1, name: 'type-installation', label: 'стандарт' },
    { id: 2, name: 'type-installation', label: 'арка' },
    { id: 3, name: 'type-installation', label: 'портал' },
    { id: 4, name: 'type-installation', label: 'двухстворчатая' },
  ];

  const openingTypeList = [
    { id: 1, name: 'type-opening', label: 'левая' },
    { id: 2, name: 'type-opening', label: 'правая' },
    { id: 3, name: 'type-opening', label: 'раздвижная' },
  ]

  const wallMaterialTypeList = [
    { id: 1, name: 'type-wall-material', label: 'бетон/газобетон' },
    { id: 2, name: 'type-wall-material', label: 'кирпич' },
    { id: 3, name: 'type-wall-material', label: 'дерево' },
    { id: 4, name: 'type-wall-material', label: 'гипсокартон' },
  ]

  const demolitionTypeList = [
    { id: 1, name: 'type-demolition', label: 'простой' },
    { id: 2, name: 'type-demolition', label: 'сложный' },
  ]

  const furnitureTypeList = [
    { id: 1, name: 'type-furniture', label: 'защелка' },
    { id: 2, name: 'type-furniture', label: 'замок' },
    { id: 3, name: 'type-furniture', label: 'завертка' },
    { id: 4, name: 'type-furniture', label: 'магнитный замок' },
  ]

  return (
    <>
      <h3>Монтаж. Двери</h3>
      <form className={styles.doorInstallation}>
        <div className={styles.row}>
          <fieldset style={{flex: 0.8}}>
            <h3>Размер проема, <span>мм</span></h3>
            <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            <InputField />
            <InputField />
            </div>
            
          </fieldset>

          <fieldset><h3>Добор, <span>мм</span></h3>
          <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            </div>
          
          </fieldset>

          <fieldset><h3>Порог, <span>мм</span></h3>
          <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            <InputField />
            <InputField />
            </div>
          </fieldset>
        </div>

        <div className={cn(styles.row, styles.fieldsetNumber)}>
          <fieldset  style={{flex: 0.8}}>
            <h3>Рекомендуемый<br /> размер полотна, <span>мм</span></h3>
            <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            <InputField />
            </div>
          </fieldset>

          <fieldset><h3>Распил добора/<br />наличника вдоль, <span>мм</span></h3>
          <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            </div>
          </fieldset>

          <fieldset><h3>Изменение размера<br /> проема, <span>м.п.</span></h3>
          <div className={cn(styles.row, styles.fieldsetNumber)}>
            <InputField />
            <InputField />
            </div>
          </fieldset>
        </div>
      </form>

      <form className={styles.doorInstallation}>
        <div className={styles.row}>
          <fieldset>
            <h3>Тип двери, <span>V</span></h3>
            <div className={styles.checkboxesList}>
              {
                installationTypeList.map((type) => (
                  <CustomInputCheckbox
                    key={type.id}
                    name={type.name}
                    label={type.label}
                  />
                ))
              }
            </div>
          </fieldset>

          <fieldset  style={{flex: 0.7}}><h3>Вид открытия <span>V</span></h3>
            <div className={styles.checkboxesList}>
              {
                openingTypeList.map((type) => (
                  <CustomInputCheckbox
                    key={type.id}
                    name={type.name}
                    label={type.label}
                  />
                ))
              }
            </div>
          </fieldset>
          <fieldset></fieldset>
        </div>

        <div className={styles.row}>
          <fieldset><h3>Mатериал стен, <span>V</span></h3>
            <div className={styles.checkboxesList}>
              {
                wallMaterialTypeList.map((type) => (
                  <CustomInputCheckbox
                    key={type.id}
                    name={type.name}
                    label={type.label}
                  />
                ))
              }
            </div>
          </fieldset>

          <fieldset style={{flex: 0.7}}><h3>Демонтаж, <span>V</span></h3>
            <div className={styles.checkboxesList}>
              {
                demolitionTypeList.map((type) => (
                  <CustomInputCheckbox
                    key={type.id}
                    name={type.name}
                    label={type.label}
                  />
                ))
              }
            </div>
          </fieldset>

          <fieldset><h3>Фурнитура, <span>V</span></h3>
            <div className={styles.checkboxesList}>
              {
                furnitureTypeList.map((type) => (
                  <CustomInputCheckbox
                    key={type.id}
                    name={type.name}
                    type='checkbox'
                    label={type.label}
                  />
                ))
              }
            </div>
          </fieldset>
        </div>
      </form>
    </>
  )
}