import { kitsMock } from '../../mocks/kits';
import styles from './card-complete-set.module.scss';

type CardCompleteSetProps = {
	disabled?: boolean
}

export function CardCompleteSet({disabled}: CardCompleteSetProps): JSX.Element {
  const {cardCompleteSet, kitsList} = styles;
	const {data} = kitsMock;
	const {kits} = data;

  return (
    <div className={cardCompleteSet} aria-disabled={!disabled}>
      <fieldset>
        <legend>
          <b>Комплекты</b>
        </legend>
				<div className={kitsList}>
				   {kits.map((kit) => (<button type="button" key={kit.code} >{kit.title}</button>))}
					 <button type="button" >Базовый комплект с широким наличником</button>
				</div>
				
      </fieldset>

      <table className="table">
	<thead>
		<tr>
			<th></th>
			<th>Кол-во</th>
			<th>Цена за шт</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Дверное полотно Verda Бавария 16 дуб шале капучино глухое пвх 700х2000 мм</td>
			<td>1</td>
			<td>67439</td>
		</tr>
		<tr>
			<td>Коробка дверная Verda Бавария пвх дуб шале капучино с уплотнителем</td>
			<td>1</td>
			<td>90727</td>
		</tr>
		<tr>
			<td>Доборная планка Verda Бавария пвх дуб шале капучино 120х8х2070 мм (1 шт.)</td>
			<td>1</td>
			<td>99134</td>
		</tr>
		<tr>
			<td>Наличник прямой Verda Бавария пвх дуб шале капучино 70х8х2150 мм (1 шт.)</td>
			<td>1</td>
			<td>19803</td>
		</tr>
		<tr>
			<td>Ручка дверная Palladium City A Bruno M SN/CP круглая розетка (хром)</td>
			<td>1</td>
			<td>24116</td>
		</tr>
	</tbody>
</table>
    </div>
  );
}