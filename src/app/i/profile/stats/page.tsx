import ListEntry from '@/shared/components/list-entry'

const ProfileDataPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <ListEntry
        name='Статистика 1'
        value='Значение 1'
      />
      <ListEntry
        name='Статистика 2'
        value='Значение 2'
      />
      <ListEntry
        name='Статистика 3'
        value='Значение 3'
      />
    </div>
  )
}

export default ProfileDataPage
