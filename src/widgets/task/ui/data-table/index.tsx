import { FC } from 'react'

interface DataProps {
  parameter: string
  value: string
}

const data: DataProps[] = [
  { parameter: 'Кол-во пройденных заданий', value: '30' },
  { parameter: 'Кол-во невыполненных заданий', value: '5' },
  { parameter: 'Общее время выполнения', value: '2 часа' },
  { parameter: 'Средняя оценка', value: '4.5' },
  { parameter: 'Максимальная оценка', value: '5' },
  { parameter: 'Минимальная оценка', value: '3' },
]

const TaskDataTable: FC = () => {
  return (
    <table className='mt-20 w-full border-collapse'>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className='grid grid-cols-2'
          >
            <td
              className={`text-ttBlack border-r border-gray-300 py-4 pr-9 text-right ${index === data.length - 1 ? '' : 'border-b'}`}
            >
              {item.parameter}
            </td>
            <td
              className={`text-ttLightBlack border-gray-300 py-4 pl-9 text-left ${index === data.length - 1 ? '' : 'border-b'}`}
            >
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export { TaskDataTable }
