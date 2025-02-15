import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProfileState = {
  email: string
  firstName: string
  lastName: string
  nickname: string
  setProfile: (profile: Partial<ProfileState>) => void
}

export const useProfileStore = create(
  persist<ProfileState>(
    set => ({
      email: '',
      firstName: '',
      lastName: '',
      nickname: '',
      setProfile: profile => set(state => ({ ...state, ...profile })),
    }),
    {
      name: 'profile-storage', // потом изменить
    }
  )
)
