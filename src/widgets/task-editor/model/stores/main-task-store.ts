import { create } from 'zustand'

import createSelectors from '@src/shared/helpers/zustand-following-function'

import { INITIAL_MAIN_TASK_STATE } from '../../config'
import { MainTaskInfo } from '../../types'

interface MainTaskState {
  mainTaskInfo: MainTaskInfo
}

const useMainTaskStoreBase = create<MainTaskState>()(set => ({
  mainTaskInfo: INITIAL_MAIN_TASK_STATE,
}))

export const useMainTaskStore = createSelectors(useMainTaskStoreBase)
