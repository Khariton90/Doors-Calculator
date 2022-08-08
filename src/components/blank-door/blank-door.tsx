import React, { useState } from 'react';
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

const filterArray = (door:any, value:string) => {

  if (value) {
    if (door.data.product.code === +value) {
      return door;
    } 

    if (door.data.product.code.toString().includes(value)) {
      return door;
    }

    if (door.data.product.title.toLowerCase().includes(value.toLowerCase())) {
      return door;
    }
  
    return null;
  }

  return door;
}

const MaterialDoors = {
  METALL: 'металлическая',
  INTERRIOR: 'межкомнатная'
}

export function BlankDoor({open, addBlankDoorHandle}: BlankDoorProps): JSX.Element {
  const [value, setValue] = useState('');
  const getSearchValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => prevValue = evt.target.value);
  }

  const [material, setMaterial] = useState<string | undefined>(MaterialDoors.INTERRIOR);

  const toggleMaterialDoors = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setMaterial((prevMaterial) => prevMaterial = evt.target.dataset.name)
  }

  const filteredDoors = doors.filter((door) => filterArray(door, value));
  const filteredMetalDoors = metalDoors.filter((door) => filterArray(door, value));

  const typeDoorsList = material === MaterialDoors.INTERRIOR ? filteredDoors : filteredMetalDoors;

  if (open) {
    return (
      <div className={styles.blankDoor}>
        <SearchDoorForm getSearchValue={getSearchValue} value={value} toggleMaterialDoors={toggleMaterialDoors}/>
        <SliderDoor doors={typeDoorsList}/>
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