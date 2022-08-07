import { CustomInputCheckbox } from '../custom-input-checkbox/custom-input-checkbox';
import styles from './list-table.module.scss';

type ListTableProps = {
	title: string
}

export function ListTable({title}: ListTableProps): JSX.Element {
  return (
    <>
    <h3>{title}</h3>
    <table className={styles.table}>
	<thead>
		<tr>
			<th>Наименование услуги</th>
			<th>Перечень работ</th>
			<th>Ед.изм.</th>
			<th>Цена</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Установка входной двери (до 95 кг)</td>
			<td>Установка входной двери, запенивание (до 3х см.) по периметру, без заполнения полостей дверной рамы. Демонтаж старой деревянной двери (без сохранения полотна). Анкера в стоимость не входят.	</td>
			<td>1 шт.</td>
			<td><span>3400</span> <CustomInputCheckbox name={'type.name'} size="little" type='checkbox'/></td>
		</tr>
		<tr aria-disabled>
			<td>Одиночный монтаж. Установка одной  межкомнатной двери с предустановленной фурнитурой (замок, ручки, петли, ответная планка).</td>
			<td>Установка двери с предустановленной фурнитурой (замок, ручки, петли, ответная планка), 
        сборка дверной коробки, установка по уровню, крепление в проем, запенивание (до 3х см. по периметру). Установка наличников. Выезд мастера на установку одной межкомнатной двери.	</td>
			<td>1 шт.</td>
			<td><span>3000</span> <CustomInputCheckbox name={'type.name'} size="little" type='checkbox' disabled/></td>
		</tr>
	</tbody>
</table>
    </>
  )
}