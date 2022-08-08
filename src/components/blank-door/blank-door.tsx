import { doors } from '../../mocks/doors';
import { metalDoors } from '../../mocks/metal-doors';
import { AddButton } from '../add-button/add-button';
import { ArrangeButton } from '../arrange-button/arrange-button';
import { DoorInstallation } from '../door-installation/door-installation';
import { ListTable } from '../list-table/list-table';
import { SearchDoorForm } from '../search-door-form/search-door-form';
import SliderDoor from '../slider-door/slider-door';
import { TotalPrice } from '../total-price/total-price';
import styles from './blank-door.module.scss';

const doorsAndArches = {
  title: 'Двери и арки'
};

const extraJob = {
  title: 'Дополнительные работы'
}

type BlankDoorProps = {
  open: boolean,
  addBlankDoorHandle: () => void
}



export function BlankDoor({open, addBlankDoorHandle}: BlankDoorProps): JSX.Element {

  if (open) {
    return (
      <div className={styles.blankDoor}>
        <SearchDoorForm />
        <SliderDoor doors={doors}/>
        <DoorInstallation />
        <ListTable title={doorsAndArches.title} />
        <ListTable title={extraJob.title} />
        <TotalPrice />
        <AddButton addBlankDoorHandle={addBlankDoorHandle}/>
        <ArrangeButton />
      </div>
    )
  }

  return (
    <div>
      HELLO WORLD
    </div>
  )
    
}